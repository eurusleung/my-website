"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { defaultData } from "@/data";
import type { Perspective, ResumeData } from "@/lib/types";
import { PERSPECTIVE_LABELS } from "@/lib/types";

interface PerspectiveContextValue {
  perspective: Perspective;
  data: ResumeData;
  loading: boolean;
  switchPerspective: (p: Perspective) => void;
  perspectives: Array<{ key: Perspective; label: string }>;
}

const PerspectiveContext = createContext<PerspectiveContextValue>({
  perspective: "default",
  data: defaultData,
  loading: false,
  switchPerspective: () => {},
  perspectives: [],
});

const PERSPECTIVES: Array<{ key: Perspective; label: string }> = [
  { key: "default", label: PERSPECTIVE_LABELS.default },
  { key: "recruiter", label: PERSPECTIVE_LABELS.recruiter },
  { key: "business", label: PERSPECTIVE_LABELS.business },
  { key: "reader", label: PERSPECTIVE_LABELS.reader },
  { key: "professor", label: PERSPECTIVE_LABELS.professor },
];

const CACHE_PREFIX = "resume_perspective_";

function getCachedData(perspective: Perspective): ResumeData | null {
  try {
    const cached = localStorage.getItem(CACHE_PREFIX + perspective);
    if (cached) {
      return JSON.parse(cached) as ResumeData;
    }
  } catch {
    // localStorage not available or corrupted
  }
  return null;
}

function setCachedData(perspective: Perspective, data: ResumeData) {
  try {
    localStorage.setItem(CACHE_PREFIX + perspective, JSON.stringify(data));
  } catch {
    // localStorage full or unavailable
  }
}

export function PerspectiveProvider({ children }: { children: React.ReactNode }) {
  const [perspective, setPerspective] = useState<Perspective>("default");
  const [data, setData] = useState<ResumeData>(defaultData);
  const [loading, setLoading] = useState(false);

  const switchPerspective = useCallback(
    async (p: Perspective) => {
      if (p === "default") {
        setPerspective("default");
        setData(defaultData);
        return;
      }

      // Check client cache
      const cached = getCachedData(p);
      if (cached) {
        setPerspective(p);
        setData(cached);
        return;
      }

      setLoading(true);
      setPerspective(p);

      try {
        const res = await fetch("/api/resume", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ perspective: p }),
        });

        if (!res.ok) {
          throw new Error("API error");
        }

        const newData: ResumeData = await res.json();
        setCachedData(p, newData);
        setData(newData);
      } catch (err) {
        console.error("Failed to fetch perspective data:", err);
        // Fall back to default data but keep the perspective
        setData(defaultData);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return (
    <PerspectiveContext.Provider
      value={{
        perspective,
        data,
        loading,
        switchPerspective,
        perspectives: PERSPECTIVES,
      }}
    >
      {children}
    </PerspectiveContext.Provider>
  );
}

export function usePerspective() {
  const ctx = useContext(PerspectiveContext);
  if (!ctx) {
    throw new Error("usePerspective must be used within PerspectiveProvider");
  }
  return ctx;
}
