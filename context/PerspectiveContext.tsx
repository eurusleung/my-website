"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import { defaultData } from "@/data";
import recruiterData from "@/data/perspectives/recruiter.json";
import businessData from "@/data/perspectives/business.json";
import readerData from "@/data/perspectives/reader.json";
import professorData from "@/data/perspectives/professor.json";
import type { Perspective, ResumeData } from "@/lib/types";
import { PERSPECTIVE_LABELS } from "@/lib/types";

const PERSPECTIVE_DATA: Record<Exclude<Perspective, "default">, ResumeData> = {
  recruiter: recruiterData as ResumeData,
  business: businessData as ResumeData,
  reader: readerData as ResumeData,
  professor: professorData as ResumeData,
};

interface PerspectiveContextValue {
  perspective: Perspective;
  data: ResumeData;
  switchPerspective: (p: Perspective) => void;
  perspectives: Array<{ key: Perspective; label: string }>;
}

const PerspectiveContext = createContext<PerspectiveContextValue>({
  perspective: "default",
  data: defaultData,
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

export function PerspectiveProvider({ children }: { children: React.ReactNode }) {
  const [perspective, setPerspective] = useState<Perspective>("default");
  const [data, setData] = useState<ResumeData>(defaultData);

  const switchPerspective = useCallback(
    (p: Perspective) => {
      setPerspective(p);
      if (p === "default") {
        setData(defaultData);
      } else {
        setData(PERSPECTIVE_DATA[p]);
      }
    },
    [],
  );

  return (
    <PerspectiveContext.Provider
      value={{
        perspective,
        data,
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
