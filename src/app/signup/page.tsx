import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "회원가입이다",
};

export default function Signup() {
  return (
    <div className="mt-[200px]">
      <p className="font-bold text-center uppercase text-3xl">Signup</p>
    </div>
  );
}
