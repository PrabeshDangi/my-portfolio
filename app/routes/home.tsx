import Hero from "~/components/Hero/Hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Prabesh" },
    {
      name: "Prabesh Dangi",
      content:
        "Welcome to Prabesh Dangi's Portfolio! A backend developer with a passion for creating robust and scalable applications.",
    },
  ];
}

export default function Home() {
  return <Hero />;
}
