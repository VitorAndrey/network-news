import { createClient, groq } from "next-sanity";

export async function getProjects(query: string) {
  const client = createClient({
    projectId: "l0ez06ph",
    dataset: "production",
    apiVersion: "2023-06-24",
    useCdn: true,
  });

  return client.fetch(groq`${query}`);
}
