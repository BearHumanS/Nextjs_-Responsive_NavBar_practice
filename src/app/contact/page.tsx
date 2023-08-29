import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "콘택트이다이다",
};

export default function Contact() {
  return (
    <div className="mt-[200px]">
      <p className="font-bold text-center uppercase text-3xl">Contact</p>
    </div>
  );
}
