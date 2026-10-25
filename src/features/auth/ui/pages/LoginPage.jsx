import React from "react";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const { register, handleSubmit, onLoginSubmit, errors, navigate } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <h1 className="text-lg font-semibold uppercase tracking-[0.35em] text-white">
            Sign in
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Enter your email and password to sign in.
          </p>
        </div>

        <form onSubmit={handleSubmit(onLoginSubmit)} className="mt-12 space-y-8">
          <div className="group">
            <label
              htmlFor="email"
              className="block text-xs font-medium uppercase tracking-[0.15em] text-neutral-500 transition-colors group-focus-within:text-neutral-200"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className={`mt-1 block w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:ring-0 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#000000] ${
                errors.email
                  ? "border-red-500/70 focus:border-red-400"
                  : "border-white/15 hover:border-white/30 focus:border-white"
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
              className="block text-xs font-medium uppercase tracking-[0.15em] text-neutral-500 transition-colors group-focus-within:text-neutral-200"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={`mt-1 block w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:ring-0 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#000000] ${
                errors.password
                  ? "border-red-500/70 focus:border-red-400"
                  : "border-white/15 hover:border-white/30 focus:border-white"
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

          <label className="flex cursor-pointer select-none items-center gap-3 text-sm text-neutral-500 transition-colors hover:text-neutral-200">
            <input
              type="checkbox"
              className="peer sr-only"
              {...register("remember")}
            />
            <span className="flex h-5 w-5 items-center justify-center rounded border border-white/20 bg-transparent text-black transition peer-checked:border-white peer-checked:bg-white peer-focus-visible:ring-2 peer-focus-visible:ring-white/40 peer-checked:[&>svg]:opacity-100">
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
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:bg-neutral-300"
          >
            Sign in <ArrowRight size={16} />
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-neutral-500">
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