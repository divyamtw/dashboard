import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-background p-4 h-screen rounded-l-3xl flex items-center justify-center border-l border-t border-b border-border shadow-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10 flex flex-col items-center gap-6">
        <h1 className="text-primary font-bold text-7xl md:text-9xl text-center glow-text tracking-tighter">
          Landing
        </h1>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 rounded-xl border border-border text-foreground bg-card font-medium text-sm hover:bg-secondary transition-all active:scale-[0.98]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
