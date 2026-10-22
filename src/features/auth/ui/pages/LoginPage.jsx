import React from "react";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const { register, handleSubmit, onLoginSubmit, errors, navigate } = useAuth();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#121212] px-4 py-10">
      {/* Decorative background ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] bg-[radial-gradient(closest-side,rgba(255,255,255,0.035),transparent)] shadow-[inset_0_0_140px_rgba(255,255,255,0.03)]"
      />

      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center">
          <h1 className="text-lg font-medium uppercase tracking-[0.35em] text-white">
            Sign in
          </h1>
          <p className="mt-3 text-xs leading-relaxed text-neutral-400">
            Enter your email and password to sign in.
          </p>
        </div>

        <form onSubmit={handleSubmit(onLoginSubmit)} className="mt-12 space-y-8">
          <div className="group">
            <label
              htmlFor="email"
              className="block text-xs text-neutral-400 transition-colors group-focus-within:text-neutral-200"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className={`mt-1 block w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:ring-0 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#121212] ${
                errors.email
                  ? "border-red-500/70 focus:border-red-400"
                  : "border-white/10 hover:border-white/20 focus:border-white/60"
              }`}
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="mt-2 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="group">
            <label
              htmlFor="password"
              className="block text-xs text-neutral-400 transition-colors group-focus-within:text-neutral-200"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={`mt-1 block w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:ring-0 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#121212] ${
                errors.password
                  ? "border-red-500/70 focus:border-red-400"
                  : "border-white/10 hover:border-white/20 focus:border-white/60"
              }`}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="mt-2 text-xs text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <label className="flex cursor-pointer select-none items-center gap-3 text-xs text-neutral-400 transition-colors hover:text-neutral-200">
            <input
              type="checkbox"
              className="peer sr-only"
              {...register("remember")}
            />
            <span className="flex h-5 w-5 items-center justify-center rounded-md border border-white/15 bg-white/[0.02] text-white transition peer-checked:border-white/50 peer-checked:bg-white/10 peer-focus-visible:ring-2 peer-focus-visible:ring-white/30 peer-checked:[&>svg]:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 opacity-0 transition-opacity"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            Remember me
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:bg-white/20"
          >
            Sign in <ArrowRight size={16} />
          </button>
        </form>

        <p className="mt-10 text-center text-xs text-neutral-500">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer font-semibold text-white transition-opacity hover:opacity-80"
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;