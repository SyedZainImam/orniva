"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  return (
    <div className="border border-border bg-bg-card p-8">
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full flex items-center justify-center gap-3 border border-border hover:border-gold/50 bg-bg-elevated px-6 py-4 transition-all duration-300 group"
      >
        <FcGoogle size={22} />
        <span className="font-heading text-[12px] tracking-[0.1em] text-text-muted group-hover:text-text transition-colors">
          Continue with Google
        </span>
      </button>

      <div className="mt-6 text-center">
        <p className="text-text-faint text-xs leading-relaxed">
          By signing in, you agree to our{" "}
          <a href="/policy/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
