import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "어바웃이다",
};

export default function About() {
  return (
    <div className="mt-[200px]">
      <p className="font-bold text-center uppercase text-3xl">About</p>
    </div>
  );
}
