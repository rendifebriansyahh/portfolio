import React from "react";

export default function AuroraButton({ children }) {
  return (
    <button className="aurora-btn relative px-8 py-3 rounded-xl text-white font-semibold overflow-hidden">
      <span className="relative z-10">{children}</span>
    </button>
  );
}
