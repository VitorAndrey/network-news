"use client";

import Link from "next/link";

import Headroom from "react-headroom";

export default function NewsletterNavbar() {
  return (
    <Headroom>
      <nav>
        <Link href="/newsletters">Voltar</Link>
      </nav>
    </Headroom>
  );
}
