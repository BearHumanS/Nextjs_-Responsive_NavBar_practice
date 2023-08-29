import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "홈이다",
};

export default function Home() {
  return (
    <div className="mt-[200px]">
      <p className="font-bold text-center uppercase text-3xl">home</p>
    </div>
  );
}
