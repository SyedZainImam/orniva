import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Sign In — Orniva",
  description: "Sign in to your Orniva account",
};

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-3">Welcome</p>
          <h1 className="font-heading text-3xl font-semibold text-text mb-3">Sign In</h1>
          <p className="text-text-faint text-sm">Sign in to manage your wishlist and orders</p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
