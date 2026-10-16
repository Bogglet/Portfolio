import type { CSSProperties } from "react";

const tones = {
  red: ["#e2393a", "#b41314", "#7d0b0c"],
  butter: ["#ffe08f", "#ffcf5c", "#e0a526"],
  sky: ["#c9e1ff", "#9cc8ff", "#5f9ae6"],
  mint: ["#d0f5e2", "#a6e6c8", "#62bf95"],
  blush: ["#fff4f1", "#f8d9d2", "#e3aea2"],
} as const;

export type ClayTone = keyof typeof tones;
type Shape = "sphere" | "pill" | "squircle" | "donut";

type Props = {
  tone: ClayTone;
  shape: Shape;
  className?: string;
  style?: CSSProperties;
};

// Decorative matte "clay" objects, drawn with gradients and inner shadows.
export function Clay({ tone, shape, className = "", style }: Props) {
  const [hi, mid, lo] = tones[tone];
  const background = `radial-gradient(120% 120% at 28% 22%, ${hi} 0%, ${mid} 45%, ${lo} 100%)`;
  const radius = shape === "squircle" ? "32%" : "9999px";
  const donut =
    shape === "donut"
      ? {
          WebkitMask: "radial-gradient(circle, transparent 30%, #000 31%)",
          mask: "radial-gradient(circle, transparent 30%, #000 31%)",
        }
      : {};

  return (
    <span
      aria-hidden
      className={`clay pointer-events-none absolute block ${shape === "pill" ? "aspect-[2.4/1]" : "aspect-square"} ${className}`}
      style={{ background, borderRadius: radius, ...donut, ...style }}
    />
  );
}
