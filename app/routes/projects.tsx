import type { Route } from "./+types/projects";
import { generateMetadata } from "~/utils/metadata";

export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    title: "Projects",
    description:
      "Explore my portfolio of projects and development work. See what I've built and learn about my technical expertise.",
    path: "/projects",
  });
}

export default function Projects() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-foreground mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-foreground/80">Project showcase coming soon...</p>
        </div>
      </div>
    </section>
  );
}
