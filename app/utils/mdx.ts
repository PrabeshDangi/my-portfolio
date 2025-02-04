import { readFile, readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  slug: string;
}

export async function getProject(slug: string) {
  const source = await readFile(
    path.join(process.cwd(), "content", "projects", `${slug}.mdx`),
    "utf8"
  );

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.join(process.cwd(), "content", "projects"),
  });

  return {
    code,
    frontmatter: {
      ...frontmatter,
      slug,
    } as ProjectFrontmatter,
  };
}

export async function getAllProjects() {
  const files = await readdir(path.join(process.cwd(), "content", "projects"));
  const projects = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const source = await readFile(
          path.join(process.cwd(), "content", "projects", file),
          "utf8"
        );
        const slug = file.replace(/\.mdx$/, "");
        const { data } = matter(source);

        return {
          ...data,
          slug,
        } as ProjectFrontmatter;
      })
  );

  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
