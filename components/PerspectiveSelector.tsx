"use client";

import { usePerspective } from "@/context/PerspectiveContext";

export default function PerspectiveSelector() {
  const { perspective, switchPerspective, perspectives } =
    usePerspective();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-black-100/80 backdrop-blur-md p-1 shadow-lg">
        {perspectives.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => switchPerspective(key)}
            className={`
              relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
              ${
                perspective === key
                  ? "bg-purple text-white shadow-md"
                  : "text-white/60 hover:text-white hover:bg-white/[0.06]"
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
