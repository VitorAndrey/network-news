import NewsletterNavbar from "@/app/components/NewsletterNavbar";

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NewsletterNavbar />
      {children}
    </>
  );
}
