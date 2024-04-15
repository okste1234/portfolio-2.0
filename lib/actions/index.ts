import { client } from "@/sanity/lib/client";

export async function fetchFavoriteProjects() {
  const data =
    await client.fetch(`*[_type == "projects" && favourite == true][0...2]{
        _id,
        "slug": slug.current,
        projectBanner,
        name,
        description,
      }`);
  return data;
}

export async function fetchLatestProjects() {
  const data =
    await client.fetch(`*[_type == "projects"] | order(_createdAt desc) [0...3]{
        _id,
        "slug": slug.current,
        projectBanner,
        name,
        description,
      }`);
  return data;
}

export async function fetchExperience() {
  const data = await client.fetch(`*[_type == "experience"]{
          _id,
            position,
            company,
            description,
            startDate,
            endDate
        }`);
  return data;
}

export async function fetchFAQs() {
  const data = await client.fetch(`*[_type == "faqs"]{
          _id,
            question,
            answer
        }`);
  return data;
}

export async function fetchAllProjects() {
  const data = await client.fetch(`*[_type == "projects"]{
        _id,
        "slug": slug.current,
        projectBanner,
        name,
        description,
      }`);
  return data;
}

export async function fetchProjectWithSlug(slug: string) {
  const data =
    await client.fetch(`*[_type == "projects" && slug.current == "${slug}"][0]{
  _id,
    overview,
    highlights,
    url,
    name,
    banner,
  changelog,
    description
}`);
  return data;
}
