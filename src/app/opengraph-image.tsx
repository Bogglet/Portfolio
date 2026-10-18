import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Bogglet Innovations: Custom Software Development & Technology Solutions";
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
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", background: "white", borderRadius: 24, padding: 10 }}>
            <img src={src} width={88} height={88} alt="" />
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            Bogglet Innovations
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>
            Turn Business Ideas Into
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, color: "#ffcf5c" }}>
            Powerful Digital Solutions.
          </div>
          <div style={{ fontSize: 26, marginTop: 28, opacity: 0.9, lineHeight: 1.4 }}>
            Custom Software · ERP Systems · Web & Mobile Apps · AI Solutions · White-Label
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, opacity: 0.8, borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 20 }}>
          <span>Technology built around your business.</span>
          <span>Serving the GCC, India & International</span>
        </div>
      </div>
    ),
    size
  );
}
