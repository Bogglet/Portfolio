import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Bogglet Innovations: You manage the client. We handle the build.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/b-mark.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#b41314",
          color: "white",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", background: "white", borderRadius: 28, padding: 10 }}>
            <img src={src} width={96} height={96} alt="" />
          </div>
          <div style={{ fontSize: 44, fontWeight: 700 }}>Bogglet Innovations</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>You sell the website.</div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>We build it.</div>
          <div style={{ fontSize: 30, marginTop: 28, opacity: 0.85 }}>
            White-label web and app development for agencies across the GCC and India
          </div>
        </div>
      </div>
    ),
    size,
  );
}
