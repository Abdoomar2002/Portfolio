import React from "react";

// Fixed, animated ambient background: drifting aurora orbs + a faint grid.
const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* base tint */}
      <div className="absolute inset-0 bg-background" />

      {/* aurora orbs */}
      <div
        className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full blur-[120px] opacity-40"
        style={{ background: "radial-gradient(circle, #2dd4bf, transparent 60%)", animation: "auroraDrift 22s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-[40rem] w-[40rem] rounded-full blur-[120px] opacity-35"
        style={{ background: "radial-gradient(circle, #7c5cff, transparent 60%)", animation: "auroraDrift 26s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full blur-[120px] opacity-25"
        style={{ background: "radial-gradient(circle, #ff4d8d, transparent 60%)", animation: "auroraDrift 30s ease-in-out infinite" }}
      />

      {/* grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% 0%, transparent 40%, rgba(5,6,10,0.85) 100%)" }} />
    </div>
  );
};

export default Background;
