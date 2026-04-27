import { ImageResponse } from "next/og";

export const alt = "Sarrah Gandhi — Frontend Developer & Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ORANGE = "#FF9500";
const CHARCOAL = "#1F1F1F";
const FOG = "#BFBFBF";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          backgroundColor: CHARCOAL,
          backgroundImage:
            "radial-gradient(circle at 92% 108%, rgba(255,149,0,0.22) 0%, rgba(255,149,0,0) 55%)",
          color: "#EFEFEF",
          fontFamily: '"DM Sans", "Inter", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <svg
              width="84"
              height="84"
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

          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "#9A9A9A",
              fontWeight: 600,
            }}
          >
            Portfolio · 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: ORANGE,
              fontWeight: 700,
              marginBottom: 28,
            }}
          >
            Frontend Developer · Designer
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 176,
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              color: "#FFFFFF",
            }}
          >
            <span style={{ display: "flex" }}>SARRAH</span>
            <span style={{ display: "flex" }}>GANDHI.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: FOG,
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            Brand identities, full-stack apps, and interfaces sharp enough that
            users notice without knowing why.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              color: ORANGE,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            <div style={{ width: 32, height: 2, background: ORANGE }} />
            sarrahgandhi.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
