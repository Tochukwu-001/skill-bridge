"use client";

import { useState } from "react";
import { Theme } from "@/components/Theme";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic (Firebase / NextAuth / custom API)
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-50">
      {/* Left Decorative Side */}
      <div
        className="hidden lg:flex flex-col justify-between p-12 text-white relative overflow-hidden"
        style={{ backgroundColor: Theme.darkGreen }}
      >
        <div className="z-10">
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight"
            style={{ color: Theme.lightYellow }}
          >
            SkillBridge
          </Link>
        </div>

        <div className="z-10 space-y-6 max-w-lg">
          <h1
            className="text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: Theme.lightYellow }}
          >
            {isSignUp
              ? "Join the Community of Practitioners."
              : "Welcome Back to SkillBridge."}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Connect with peers, share your expertise, unlock opportunities, and bridge the gap between learning and achieving.
          </p>
        </div>

        <div className="z-10 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
        </div>

        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: Theme.lightYellow }}
        />
      </div>

      {/* Right Form Side */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <Link
              href="/"
              className="lg:hidden text-2xl font-bold tracking-tight inline-block mb-4"
              style={{ color: Theme.darkGreen }}
            >
              SkillBridge
            </Link>
            <h2
              className="text-3xl font-bold tracking-tight"
              style={{ color: Theme.darkGreen }}
            >
              {isSignUp ? "Create an account" : "Sign in to your account"}
            </h2>
            <p className="text-sm text-slate-600">
              {isSignUp
                ? "Start sharing your skills and discovering opportunities"
                : "Enter your credentials to access your dashboard"}
            </p>
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm"
              style={{ borderColor: `${Theme.darkGreen}20` }}
            >
              <FcGoogle className="text-xl" />
              <span>Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm"
              style={{ borderColor: `${Theme.darkGreen}20` }}
            >
              <FaGithub className="text-xl text-slate-900" />
              <span>GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-slate-200" />
            <span className="absolute bg-slate-50 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Or continue with email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase text-slate-600 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 bg-white text-sm"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase text-slate-600 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 bg-white text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase text-slate-600"
                >
                  Password
                </label>
                {!isSignUp && (
                  <Link
                    href="#"
                    className="text-xs font-semibold hover:underline"
                    style={{ color: Theme.darkGreen }}
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 bg-white text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm shadow-md transition-transform active:scale-[0.98] hover:opacity-95"
              style={{ backgroundColor: Theme.darkGreen }}
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          {/* Toggle View */}
          <p className="text-center text-sm text-slate-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-bold hover:underline"
              style={{ color: Theme.darkGreen }}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}