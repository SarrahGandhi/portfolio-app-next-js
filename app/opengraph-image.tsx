import { ImageResponse } from "next/og";

export const alt = "Sarrah Gandhi — Graphic and Web Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ORANGE = "#FF9500";
const CHARCOAL = "#1F1F1F";

async function loadGoogleFont(
  family: string,
): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(
      / /g,
      "+",
    )}&display=swap`;
    const css = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36",
      },
    }).then((r) => r.text());
    const match = css.match(/src:\s*url\((.+?)\)\s*format\('(?:opentype|truetype|woff|woff2)'\)/);
    if (!match) return null;
    return await fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const bebas = await loadGoogleFont("Bebas Neue");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 88px",
          backgroundColor: CHARCOAL,
          backgroundImage:
            "radial-gradient(circle at 100% 100%, rgba(255,149,0,0.22) 0%, rgba(255,149,0,0) 60%)",
          color: "#FFFFFF",
          fontFamily: "Bebas Neue, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              stroke={ORANGE}
              strokeWidth="5.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M28 23.5 C28 19.5 24.5 17.5 20 17.5 C14.5 17.5 11.5 20 11.5 23.5 C11.5 27 15 28.5 20 30 C25 31.5 28.5 33 28.5 36.5 C28.5 40 25 42 20 42 C14.5 42 11 40 11 36" />
              <circle cx="42" cy="32.75" r="9.25" />
              <path d="M51.25 32.75 L51.25 47 C51.25 52 47.5 54.5 42 54.5 C36.75 54.5 33.75 52 33.75 49" />
            </g>
            <circle cx="55.5" cy="42" r="2.5" fill={ORANGE} />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 168,
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
            }}
          >
            Sarrah Gandhi
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              letterSpacing: "0.24em",
              color: ORANGE,
              textTransform: "uppercase",
              marginTop: 22,
            }}
          >
            Graphic and Web Designer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            letterSpacing: "0.24em",
            color: "rgba(255,255,255,0.55)",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 32, height: 2, background: ORANGE }} />
          sarrahgandhi.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: bebas
        ? [
            {
              name: "Bebas Neue",
              data: bebas,
              style: "normal",
              weight: 400,
            },
          ]
        : undefined,
    },
  );
}
