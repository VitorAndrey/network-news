import { PortableText } from "@portabletext/react";
import Image from "next/image";
import News from "./News";

interface NewsletterProps {
  newsletter: {
    title: string;
    Introduction: [];
    footer: {
      title: string;
      content: [];
    };
    cover: {
      image: string;
    };
    news: [];
  };
}

const Newsletter = ({ newsletter }: NewsletterProps) => {
  const { title, Introduction, footer, cover, news } = newsletter;

  return (
    <main className="w-[95%] max-w-[500px] mx-auto flex flex-col gap-8 py-8">
      <Image
        src={cover.image}
        alt="coverImage"
        width={500}
        height={300}
        className="w-full h-auto"
      />

      <h2 className="text-3xl">{title}</h2>

      <PortableText value={Introduction} />

      <section>
        {news.map((news, index) => (
          <News newsInfo={news} key={index} />
        ))}
      </section>

      <footer className="space-y-8">
        <h2 className="text-[1.5rem]">{footer.title}</h2>
        <PortableText value={footer.content} />
      </footer>
    </main>
  );
};

export default Newsletter;
