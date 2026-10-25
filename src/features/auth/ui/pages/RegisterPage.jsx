import React from "react";
import { useAuth } from "../../hooks/useAuth";

const RegisterPage = () => {
  const { register, handleSubmit, onRegisterSubmit, errors, navigate } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <h1 className="text-lg font-semibold uppercase tracking-[0.35em] text-white">
            Create account
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
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
              className="block text-xs font-medium uppercase tracking-[0.15em] text-neutral-500 transition-colors group-focus-within:text-neutral-200"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className={`mt-1 block w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:ring-0 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#000000] ${
                errors.name
                  ? "border-red-500/70 focus:border-red-400"
                  : "border-white/15 hover:border-white/30 focus:border-white"
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
              placeholder="Create a password"
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

          <div className="group">
            <label
              htmlFor="confirmPassword"
              className="block text-xs font-medium uppercase tracking-[0.15em] text-neutral-500 transition-colors group-focus-within:text-neutral-200"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className={`mt-1 block w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:ring-0 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#000000] ${
                errors.confirmPassword
                  ? "border-red-500/70 focus:border-red-400"
                  : "border-white/15 hover:border-white/30 focus:border-white"
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
            className="mt-3 w-full rounded-lg bg-white px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:bg-neutral-300"
          >
            Create account
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-neutral-500">
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