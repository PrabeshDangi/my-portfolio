import { generateMetadata } from "~/utils/metadata";
import { Link } from "react-router";
import type { Route } from "./+types/singleProject";
import { getMDXComponent } from "mdx-bundler/client";
import { getProject } from "~/utils/mdx";
import { useMemo } from "react";

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const { code, frontmatter } = await getProject(params.slug);
    return { code, frontmatter };
  } catch (error) {
    throw new Response("Project not found", { status: 404 });
  }
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return generateMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: "/projects",
    });
  }

  const { frontmatter } = data;
  return generateMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/projects/${frontmatter.slug}`,
  });
}

export default function SingleProjectPage({
  loaderData: data,
}: Route.ComponentProps) {
  const Component = useMemo(() => getMDXComponent(data.code), [data.code]);
  const { frontmatter } = data;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        {frontmatter.image && (
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        )}
        <h1 className="text-4xl font-bold mt-6 mb-2">{frontmatter.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {frontmatter.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {(frontmatter.github || frontmatter.demo) && (
          <div className="flex gap-4 mb-6">
            {frontmatter.github && (
              <a
                href={frontmatter.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                GitHub Repository
              </a>
            )}
            {frontmatter.demo && (
              <a
                href={frontmatter.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>

      <article className="prose prose-lg dark:prose-invert prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg max-w-none">
        <Component />
      </article>
    </div>
  );
}
