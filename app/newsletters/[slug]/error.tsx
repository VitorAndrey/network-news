"use client";

import Image from "next/image";

import errorImage from "/public/error.svg";
import Link from "next/link";

export default function loadingNewsletter() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Link href="/">
        <Image
          src={errorImage}
          alt="Somethin Went Wrong!"
          width={999}
          height={999}
          priority
          className="w-full max-w-[600px] h-auto"
        />
      </Link>
    </main>
  );
}
