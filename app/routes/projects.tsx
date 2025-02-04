import { generateMetadata } from "~/utils/metadata";
import type { Route } from "./+types/projects";
import { getAllProjects } from "~/utils/mdx";
import ProjectsPage from "~/pages/ProjectsPage";

export const meta = () =>
  generateMetadata({
    title: "Projects",
    description: "Check out my latest projects and experiments.",
    path: "/projects",
  });

export async function loader() {
  const projects = await getAllProjects();
  return { projects };
}

export default function Projects({
  loaderData: { projects },
}: Route.ComponentProps) {
  return <ProjectsPage projects={projects} />;
}
