import React from "react";

/**
 * Global loader.
 *
 * <Loader />                      -> full screen, black background, "Loading"
 * <Loader fullScreen={false} />   -> fits inside its parent (use for sections / cards)
 * <Loader text="Please wait" />   -> custom label
 */
const Loader = ({ fullScreen = true, text = "Loading" }) => {
  return (
    <div
      className={`flex items-center justify-center px-4 ${
        fullScreen ? "min-h-screen bg-black" : "h-full min-h-[200px] w-full"
      }`}
    >
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-5"
      >
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-white motion-reduce:animate-pulse" />
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Loader;