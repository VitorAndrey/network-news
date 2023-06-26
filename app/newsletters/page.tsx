import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";

interface Newsletter {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  _createdAt: string;
}

export default async function Newsletters() {
  const newsletters = await getProjects(
    `*[_type == "newsletter"]{title, slug, _createdAt} | order(_createdAt desc)`
  );

  return (
    <div className="flex flex-col gap-3">
      {newsletters.map((newsletter: Newsletter) => (
        <Link href={`/newsletters/${newsletter.slug.current}`} key={newsletter._createdAt}>
          {newsletter.title}
        </Link>
      ))}
    </div>
  );
}
