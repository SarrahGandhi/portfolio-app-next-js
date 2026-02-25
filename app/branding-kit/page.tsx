'use client';

import { useEffect } from 'react';
import Navbar from "@/components/navbar/navbar";
export default function BrandingKitPage() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'iframemousemove') {
        // clientX/Y from inside the iframe are relative to the iframe's
        // own viewport — we must add the iframe's offset in the parent page
        const iframe = document.querySelector('iframe');
        const rect = iframe?.getBoundingClientRect();
        document.dispatchEvent(
          new MouseEvent('mousemove', {
            bubbles: true,
            clientX: e.data.x + (rect?.left ?? 0),
            clientY: e.data.y + (rect?.top ?? 0),
          })
        );
      } else if (e.data?.type === 'iframemousedown') {
        const iframe = document.querySelector('iframe');
        const rect = iframe?.getBoundingClientRect();
        document.dispatchEvent(
          new MouseEvent('mousedown', {
            bubbles: true,
            clientX: e.data.x + (rect?.left ?? 0),
            clientY: e.data.y + (rect?.top ?? 0),
          })
        );
      } else if (e.data?.type === 'iframemouseup') {
        const iframe = document.querySelector('iframe');
        const rect = iframe?.getBoundingClientRect();
        document.dispatchEvent(
          new MouseEvent('mouseup', {
            bubbles: true,
            clientX: e.data.x + (rect?.left ?? 0),
            clientY: e.data.y + (rect?.top ?? 0),
          })
        );
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BB7NZKEBXG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BB7NZKEBXG');
</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SMOKEHOUSE RIOT — Brand Kit</title>
<link href="https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root {
    --flame: #E8471A;
    --ember: #C93B0F;
    --amber: #F5A623;
    --bark: #3B1F0A;
    --smoke: #2A1A0E;
    --ash: #7C5C47;
    --cream: #FAF0E6;
    --tan: #E8D5B7;
    --char: #1A0F08;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--smoke);
    color: var(--cream);
    font-family: 'Libre Baskerville', serif;
    overflow-x: hidden;
    cursor: none;
  }

  .cover {
    min-height: 100vh;
    background: var(--char);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .cover::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 80%, rgba(232,71,26,0.25) 0%, transparent 65%),
                radial-gradient(ellipse at 20% 20%, rgba(245,166,35,0.08) 0%, transparent 50%);
  }

  .cover-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.35em;
    color: var(--ash);
    text-transform: uppercase;
    margin-bottom: 3rem;
    position: relative;
  }

  .cover-brand {
    font-family: 'Passion One', sans-serif;
    font-size: clamp(5rem, 14vw, 11rem);
    font-weight: 900;
    line-height: 0.85;
    text-align: center;
    position: relative;
    letter-spacing: -0.02em;
  }

  .cover-brand .line1 { color: var(--cream); }
  .cover-brand .line2 {
    color: var(--flame);
    -webkit-text-stroke: 2px var(--ember);
  }

  .cover-sub {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.5em;
    color: var(--ash);
    margin-top: 2.5rem;
    text-transform: uppercase;
    position: relative;
  }

  .cover-rule {
    width: 120px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--flame), transparent);
    margin: 2rem auto 0;
    position: relative;
  }

  .grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 999;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px;
  }

  .section {
    padding: 7rem 5%;
    max-width: 1300px;
    margin: 0 auto;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid rgba(124,92,71,0.3);
    padding-bottom: 1.5rem;
  }

  .section-num {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    color: var(--flame);
    letter-spacing: 0.2em;
  }

  .section-title {
    font-family: 'Passion One', sans-serif;
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: var(--cream);
    text-transform: uppercase;
  }

  .section-rule {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(124,92,71,0.5), transparent);
  }

  .logo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }

  .logo-card {
    background: var(--bark);
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 380px;
    position: relative;
    overflow: hidden;
  }

  .logo-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 100%, rgba(232,71,26,0.12) 0%, transparent 65%);
    pointer-events: none;
  }

  .logo-card.dark { background: var(--char); }
  .logo-card.light { background: var(--cream); }
  .logo-card.amber-bg { background: var(--amber); }

  .logo-card-label {
    position: absolute;
    bottom: 1.2rem;
    left: 1.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.3em;
    color: var(--ash);
    text-transform: uppercase;
  }

  .logo-card.light .logo-card-label { color: var(--ash); }
  .logo-card.amber-bg .logo-card-label { color: var(--bark); }

  .logo-img { width: 100%; max-width: 320px; height: auto; object-fit: contain; }

  .type-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .type-block { padding: 2.5rem; border: 1px solid rgba(124,92,71,0.3); }

  .type-name {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.3em;
    color: var(--flame);
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  .type-display {
    font-family: 'Passion One', sans-serif;
    font-size: 4.5rem;
    line-height: 0.9;
    color: var(--cream);
    margin-bottom: 1rem;
  }

  .type-alpha {
    font-family: 'Passion One', sans-serif;
    font-size: 1rem;
    color: var(--ash);
    letter-spacing: 0.15em;
    margin-bottom: 1.5rem;
  }

  .type-specimen {
    font-family: 'Libre Baskerville', serif;
    font-size: 2rem;
    line-height: 1.2;
    color: var(--cream);
    margin-bottom: 1rem;
  }

  .type-specimen-italic {
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-size: 1.5rem;
    color: var(--amber);
    margin-bottom: 1rem;
  }

  .type-body-sample {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.85rem;
    color: var(--tan);
    line-height: 1.8;
  }

  .mono-display {
    font-family: 'Space Mono', monospace;
    font-size: 1.1rem;
    color: var(--amber);
    letter-spacing: 0.05em;
    line-height: 1.8;
  }

  .palette-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2px;
  }

  .swatch {
    aspect-ratio: 0.75;
    position: relative;
    overflow: hidden;
    cursor: default;
  }

  .swatch-inner {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem 0.8rem;
  }

  .swatch-name {
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
  }

  .swatch-hex {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    font-weight: 700;
  }

  .swatch-role {
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-size: 0.6rem;
    margin-top: 0.2rem;
    opacity: 0.7;
  }

  .icon-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2px;
  }

  .icon-card {
    background: var(--bark);
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem;
    transition: background 0.2s;
  }

  .icon-card:hover { background: var(--ember); }
  .icon-card svg { width: 52px; height: 52px; }

  .icon-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    color: var(--ash);
    text-transform: uppercase;
    text-align: center;
  }

  .icon-card:hover .icon-label { color: var(--cream); }

  .tagline-band {
    background: var(--flame);
    padding: 2rem 5%;
    overflow: hidden;
    white-space: nowrap;
  }

  .tagline-scroll {
    display: inline-block;
    animation: scroll-left 20s linear infinite;
  }

  .tagline-scroll span {
    font-family: 'Passion One', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    color: var(--char);
    margin-right: 3rem;
  }

  @keyframes scroll-left {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .footer {
    background: var(--char);
    padding: 3rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(124,92,71,0.2);
  }

  .footer-brand {
    font-family: 'Passion One', sans-serif;
    font-size: 1.8rem;
    color: var(--flame);
    letter-spacing: 0.05em;
  }

  .footer-note {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: var(--ash);
  }

  @media (max-width: 768px) {
    .logo-grid, .type-showcase, .palette-grid, .icon-grid {
      grid-template-columns: 1fr 1fr;
    }
    .palette-grid { grid-template-columns: repeat(3, 1fr); }
    .cover-brand { font-size: 4rem; }
  }
</style>
</head>
<body>

<div class="grain"></div>

<div class="cover">
  <div class="cover-label">Brand Identity System — 2025</div>
  <div class="cover-brand">
    <div class="line1">SMOKEHOUSE</div>
    <div class="line2">RIOT</div>
  </div>
  <div class="cover-sub">Est. in a cloud of smoke &amp; fire</div>
  <div class="cover-rule"></div>
</div>

<div class="tagline-band">
  <div class="tagline-scroll">
    <span>CHAR IT. EAT IT. REPEAT IT.</span>
    <span>★</span>
    <span>BORN FROM THE GRILL</span>
    <span>★</span>
    <span>SMOKEHOUSE RIOT</span>
    <span>★</span>
    <span>CHAR IT. EAT IT. REPEAT IT.</span>
    <span>★</span>
    <span>BORN FROM THE GRILL</span>
    <span>★</span>
    <span>SMOKEHOUSE RIOT</span>
    <span>★</span>
  </div>
</div>

<div style="background: var(--smoke); padding: 4rem 5% 0;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header">
      <span class="section-num">01 /</span>
      <span class="section-title">Primary Logo</span>
      <div class="section-rule"></div>
    </div>
  </div>
</div>
<div style="max-width:1300px; margin: 0 auto; padding: 0 5% 4rem;">
  <div class="logo-grid">
    <div class="logo-card dark">
      <img class="logo-img" data-logo src="" alt="Smokehouse Riot Logo" />
      <div class="logo-card-label">Primary — Dark Background</div>
    </div>
    <div class="logo-card light">
      <img class="logo-img" data-logo src="" alt="Smokehouse Riot Logo" />
      <div class="logo-card-label" style="color:#7C5C47;">Primary — Light Background</div>
    </div>
  </div>
</div>

<div style="background: var(--smoke); padding: 0 5% 0;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header">
      <span class="section-num">02 /</span>
      <span class="section-title">Alternate Logo</span>
      <div class="section-rule"></div>
    </div>
  </div>
</div>
<div style="max-width:1300px; margin: 0 auto; padding: 0 5% 5rem;">
  <div class="logo-grid">
    <div class="logo-card dark">
      <img class="logo-img" data-alt-logo src="" alt="Smokehouse Riot Alt Logo" />
      <div class="logo-card-label">Horizontal Wordmark</div>
    </div>
    <div class="logo-card amber-bg">
      <img class="logo-img" data-alt-logo src="" alt="Smokehouse Riot Alt Logo" />
      <div class="logo-card-label" style="color:#3B1F0A;">Badge / Stamp Version</div>
    </div>
  </div>
</div>

<div style="background: var(--bark); padding: 5rem 5%;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header" style="border-color: rgba(245,166,35,0.2);">
      <span class="section-num">03 /</span>
      <span class="section-title">Typography</span>
      <div class="section-rule"></div>
    </div>
    <div class="type-showcase">
      <div class="type-block">
        <div class="type-name">Display — Passion One</div>
        <div class="type-display">BURGER<br>NIGHTS</div>
        <div class="type-alpha">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>0 1 2 3 4 5 6 7 8 9</div>
        <div style="font-family:'Passion One',sans-serif; font-size:1rem; color:var(--tan); line-height:1.6;">
          Use for: Headlines, Logo, Signage, Packaging, Menu headers, Campaign posters.
        </div>
      </div>
      <div class="type-block">
        <div class="type-name">Body — Libre Baskerville</div>
        <div class="type-specimen">Flame-Kissed<br>Perfection.</div>
        <div class="type-specimen-italic">The art of the perfect patty.</div>
        <div class="type-body-sample">
          Every burger at Smokehouse Riot is pressed, seasoned, and kissed by an open flame until a crust forms that no fork-and-knife crowd deserves. Pair with our house hot sauce. Repeat.
        </div>
      </div>
      <div class="type-block" style="grid-column: 1 / -1; background: var(--char);">
        <div class="type-name">Accent — Space Mono</div>
        <div class="mono-display">
          EST. 2025  ★  SMOKEHOUSE RIOT  ★  CHAR IT. EAT IT. REPEAT.<br>
          TABLE NO. 7  /  ORDER: DOUBLE RIOT  /  SIDE: SMOKED FRIES<br>
          #SR-0042  —  OPEN DAILY  11AM – 11PM  —  DINE IN &amp; TAKEOUT
        </div>
        <div style="margin-top:1rem; font-family:'Libre Baskerville',serif; font-size:0.8rem; color:var(--ash);">
          Use for: Labels, receipts, stamps, captions, legal copy, ticket numbers, and UI micro-text.
        </div>
      </div>
    </div>
  </div>
</div>

<div style="background: var(--smoke); padding: 5rem 5%;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header">
      <span class="section-num">04 /</span>
      <span class="section-title">Color Palette</span>
      <div class="section-rule"></div>
    </div>
    <div class="palette-grid">
      <div class="swatch" style="background:#E8471A;">
        <div class="swatch-inner">
          <div class="swatch-name" style="color:#FAF0E6;">Flame</div>
          <div class="swatch-hex" style="color:#FAF0E6;">#E8471A</div>
          <div class="swatch-role" style="color:#FAF0E6;">Primary Brand</div>
        </div>
      </div>
      <div class="swatch" style="background:#C93B0F;">
        <div class="swatch-inner">
          <div class="swatch-name" style="color:#FAF0E6;">Ember</div>
          <div class="swatch-hex" style="color:#FAF0E6;">#C93B0F</div>
          <div class="swatch-role" style="color:#FAF0E6;">Hover / Active</div>
        </div>
      </div>
      <div class="swatch" style="background:#F5A623;">
        <div class="swatch-inner">
          <div class="swatch-name" style="color:#3B1F0A;">Amber</div>
          <div class="swatch-hex" style="color:#3B1F0A;">#F5A623</div>
          <div class="swatch-role" style="color:#3B1F0A;">Accent / Highlight</div>
        </div>
      </div>
      <div class="swatch" style="background:#3B1F0A;">
        <div class="swatch-inner">
          <div class="swatch-name" style="color:#FAF0E6;">Bark</div>
          <div class="swatch-hex" style="color:#FAF0E6;">#3B1F0A</div>
          <div class="swatch-role" style="color:#FAF0E6;">Secondary BG</div>
        </div>
      </div>
      <div class="swatch" style="background:#1A0F08;">
        <div class="swatch-inner">
          <div class="swatch-name" style="color:#7C5C47;">Char</div>
          <div class="swatch-hex" style="color:#7C5C47;">#1A0F08</div>
          <div class="swatch-role" style="color:#7C5C47;">Primary BG</div>
        </div>
      </div>
      <div class="swatch" style="background:#FAF0E6;">
        <div class="swatch-inner">
          <div class="swatch-name" style="color:#3B1F0A;">Cream</div>
          <div class="swatch-hex" style="color:#3B1F0A;">#FAF0E6</div>
          <div class="swatch-role" style="color:#3B1F0A;">Primary Text</div>
        </div>
      </div>
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1.5rem; margin-top:1.5rem;">
      <div style="padding:1.5rem; border:1px solid rgba(232,71,26,0.3); background:rgba(232,71,26,0.05);">
        <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; color:var(--flame); margin-bottom:0.8rem; text-transform:uppercase;">Primary Usage</div>
        <div style="font-family:'Libre Baskerville',serif; font-size:0.8rem; color:var(--tan); line-height:1.7;">Flame on Char for main CTAs, hero areas, and logo applications. Never use Flame text on Amber background.</div>
      </div>
      <div style="padding:1.5rem; border:1px solid rgba(245,166,35,0.3); background:rgba(245,166,35,0.05);">
        <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; color:var(--amber); margin-bottom:0.8rem; text-transform:uppercase;">Accent Usage</div>
        <div style="font-family:'Libre Baskerville',serif; font-size:0.8rem; color:var(--tan); line-height:1.7;">Amber for highlights, price tags, and callouts. Use sparingly — it draws the eye and anchors hierarchy.</div>
      </div>
      <div style="padding:1.5rem; border:1px solid rgba(124,92,71,0.3); background:rgba(124,92,71,0.05);">
        <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; color:var(--ash); margin-bottom:0.8rem; text-transform:uppercase;">Light Usage</div>
        <div style="font-family:'Libre Baskerville',serif; font-size:0.8rem; color:var(--tan); line-height:1.7;">Cream for body text on dark. Light background uses: Cream canvas with Char text and Ember accents.</div>
      </div>
    </div>
  </div>
</div>

<div style="background: var(--smoke); padding: 0 5% 6rem;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header" style="padding-top:2rem;">
      <span class="section-num">05 /</span>
      <span class="section-title">Iconography</span>
      <div class="section-rule"></div>
    </div>
    <div class="icon-grid">
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="26" cy="16" rx="18" ry="7" fill="#F5A623"/>
          <ellipse cx="26" cy="12" rx="16" ry="5.5" fill="#C93B0F"/>
          <ellipse cx="21" cy="10" rx="2" ry="1.2" fill="#F5A623" transform="rotate(-15,21,10)"/>
          <ellipse cx="27" cy="9" rx="2" ry="1.2" fill="#F5A623" transform="rotate(10,27,9)"/>
          <ellipse cx="33" cy="11" rx="2" ry="1.2" fill="#F5A623" transform="rotate(-10,33,11)"/>
          <rect x="8" y="24" width="36" height="5" rx="2.5" fill="#7C3A10"/>
          <path d="M6 29 Q11 24, 16 29 Q21 24, 26 29 Q31 24, 36 29 Q41 24, 46 29 L46 33 L6 33Z" fill="#5A8A3A"/>
          <rect x="8" y="33" width="36" height="6" rx="3" fill="#E8841A"/>
        </svg>
        <div class="icon-label">Classic Burger</div>
      </div>
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 44 C14 44, 8 36, 10 26 C12 18, 20 14, 18 8 C22 14, 20 20, 26 22 C24 16, 28 12, 26 6 C32 12, 34 20, 30 26 C34 22, 36 18, 34 14 C40 20, 42 30, 38 36 C36 40, 32 44, 26 44Z" fill="#E8471A"/>
          <path d="M26 44 C18 44, 14 38, 16 30 C18 24, 24 22, 22 16 C26 22, 24 28, 28 30 C26 26, 30 22, 28 18 C32 24, 32 32, 30 36 C28 40, 28 44, 26 44Z" fill="#F5A623"/>
        </svg>
        <div class="icon-label">Open Flame</div>
      </div>
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="6" width="3" height="28" rx="1.5" fill="#FAF0E6"/>
          <rect x="14" y="6" width="3" height="14" rx="1.5" fill="#FAF0E6"/>
          <rect x="22" y="6" width="3" height="14" rx="1.5" fill="#FAF0E6"/>
          <rect x="14" y="20" width="11" height="3" rx="1" fill="#FAF0E6"/>
          <rect x="18.5" y="34" width="2" height="12" rx="1" fill="#FAF0E6"/>
          <rect x="31" y="6" width="3" height="40" rx="1.5" fill="#FAF0E6"/>
          <path d="M34 6 L38 16 L34 20Z" fill="#E8471A"/>
        </svg>
        <div class="icon-label">Cutlery</div>
      </div>
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="26,6 30,19 44,19 33,27 37,41 26,33 15,41 19,27 8,19 22,19" fill="#F5A623"/>
          <polygon points="26,12 29,21 38,21 31,26 34,36 26,30 18,36 21,26 14,21 23,21" fill="#E8471A"/>
        </svg>
        <div class="icon-label">Top Rated</div>
      </div>
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 42 C18 36, 22 34, 20 28 C18 22, 22 18, 20 12" stroke="#FAF0E6" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <path d="M26 42 C26 34, 30 32, 28 24 C26 18, 30 14, 28 8" stroke="#E8471A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <path d="M34 42 C34 36, 38 34, 36 28 C34 22, 38 18, 36 12" stroke="#FAF0E6" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        </svg>
        <div class="icon-label">Smoke</div>
      </div>
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 6 C18 6, 12 12, 12 20 C12 30, 26 46, 26 46 C26 46, 40 30, 40 20 C40 12, 34 6, 26 6Z" fill="#E8471A"/>
          <circle cx="26" cy="20" r="7" fill="#1A0F08"/>
          <circle cx="26" cy="20" r="4" fill="#F5A623"/>
        </svg>
        <div class="icon-label">Find Us</div>
      </div>
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="19" stroke="#FAF0E6" stroke-width="2.5" fill="none"/>
          <line x1="26" y1="26" x2="26" y2="14" stroke="#E8471A" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="26" y1="26" x2="34" y2="30" stroke="#FAF0E6" stroke-width="2" stroke-linecap="round"/>
          <circle cx="26" cy="26" r="2.5" fill="#F5A623"/>
        </svg>
        <div class="icon-label">Hours</div>
      </div>
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 42 C20 42, 14 36, 14 28 C14 20, 20 14, 26 12 C28 10, 30 8, 32 6 C32 10, 30 12, 32 14 C34 16, 38 18, 38 28 C38 36, 32 42, 26 42Z" fill="#E8471A"/>
          <path d="M26 42 C22 42, 18 38, 18 30 C18 23, 22 17, 26 14 C28 17, 30 22, 30 28 C30 35, 28 42, 26 42Z" fill="#C93B0F"/>
          <ellipse cx="22" cy="26" rx="3" ry="4" fill="rgba(255,255,255,0.15)" transform="rotate(-20,22,26)"/>
        </svg>
        <div class="icon-label">Hot Sauce</div>
      </div>
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="20" width="28" height="26" rx="3" fill="#7C3A10"/>
          <rect x="12" y="20" width="28" height="8" rx="2" fill="#5A2A08"/>
          <path d="M19 20 L19 14 C19 10, 22 8, 26 8 C30 8, 33 10, 33 14 L33 20" stroke="#FAF0E6" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <rect x="18" y="30" width="16" height="2" rx="1" fill="#F5A623"/>
          <rect x="18" y="35" width="12" height="2" rx="1" fill="#F5A623"/>
        </svg>
        <div class="icon-label">Takeout</div>
      </div>
      <div class="icon-card">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 16 L16 44 L36 44 L38 16Z" fill="#F5A623"/>
          <rect x="14" y="14" width="24" height="5" rx="2" fill="#E8841A"/>
          <ellipse cx="20" cy="14" rx="5" ry="4" fill="#FAF0E6"/>
          <ellipse cx="26" cy="12" rx="6" ry="5" fill="#FAF0E6"/>
          <ellipse cx="32" cy="14" rx="5" ry="4" fill="#FAF0E6"/>
          <path d="M38 22 C44 22, 44 34, 38 34" stroke="#E8841A" stroke-width="3" fill="none" stroke-linecap="round"/>
          <circle cx="22" cy="32" r="2" fill="rgba(255,255,255,0.3)"/>
          <circle cx="28" cy="38" r="1.5" fill="rgba(255,255,255,0.3)"/>
        </svg>
        <div class="icon-label">Drinks</div>
      </div>
    </div>
    <div style="margin-top:2rem; padding:1.5rem; border:1px solid rgba(124,92,71,0.3); background:rgba(59,31,10,0.3);">
      <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.25em; color:var(--flame); margin-bottom:0.8rem; text-transform:uppercase;">Icon Usage Guidelines</div>
      <div style="font-family:'Libre Baskerville',serif; font-size:0.82rem; color:var(--tan); line-height:1.8;">
        Icons are drawn on a 52×52px grid with 2.5px stroke weight. Scale in multiples of 52px for crisp rendering. Use Flame (#E8471A) as primary icon color on dark backgrounds; switch to Cream (#FAF0E6) for monochrome applications. Minimum display size: 24px. Always maintain at least 8px of clear space around each icon.
      </div>
    </div>
  </div>
</div>

<div style="background: var(--bark); padding: 5rem 5%;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header" style="border-color: rgba(245,166,35,0.2);">
      <span class="section-num">06 /</span>
      <span class="section-title">Menu Design</span>
      <div class="section-rule"></div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <img src="/menu-1.jpg" alt="Menu Design 1" style="width: 100%; max-height: 55vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);" />
      <img src="/menu-2.jpg" alt="Menu Design 2" style="width: 100%; max-height: 55vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);" />
    </div>
  </div>
</div>


<div class="footer">
  <div class="footer-brand">SMOKEHOUSE RIOT™</div>
  <div class="footer-note">Brand Identity System — Confidential — 2025</div>
</div>

<script>
  document.addEventListener('mousemove', function(e) {
    window.parent.postMessage({ type: 'iframemousemove', x: e.clientX, y: e.clientY }, '*');
  });
  document.addEventListener('mousedown', function(e) {
    window.parent.postMessage({ type: 'iframemousedown', x: e.clientX, y: e.clientY }, '*');
  });
  document.addEventListener('mouseup', function(e) {
    window.parent.postMessage({ type: 'iframemouseup', x: e.clientX, y: e.clientY }, '*');
  });
  (function() {
    var imgs = document.querySelectorAll('[data-logo]');
    for (var i = 0; i < imgs.length; i++) { imgs[i].src = '/smokehouseriotlogo.png'; }
    var alts = document.querySelectorAll('[data-alt-logo]');
    for (var j = 0; j < alts.length; j++) { alts[j].src = '/Altlogo.png'; }
  })();
</script>

</body>
</html>`;


  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1, minHeight: 0, marginTop: "24px" }}>
        <iframe
          srcDoc={html}
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          title="Smokehouse Riot Brand Kit"
        />
      </div>
    </div>
  );
}
