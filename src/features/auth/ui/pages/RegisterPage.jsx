import React from "react";
import { useAuth } from "../../hooks/useAuth";

const RegisterPage = () => {
  const { register, handleSubmit, onRegisterSubmit, errors, navigate } = useAuth();

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
            Create account
          </h1>
          <p className="mt-3 text-xs leading-relaxed text-neutral-400">
            Enter your details to create an account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onRegisterSubmit)}
          className="mt-12 space-y-7"
        >
          <div className="group">
            <label
              htmlFor="name"
              className="block text-xs text-neutral-400 transition-colors group-focus-within:text-neutral-200"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className={`mt-1 block w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:ring-0 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#121212] ${
                errors.name
                  ? "border-red-500/70 focus:border-red-400"
                  : "border-white/10 hover:border-white/20 focus:border-white/60"
              }`}
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="mt-2 text-xs text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

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
              placeholder="Create a password"
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

          <div className="group">
            <label
              htmlFor="confirmPassword"
              className="block text-xs text-neutral-400 transition-colors group-focus-within:text-neutral-200"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className={`mt-1 block w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:ring-0 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#121212] ${
                errors.confirmPassword
                  ? "border-red-500/70 focus:border-red-400"
                  : "border-white/10 hover:border-white/20 focus:border-white/60"
              }`}
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-xs text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-3 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:bg-white/20"
          >
            Create account
          </button>
        </form>

        <p className="mt-10 text-center text-xs text-neutral-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer font-semibold text-white transition-opacity hover:opacity-80"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;