import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "로그인이다",
};

export default function Login() {
  return (
    <div className="mt-[200px]">
      <p className="font-bold text-center uppercase text-3xl">Login</p>
    </div>
  );
}
