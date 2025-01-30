interface MetadataProps {
  title: string;
  description: string;
  path: string;
}

const SITE_NAME = "Prabesh Dangi";
const BASE_URL = "https://prabeshdangi.com.np";

export function generateMetadata({ title, description, path }: MetadataProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    // OpenGraph
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    // Twitter
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    // Canonical
    { tagName: "link", rel: "canonical", href: url },
  ];
}
