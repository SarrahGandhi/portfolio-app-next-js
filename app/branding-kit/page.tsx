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
<title>SMOKEHOUSE RIOT — Brand Identity Case Study</title>
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

  html { scroll-behavior: smooth; }

  body {
    background: var(--smoke);
    color: var(--cream);
    font-family: 'Libre Baskerville', serif;
    overflow-x: hidden;
    cursor: none;
  }

  /* ── COVER ── */
  .cover {
    min-height: 100vh;
    background: var(--char);
    display: grid;
    grid-template-rows: 1fr auto;
    position: relative;
    overflow: hidden;
  }

  .cover::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 80%, rgba(232,71,26,0.25) 0%, transparent 65%),
                radial-gradient(ellipse at 20% 20%, rgba(245,166,35,0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  .cover-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 5% 3rem;
    position: relative;
    z-index: 1;
  }

  .cover-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.35em;
    color: var(--ash);
    text-transform: uppercase;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .cover-label::before,
  .cover-label::after {
    content: '';
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--flame));
  }

  .cover-label::after {
    background: linear-gradient(90deg, var(--flame), transparent);
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

  .cover-meta {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 2rem 5%;
    border-top: 1px solid rgba(232,71,26,0.18);
    background: rgba(0,0,0,0.35);
    position: relative;
    z-index: 1;
    gap: 1rem;
  }

  .cover-meta-item {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    color: var(--tan);
    text-transform: uppercase;
  }

  .cover-meta-item strong {
    display: block;
    color: var(--flame);
    font-size: 0.6rem;
    margin-bottom: 0.4rem;
    letter-spacing: 0.3em;
    font-weight: 700;
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

  /* ── SECTION FRAME ── */
  .section {
    padding: 7rem 5%;
    max-width: 1300px;
    margin: 0 auto;
  }

  .section-header {
    display: grid;
    grid-template-columns: auto auto 1fr;
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

  .sub-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.4em;
    color: var(--flame);
    text-transform: uppercase;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .sub-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(232,71,26,0.2);
  }

  /* ── PROJECT BRIEF ── */
  .case-hero {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 5rem;
    align-items: start;
    margin-bottom: 5rem;
  }

  .case-overline {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.5em;
    color: var(--flame);
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .case-title {
    font-family: 'Passion One', sans-serif;
    font-weight: 400;
    font-size: clamp(2.4rem, 4.2vw, 3.6rem);
    line-height: 0.95;
    color: var(--cream);
    margin-bottom: 2.2rem;
    letter-spacing: 0.01em;
    text-transform: uppercase;
  }

  .case-title em {
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-weight: 400;
    color: var(--flame);
    text-transform: none;
    letter-spacing: 0;
  }

  .case-desc {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.95rem;
    color: var(--tan);
    line-height: 1.85;
    margin-bottom: 2.4rem;
  }

  .case-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .case-tag {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.18em;
    color: var(--amber);
    text-transform: uppercase;
    padding: 0.5rem 0.9rem;
    border: 1px solid rgba(245,166,35,0.4);
    background: rgba(245,166,35,0.05);
  }

  .stat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .stat-card {
    padding: 1.8rem 1.6rem;
    border: 1px solid rgba(232,71,26,0.18);
    background: rgba(232,71,26,0.04);
    position: relative;
    overflow: hidden;
  }

  .stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: var(--flame);
  }

  .stat-num {
    font-family: 'Passion One', sans-serif;
    font-size: 3rem;
    color: var(--flame);
    line-height: 1;
    margin-bottom: 0.6rem;
    font-weight: 900;
  }

  .stat-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.18em;
    color: var(--tan);
    text-transform: uppercase;
    line-height: 1.6;
  }

  /* ── PROCESS ── */
  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: rgba(124,92,71,0.25);
  }

  .process-step {
    background: var(--smoke);
    padding: 2.6rem 2rem;
    position: relative;
    overflow: hidden;
    transition: background 0.3s ease;
  }

  .process-step:hover { background: var(--bark); }

  .process-step-num {
    font-family: 'Passion One', sans-serif;
    font-size: 5rem;
    color: rgba(232,71,26,0.12);
    line-height: 1;
    position: absolute;
    top: 0.6rem;
    right: 1.2rem;
    font-weight: 900;
  }

  .process-step-icon {
    width: 38px;
    height: 38px;
    margin-bottom: 1.5rem;
    color: var(--flame);
  }

  .process-step-title {
    font-family: 'Passion One', sans-serif;
    font-size: 1.5rem;
    color: var(--cream);
    margin-bottom: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .process-step-text {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.78rem;
    color: var(--ash);
    line-height: 1.75;
  }

  /* ── DISCOVERY ── */
  .discovery {
    display: grid;
    grid-template-columns: 1fr 1.7fr;
    gap: 4rem;
    margin-bottom: 5rem;
    padding-bottom: 5rem;
    border-bottom: 1px dashed rgba(124,92,71,0.25);
  }

  .discovery-title {
    font-family: 'Passion One', sans-serif;
    font-size: 2.1rem;
    color: var(--cream);
    line-height: 1.05;
    text-transform: uppercase;
  }

  .discovery-title em {
    font-family: 'Libre Baskerville', serif;
    color: var(--amber);
    font-style: italic;
    font-weight: 400;
    text-transform: none;
  }

  .insight-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .insight-item {
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 1.2rem;
    align-items: start;
    padding-bottom: 1.4rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .insight-item:last-child { border-bottom: none; }

  .insight-icon { color: var(--flame); margin-top: 2px; }

  .insight-text {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.86rem;
    color: var(--tan);
    line-height: 1.8;
  }

  .insight-text strong {
    display: block;
    color: var(--cream);
    font-family: 'Passion One', sans-serif;
    font-weight: 400;
    font-size: 1.05rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  /* ── PERSONAS ── */
  .personas {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .persona {
    border: 1px solid rgba(124,92,71,0.3);
    background: var(--bark);
    padding: 2.4rem 2.2rem;
    position: relative;
    overflow: hidden;
  }

  .persona::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--flame), var(--amber));
  }

  .persona::after {
    content: '';
    position: absolute;
    right: -40px;
    bottom: -40px;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(232,71,26,0.10), transparent 70%);
  }

  .persona-tag {
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.35em;
    color: var(--flame);
    text-transform: uppercase;
    margin-bottom: 1.4rem;
  }

  .persona-name {
    font-family: 'Passion One', sans-serif;
    font-size: 2rem;
    color: var(--cream);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .persona-role {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    color: var(--amber);
    margin-top: 0.3rem;
    margin-bottom: 1.4rem;
    letter-spacing: 0.08em;
  }

  .persona-quote {
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-size: 0.95rem;
    color: var(--tan);
    line-height: 1.6;
    padding-left: 1rem;
    border-left: 2px solid var(--flame);
    margin-bottom: 1.4rem;
  }

  .persona-needs {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .persona-needs li {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.78rem;
    color: var(--ash);
    padding-left: 1rem;
    position: relative;
    line-height: 1.6;
  }

  .persona-needs li::before {
    content: '★';
    position: absolute;
    left: 0;
    color: var(--flame);
    font-size: 0.7rem;
    top: 1px;
  }

  /* ── BRAND VOICE ── */
  .voice-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .voice-card {
    padding: 2.4rem 2.2rem;
    border: 1px solid rgba(124,92,71,0.3);
    position: relative;
  }

  .voice-card.do {
    background: rgba(232,71,26,0.06);
    border-color: rgba(232,71,26,0.4);
  }

  .voice-card.dont {
    background: rgba(26,15,8,0.5);
    border-color: rgba(124,92,71,0.4);
  }

  .voice-tag {
    font-family: 'Passion One', sans-serif;
    font-size: 1.4rem;
    color: var(--flame);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .voice-card.dont .voice-tag {
    color: var(--ash);
  }

  .voice-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .voice-list li {
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-size: 0.95rem;
    color: var(--tan);
    line-height: 1.5;
    padding-left: 1.2rem;
    position: relative;
  }

  .voice-list li::before {
    content: '"';
    position: absolute;
    left: 0;
    color: var(--flame);
    font-family: 'Passion One', sans-serif;
    font-size: 1.6rem;
    line-height: 1;
    top: -2px;
  }

  .voice-card.dont .voice-list li {
    color: var(--ash);
    text-decoration: line-through;
    text-decoration-color: rgba(124,92,71,0.5);
  }

  .voice-card.dont .voice-list li::before {
    color: var(--ash);
  }

  /* ── MOOD WORDS ── */
  .visual-dir {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2px;
    background: rgba(124,92,71,0.25);
  }

  .vd-main {
    background: var(--bark);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .vd-side {
    background: var(--char);
    padding: 2.6rem 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .vd-title {
    font-family: 'Passion One', sans-serif;
    font-size: 2rem;
    color: var(--cream);
    line-height: 1.05;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .vd-paragraph {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.86rem;
    color: var(--tan);
    line-height: 1.85;
  }

  .mood-words {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .mood-word {
    font-family: 'Passion One', sans-serif;
    font-size: 1.7rem;
    color: var(--cream);
    padding-bottom: 0.6rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .mood-word span {
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.25em;
    color: var(--flame);
    text-transform: uppercase;
    font-weight: 700;
  }

  /* ── LOGO SECTION ── */
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

  .logo-card-corner {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    width: 16px;
    height: 16px;
    border-top: 1px solid rgba(232,71,26,0.4);
    border-right: 1px solid rgba(232,71,26,0.4);
  }

  .logo-card.light .logo-card-label { color: var(--ash); }
  .logo-card.amber-bg .logo-card-label { color: var(--bark); }

  .logo-img { width: 100%; max-width: 320px; height: auto; object-fit: contain; }

  /* ── LOGO ANATOMY ── */
  .anatomy-wrap {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 2px;
    background: rgba(124,92,71,0.25);
  }

  .anatomy-stage {
    background: var(--char);
    padding: 3rem;
    position: relative;
    min-height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image:
      linear-gradient(rgba(232,71,26,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,71,26,0.06) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .anatomy-canvas { position: relative; max-width: 320px; width: 100%; }
  .anatomy-canvas img { width: 100%; height: auto; }

  .anatomy-marker {
    position: absolute;
    border: 1px dashed var(--flame);
    border-radius: 50%;
    pointer-events: none;
  }

  .anatomy-pin {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.18em;
    color: var(--amber);
    text-transform: uppercase;
    pointer-events: none;
  }

  .anatomy-pin .dot {
    width: 8px;
    height: 8px;
    background: var(--flame);
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(232,71,26,0.25);
  }

  .anatomy-pin .line {
    width: 50px;
    height: 1px;
    background: var(--flame);
    opacity: 0.6;
  }

  .anatomy-info {
    background: var(--bark);
    padding: 2.6rem 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .anatomy-row {
    display: grid;
    grid-template-columns: 32px 1fr;
    gap: 1rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .anatomy-row:last-child { border-bottom: none; }

  .anatomy-num {
    font-family: 'Passion One', sans-serif;
    font-size: 1.5rem;
    color: var(--flame);
    line-height: 1;
  }

  .anatomy-label {
    font-family: 'Passion One', sans-serif;
    font-size: 1rem;
    color: var(--cream);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.3rem;
  }

  .anatomy-text {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.78rem;
    color: var(--ash);
    line-height: 1.6;
  }

  /* ── DO / DONT ── */
  .donts-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: rgba(124,92,71,0.25);
  }

  .dont-cell {
    background: var(--bark);
    padding: 2rem;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    position: relative;
    overflow: hidden;
  }

  .dont-cell.ok::after {
    content: '✓';
    position: absolute;
    top: 0.7rem;
    right: 0.9rem;
    color: var(--flame);
    font-family: 'Passion One', sans-serif;
    font-size: 1.4rem;
  }

  .dont-cell.no::after {
    content: '✕';
    position: absolute;
    top: 0.7rem;
    right: 0.9rem;
    color: var(--ash);
    font-family: 'Passion One', sans-serif;
    font-size: 1.4rem;
  }

  .dont-cell .mini {
    width: 90px;
    height: 60px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .dont-cell .label {
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    color: var(--tan);
    text-transform: uppercase;
    text-align: center;
    line-height: 1.5;
  }

  .dont-cell.no .label { color: var(--ash); }

  .clear-space {
    margin-top: 2rem;
    padding: 2rem;
    border: 1px solid rgba(232,71,26,0.2);
    background: rgba(232,71,26,0.04);
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    align-items: center;
  }

  .clear-space-visual {
    background: var(--char);
    padding: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    aspect-ratio: 1.5;
  }

  .clear-space-visual::before,
  .clear-space-visual::after {
    content: '';
    position: absolute;
    inset: 12%;
    border: 1px dashed rgba(232,71,26,0.4);
  }

  .clear-space-visual::after {
    inset: 24%;
    border-style: solid;
    border-color: rgba(232,71,26,0.15);
  }

  .clear-space-visual img {
    width: 60%;
    z-index: 1;
    position: relative;
  }

  /* ── TYPOGRAPHY ── */
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

  .type-scale {
    margin-top: 3rem;
    padding: 2.5rem;
    border: 1px solid rgba(124,92,71,0.3);
    background: rgba(0,0,0,0.25);
  }

  .type-scale-row {
    display: grid;
    grid-template-columns: 90px 80px 1fr;
    gap: 1.5rem;
    align-items: baseline;
    padding: 1.1rem 0;
    border-bottom: 1px solid rgba(124,92,71,0.15);
  }

  .type-scale-row:last-child { border-bottom: none; }

  .type-scale-tag {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    color: var(--flame);
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .type-scale-size {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    color: var(--ash);
    letter-spacing: 0.05em;
  }

  .type-scale-sample {
    font-family: 'Passion One', sans-serif;
    color: var(--cream);
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.01em;
  }

  /* ── COLOR ── */
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
    transition: transform 0.3s ease;
  }

  .swatch:hover { transform: scaleY(1.04); transform-origin: bottom; }

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

  .proportion-bar {
    margin-top: 2.5rem;
    display: flex;
    height: 60px;
    border: 1px solid rgba(124,92,71,0.3);
  }

  .prop-segment {
    display: flex;
    align-items: flex-end;
    padding: 0.6rem 0.8rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 700;
  }

  /* ── ICON ── */
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

  /* ── PATTERNS ── */
  .pattern-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }

  .pattern-card {
    aspect-ratio: 1.1;
    background: var(--bark);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    padding: 1.4rem;
  }

  .pattern-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.25em;
    color: var(--cream);
    text-transform: uppercase;
    background: rgba(0,0,0,0.55);
    padding: 0.4rem 0.7rem;
    backdrop-filter: blur(6px);
    z-index: 2;
  }

  .pattern-flames {
    background: var(--char);
    background-image:
      radial-gradient(ellipse 12px 18px at 20% 80%, var(--flame), transparent 70%),
      radial-gradient(ellipse 10px 14px at 50% 70%, var(--ember), transparent 70%),
      radial-gradient(ellipse 14px 20px at 80% 85%, var(--amber), transparent 70%),
      radial-gradient(ellipse 8px 12px at 35% 50%, var(--flame), transparent 70%),
      radial-gradient(ellipse 11px 16px at 65% 60%, var(--amber), transparent 70%);
  }

  .pattern-stripes {
    background: repeating-linear-gradient(
      135deg,
      var(--flame),
      var(--flame) 18px,
      var(--char) 18px,
      var(--char) 36px
    );
  }

  .pattern-stamp {
    background: var(--amber);
    background-image:
      radial-gradient(circle, var(--bark) 1.5px, transparent 2px);
    background-size: 14px 14px;
  }

  .pattern-checks {
    background:
      linear-gradient(45deg, var(--bark) 25%, transparent 25%) 0 0,
      linear-gradient(-45deg, var(--bark) 25%, transparent 25%) 0 0,
      linear-gradient(45deg, transparent 75%, var(--bark) 75%) 0 0,
      linear-gradient(-45deg, transparent 75%, var(--bark) 75%) 0 0,
      var(--cream);
    background-size: 24px 24px;
  }

  .pattern-burn {
    background: var(--char);
    background-image:
      radial-gradient(ellipse 80% 60% at 50% 100%, var(--ember) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 50% 100%, var(--flame) 0%, transparent 50%),
      radial-gradient(ellipse 30% 22% at 50% 100%, var(--amber) 0%, transparent 50%);
  }

  .pattern-grid-mark {
    background: var(--bark);
    background-image:
      linear-gradient(rgba(232,71,26,0.18) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,71,26,0.18) 1px, transparent 1px);
    background-size: 22px 22px;
    position: relative;
  }

  .pattern-grid-mark::before {
    content: 'SR';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Passion One', sans-serif;
    font-size: 5rem;
    color: var(--flame);
    -webkit-text-stroke: 2px var(--ember);
    font-weight: 900;
  }

  /* ── BRAND APPLICATIONS ── */
  .apps-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2px;
    background: rgba(124,92,71,0.25);
  }

  .app-card {
    background: var(--bark);
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    min-height: 320px;
    position: relative;
    overflow: hidden;
  }

  .app-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.3em;
    color: var(--flame);
    text-transform: uppercase;
  }

  /* Business Card */
  .biz-card {
    width: 100%;
    aspect-ratio: 1.75;
    background: var(--char);
    border: 1px solid rgba(232,71,26,0.25);
    padding: 1.6rem 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .biz-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 90px;
    height: 90px;
    background: radial-gradient(circle at top right, rgba(232,71,26,0.5), transparent 70%);
  }

  .biz-card .biz-mark {
    font-family: 'Passion One', sans-serif;
    font-size: 1.6rem;
    line-height: 0.9;
    color: var(--cream);
    text-transform: uppercase;
    letter-spacing: 0.01em;
  }

  .biz-card .biz-mark span {
    color: var(--flame);
    -webkit-text-stroke: 1px var(--ember);
  }

  .biz-name {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.85rem;
    color: var(--cream);
    font-weight: 700;
  }

  .biz-title {
    font-family: 'Space Mono', monospace;
    font-size: 0.5rem;
    color: var(--amber);
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-top: 0.2rem;
  }

  .biz-contact {
    font-family: 'Space Mono', monospace;
    font-size: 0.5rem;
    color: var(--tan);
    line-height: 1.7;
    letter-spacing: 0.05em;
    text-align: right;
  }

  /* Takeout Box */
  .takeout {
    width: 100%;
    aspect-ratio: 1.4;
    background: var(--cream);
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(124,92,71,0.4);
  }

  .takeout::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: repeating-linear-gradient(
      90deg,
      var(--flame),
      var(--flame) 8px,
      var(--bark) 8px,
      var(--bark) 16px
    );
  }

  .takeout-stamp {
    font-family: 'Passion One', sans-serif;
    font-size: 2rem;
    color: var(--bark);
    text-transform: uppercase;
    line-height: 0.85;
    letter-spacing: 0.02em;
    margin-top: 0.6rem;
  }

  .takeout-stamp span { color: var(--flame); }

  .takeout-tagline {
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-size: 0.7rem;
    color: var(--ash);
    line-height: 1.4;
  }

  .takeout-meta {
    font-family: 'Space Mono', monospace;
    font-size: 0.5rem;
    color: var(--bark);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    border-top: 1px dashed var(--bark);
    padding-top: 0.6rem;
  }

  /* Sticker pack */
  .stickers {
    width: 100%;
    aspect-ratio: 1.2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.7rem;
    padding: 0.4rem;
    background: var(--char);
    align-items: center;
    justify-items: center;
  }

  .stk {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.6rem;
    font-family: 'Passion One', sans-serif;
    text-transform: uppercase;
    line-height: 0.95;
    letter-spacing: 0.02em;
    font-size: 0.7rem;
  }

  .stk.flame { background: var(--flame); color: var(--cream); }
  .stk.amber { background: var(--amber); color: var(--bark); }
  .stk.cream { background: var(--cream); color: var(--bark); }
  .stk.bark { background: var(--bark); color: var(--amber); border: 1px dashed var(--flame); }
  .stk.outline { background: transparent; color: var(--flame); border: 2px solid var(--flame); }
  .stk.tan { background: var(--tan); color: var(--bark); }

  /* T-shirt */
  .tee {
    width: 100%;
    aspect-ratio: 1;
    background: var(--char);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tee-shape {
    width: 75%;
    height: 80%;
    background: var(--smoke);
    position: relative;
    border-radius: 16px 16px 4px 4px;
    box-shadow: inset 0 -10px 30px rgba(0,0,0,0.4);
  }

  .tee-shape::before,
  .tee-shape::after {
    content: '';
    position: absolute;
    top: 0;
    width: 22%;
    height: 28%;
    background: var(--smoke);
    box-shadow: inset 0 -4px 12px rgba(0,0,0,0.3);
  }

  .tee-shape::before {
    left: -16%;
    border-radius: 30px 4px 0 4px;
    transform: rotate(-15deg);
    transform-origin: top right;
  }

  .tee-shape::after {
    right: -16%;
    border-radius: 4px 30px 4px 0;
    transform: rotate(15deg);
    transform-origin: top left;
  }

  .tee-collar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 32%;
    height: 12%;
    background: var(--char);
    border-radius: 0 0 50% 50%;
  }

  .tee-print {
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 3;
    font-family: 'Passion One', sans-serif;
    text-transform: uppercase;
    line-height: 0.9;
    letter-spacing: 0.02em;
  }

  .tee-print .top { color: var(--cream); font-size: 1.1rem; }
  .tee-print .mid { color: var(--flame); font-size: 2rem; -webkit-text-stroke: 1px var(--ember); }
  .tee-print .bot {
    color: var(--amber);
    font-family: 'Space Mono', monospace;
    font-size: 0.4rem;
    letter-spacing: 0.4em;
    margin-top: 0.4rem;
  }

  /* Neon sign */
  .neon {
    width: 100%;
    aspect-ratio: 1.4;
    background: linear-gradient(180deg, var(--char) 0%, #000 100%);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(232,71,26,0.18);
  }

  .neon::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,71,26,0.18), transparent 70%),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 4px);
  }

  .neon-text {
    font-family: 'Passion One', sans-serif;
    font-size: 2.4rem;
    color: var(--cream);
    text-transform: uppercase;
    text-align: center;
    line-height: 0.9;
    letter-spacing: 0.04em;
    z-index: 2;
    text-shadow:
      0 0 4px var(--flame),
      0 0 12px var(--flame),
      0 0 24px rgba(232,71,26,0.6),
      0 0 40px rgba(232,71,26,0.3);
  }

  .neon-text .accent {
    color: var(--amber);
    text-shadow:
      0 0 4px var(--amber),
      0 0 12px var(--amber),
      0 0 28px rgba(245,166,35,0.5);
  }

  /* Apron */
  .apron {
    width: 100%;
    aspect-ratio: 0.9;
    background: var(--char);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 12%;
  }

  .apron-body {
    width: 70%;
    height: 80%;
    background: var(--bark);
    position: relative;
    border-radius: 4px 4px 12px 12px;
    box-shadow: inset 0 -8px 24px rgba(0,0,0,0.4);
  }

  .apron-body::before {
    content: '';
    position: absolute;
    top: -8%;
    left: 30%;
    right: 30%;
    height: 14%;
    background: var(--bark);
    border-radius: 50% 50% 0 0;
  }

  .apron-tie {
    position: absolute;
    top: 25%;
    width: 30%;
    height: 6px;
    background: var(--bark);
  }

  .apron-tie.left { left: -25%; transform: skewY(-6deg); }
  .apron-tie.right { right: -25%; transform: skewY(6deg); }

  .apron-pocket {
    position: absolute;
    bottom: 18%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 22%;
    border: 1px solid rgba(232,71,26,0.3);
    background: rgba(0,0,0,0.2);
  }

  .apron-print {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 2;
    font-family: 'Passion One', sans-serif;
    text-transform: uppercase;
    color: var(--cream);
  }

  .apron-print .a-top { font-size: 1rem; line-height: 1; }
  .apron-print .a-mid { font-size: 1.7rem; color: var(--flame); -webkit-text-stroke: 1px var(--ember); line-height: 0.9; }

  /* Packaging label */
  .label-strip {
    width: 100%;
    aspect-ratio: 2;
    background: var(--cream);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid var(--bark);
  }

  .label-strip::before,
  .label-strip::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 6px;
    background: repeating-linear-gradient(90deg, var(--flame) 0 8px, var(--bark) 8px 16px);
  }

  .label-strip::before { top: 0; }
  .label-strip::after { bottom: 0; }

  .label-mono {
    font-family: 'Space Mono', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.3em;
    color: var(--bark);
    text-transform: uppercase;
  }

  .label-name {
    font-family: 'Passion One', sans-serif;
    font-size: 1.7rem;
    color: var(--bark);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1;
    margin: 0.3rem 0;
  }

  .label-name span { color: var(--flame); }

  .label-foot {
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-size: 0.65rem;
    color: var(--ash);
  }

  /* ── TAGLINE BAND ── */
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

  /* ── OUTCOMES ── */
  .outcomes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: rgba(124,92,71,0.25);
  }

  .outcome-cell {
    background: var(--bark);
    padding: 3rem 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: background 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .outcome-cell:hover { background: var(--char); }

  .outcome-cell::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--flame), var(--amber), transparent);
  }

  .outcome-num {
    font-family: 'Passion One', sans-serif;
    font-size: 3.6rem;
    color: var(--flame);
    line-height: 1;
    font-weight: 900;
  }

  .outcome-label {
    font-family: 'Passion One', sans-serif;
    font-size: 1rem;
    color: var(--cream);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .outcome-text {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.78rem;
    color: var(--ash);
    line-height: 1.7;
  }

  /* ── PULL QUOTE ── */
  .pullquote {
    padding: 6rem 5%;
    background: var(--char);
    text-align: center;
    border-top: 1px solid rgba(232,71,26,0.18);
    border-bottom: 1px solid rgba(232,71,26,0.18);
    position: relative;
    overflow: hidden;
  }

  .pullquote::before {
    content: '“';
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Passion One', sans-serif;
    font-size: 9rem;
    color: rgba(232,71,26,0.15);
    line-height: 1;
  }

  .pullquote-text {
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-size: clamp(1.4rem, 2.6vw, 2rem);
    color: var(--cream);
    line-height: 1.4;
    max-width: 900px;
    margin: 0 auto 2rem;
    position: relative;
    z-index: 1;
  }

  .pullquote-attr {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.35em;
    color: var(--flame);
    text-transform: uppercase;
  }

  /* ── FOOTER ── */
  .footer {
    background: var(--char);
    padding: 3rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(124,92,71,0.2);
    flex-wrap: wrap;
    gap: 1rem;
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

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .logo-grid, .type-showcase, .apps-grid, .visual-dir, .anatomy-wrap { grid-template-columns: 1fr; }
    .palette-grid { grid-template-columns: repeat(3, 1fr); }
    .icon-grid { grid-template-columns: repeat(3, 1fr); }
    .pattern-grid { grid-template-columns: repeat(2, 1fr); }
    .case-hero, .discovery, .personas, .voice-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .process-grid, .outcomes { grid-template-columns: repeat(2, 1fr); }
    .donts-grid { grid-template-columns: repeat(2, 1fr); }
    .clear-space { grid-template-columns: 1fr; }
    .cover-meta { grid-template-columns: 1fr 1fr; }
    .cover-brand { font-size: 4rem; }
    .type-scale-row { grid-template-columns: 80px 60px 1fr; }
  }
</style>
</head>
<body>

<div class="grain"></div>

<!-- ══════════════════════════════════════════
     COVER
═══════════════════════════════════════════ -->
<div class="cover">
  <div class="cover-inner">
    <div class="cover-label">Brand Identity Case Study — 2025</div>
    <div class="cover-brand">
      <div class="line1">SMOKEHOUSE</div>
      <div class="line2">RIOT</div>
    </div>
    <div class="cover-sub">Est. in a cloud of smoke &amp; fire</div>
    <div class="cover-rule"></div>
  </div>

  <div class="cover-meta">
    <div class="cover-meta-item">
      <strong>Client</strong>
      Smokehouse Riot Burger Co.
    </div>
    <div class="cover-meta-item">
      <strong>Deliverable</strong>
      Full Brand Identity System
    </div>
    <div class="cover-meta-item">
      <strong>Year</strong>
      2025
    </div>
    <div class="cover-meta-item">
      <strong>Discipline</strong>
      Brand · Packaging · Type
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     TAGLINE TICKER
═══════════════════════════════════════════ -->
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

<!-- ══════════════════════════════════════════
     01 — PROJECT BRIEF
═══════════════════════════════════════════ -->
<div style="background: var(--smoke);">
  <div style="max-width:1300px; margin: 0 auto; padding: 7rem 5% 6rem;">
    <div class="section-header">
      <span class="section-num">01 /</span>
      <span class="section-title">The Brief</span>
      <div class="section-rule"></div>
    </div>

    <div class="case-hero">
      <div>
        <div class="case-overline">A Burger Joint That Bites Back</div>
        <h2 class="case-title">No frills.<br>No filters. <em>Just fire.</em></h2>
        <p class="case-desc">
          Smokehouse Riot opened in late 2024 with one ambition: to be the loudest, most defiantly honest burger spot in the city — a place where the food is charred, the room is rowdy, and the brand bleeds smoke. They came to us with a name, a recipe, and zero visual identity. The challenge: build a system that feels lived-in from day one — packaging, signage, menus, merch — and looks like it was forged in a back-alley grill, not designed in a boardroom.
        </p>
        <div class="case-tags">
          <span class="case-tag">Brand Strategy</span>
          <span class="case-tag">Logo &amp; Identity</span>
          <span class="case-tag">Packaging</span>
          <span class="case-tag">Type System</span>
          <span class="case-tag">Menu Design</span>
          <span class="case-tag">Signage</span>
          <span class="case-tag">Merch</span>
        </div>
      </div>

      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-num">4 wk</div>
          <div class="stat-label">Discovery to first launch package</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">22+</div>
          <div class="stat-label">Brand touchpoints designed end-to-end</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">3</div>
          <div class="stat-label">Logo directions explored, 1 selected</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">2</div>
          <div class="stat-label">Custom typeface pairings tested in-store</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     02 — DESIGN PROCESS
═══════════════════════════════════════════ -->
<div style="background: var(--bark);">
  <div style="max-width:1300px; margin: 0 auto; padding: 6rem 5%;">
    <div class="section-header" style="border-color: rgba(245,166,35,0.2);">
      <span class="section-num">02 /</span>
      <span class="section-title">Design Process</span>
      <div class="section-rule"></div>
    </div>

    <div class="process-grid">
      <div class="process-step">
        <div class="process-step-num">01</div>
        <svg class="process-step-icon" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="1.4" fill="none"/>
          <path d="M14 20 L18 24 L26 16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
        <div class="process-step-title">Spark</div>
        <div class="process-step-text">Interviews with the founders, line cooks, and 14 regulars. Competitive teardown of 28 burger spots in the metro. We mapped what the brand <em>must</em> never feel like: corporate, cute, or clean.</div>
      </div>

      <div class="process-step">
        <div class="process-step-num">02</div>
        <svg class="process-step-icon" viewBox="0 0 40 40" fill="none">
          <path d="M12 30 C12 24, 16 22, 14 16 C12 10, 16 8, 16 8 M20 30 C20 22, 24 20, 22 14 C20 9, 24 6, 24 6 M28 30 C28 24, 32 22, 30 16 C28 10, 32 8, 32 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none"/>
        </svg>
        <div class="process-step-title">Smoke</div>
        <div class="process-step-text">Strategy &amp; positioning. We landed on "honest, charred, defiant" as the emotional triad. Mood-boards built around dive-bar punk, 1970s grill ads, vintage hot-sauce labels, and field-press editorial.</div>
      </div>

      <div class="process-step">
        <div class="process-step-num">03</div>
        <svg class="process-step-icon" viewBox="0 0 40 40" fill="none">
          <path d="M8 28 L18 14 L24 22 L32 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <circle cx="18" cy="14" r="2" fill="currentColor"/>
          <circle cx="24" cy="22" r="2" fill="currentColor"/>
          <circle cx="32" cy="10" r="2" fill="currentColor"/>
        </svg>
        <div class="process-step-title">Char</div>
        <div class="process-step-text">Three logo directions: a flame-only mark, a typographic riot wordmark, and a stamped seal hybrid. Tested on packaging, signage, and at 12pt menu print. The hybrid wordmark won — bold at 200ft, legible at 12pt.</div>
      </div>

      <div class="process-step">
        <div class="process-step-num">04</div>
        <svg class="process-step-icon" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="10" width="28" height="20" rx="2" stroke="currentColor" stroke-width="1.4" fill="none"/>
          <line x1="10" y1="16" x2="22" y2="16" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="10" y1="20" x2="26" y2="20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="10" y1="24" x2="18" y2="24" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        <div class="process-step-title">Plate</div>
        <div class="process-step-text">Production: full logo suite, color tokens, type scale, icon set, packaging line, signage, menus, merch, and a tone-of-voice guide. Delivered as a Figma library + dev-ready CSS variables.</div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     03 — DISCOVERY & INSIGHTS
═══════════════════════════════════════════ -->
<div style="background: var(--smoke);">
  <div style="max-width:1300px; margin: 0 auto; padding: 7rem 5% 6rem;">
    <div class="section-header">
      <span class="section-num">03 /</span>
      <span class="section-title">Research &amp; Insights</span>
      <div class="section-rule"></div>
    </div>

    <div class="discovery">
      <div>
        <div class="case-overline">From the Field</div>
        <div class="discovery-title">Four <em>truths</em> that shaped every decision.</div>
      </div>
      <div>
        <ul class="insight-list">
          <li class="insight-item">
            <svg class="insight-icon" viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path d="M12 2 L14 9 L21 9 L15.5 13 L17.5 20 L12 16 L6.5 20 L8.5 13 L3 9 L10 9 Z" fill="currentColor"/>
            </svg>
            <div class="insight-text">
              <strong>The competition was beige</strong>
              An audit of 28 burger joints showed 71% used cartoon mascots and primary-school palettes. There was a glaring white-space for a brand that took itself just-seriously-enough to feel grown-up — without losing the dive-bar swagger.
            </div>
          </li>
          <li class="insight-item">
            <svg class="insight-icon" viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path d="M12 2 L14 9 L21 9 L15.5 13 L17.5 20 L12 16 L6.5 20 L8.5 13 L3 9 L10 9 Z" fill="currentColor"/>
            </svg>
            <div class="insight-text">
              <strong>People photograph the package, not the food</strong>
              In ethnographic interviews, 8 of 12 respondents said they had taken a photo of takeout packaging in the last month — vs. only 4 who had photographed the meal itself. Packaging is the brand's loudest billboard.
            </div>
          </li>
          <li class="insight-item">
            <svg class="insight-icon" viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path d="M12 2 L14 9 L21 9 L15.5 13 L17.5 20 L12 16 L6.5 20 L8.5 13 L3 9 L10 9 Z" fill="currentColor"/>
            </svg>
            <div class="insight-text">
              <strong>The night crowd reads with their feet</strong>
              Most decisions to walk in happen between 9pm–1am, fueled by neon, smoke, and signage glimpsed from the sidewalk. We needed a logo that hits at 200ft, in low light, half-occluded by passing traffic.
            </div>
          </li>
          <li class="insight-item">
            <svg class="insight-icon" viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path d="M12 2 L14 9 L21 9 L15.5 13 L17.5 20 L12 16 L6.5 20 L8.5 13 L3 9 L10 9 Z" fill="currentColor"/>
            </svg>
            <div class="insight-text">
              <strong>"Honesty" outsells "premium"</strong>
              When asked what made a burger spot trustworthy, regulars used the words <em>real, gritty, no-frills, unbothered</em> — not <em>artisanal</em> or <em>elevated</em>. The brand voice was rewritten to sound like the guy at the grill, not the guy in marketing.
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="sub-label">Customer Personas</div>
    <div class="personas">
      <div class="persona">
        <div class="persona-tag">Primary Persona</div>
        <div class="persona-name">Marcus &ldquo;Mac&rdquo; Delgado</div>
        <div class="persona-role">Line Cook · 27 · Late-Shift Regular</div>
        <div class="persona-quote">"I clock out at midnight and I want a burger that hits me like a drum solo. I don't need a story. I need a damn good crust."</div>
        <ul class="persona-needs">
          <li>Late-night kitchen open until at least 1am</li>
          <li>Punchy, photo-worthy packaging he can post without thinking</li>
          <li>A loyalty stamp card, not an app he has to download</li>
          <li>Specials board that changes with the cooks' mood</li>
        </ul>
      </div>
      <div class="persona">
        <div class="persona-tag">Secondary Persona</div>
        <div class="persona-name">Riley &amp; Tess</div>
        <div class="persona-role">Saturday-Night Crew · 24 / 26</div>
        <div class="persona-quote">"We pick the place by how the bag looks coming out the door. If it looks like a band poster, we're in."</div>
        <ul class="persona-needs">
          <li>Instagram-bait packaging &amp; merch (caps, tees, stickers)</li>
          <li>A confident menu — no decision paralysis</li>
          <li>Group-friendly seating &amp; loud sound system</li>
          <li>Easy mobile ordering for pre-show pickups</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     04 — VISUAL DIRECTION
═══════════════════════════════════════════ -->
<div style="background: var(--bark);">
  <div style="max-width:1300px; margin: 0 auto; padding: 6rem 5%;">
    <div class="section-header" style="border-color: rgba(245,166,35,0.2);">
      <span class="section-num">04 /</span>
      <span class="section-title">Visual Direction</span>
      <div class="section-rule"></div>
    </div>

    <div class="visual-dir">
      <div class="vd-main">
        <div class="vd-title">The Concept: Riot Wrapped in Grill Smoke</div>
        <div class="vd-paragraph">The brand had to walk a tightrope: gritty enough to feel earned, but precise enough to read across a $1 stamp card or a 40ft mural. The conceptual anchor became a typographic <em>riot</em> — a stacked wordmark where the second line burns brighter than the first, like a flare in a dark room.</div>
        <div class="vd-paragraph">Every visual decision pulls from the grill: the soft warmth of <em>ash</em> on cream paper, the crusted edges of a charcoal-pressed patty, the splash of <em>amber</em> hot sauce, the deep <em>bark</em> of a long smoke. We avoided gloss, gradients, and anything that could be mistaken for a chain. Patterns, textures, and grain are treated as features, not flaws.</div>
        <div class="vd-paragraph">Passion One was selected for its industrial weight — it reads like signage punched out of sheet metal. Libre Baskerville carries the editorial honesty of a 70s diner placemat. Space Mono provides the receipt-paper detail layer. Together: rowdy, readable, and unmistakably ours.</div>
      </div>
      <div class="vd-side">
        <div class="case-overline" style="margin-bottom: 0.4rem;">Mood Words</div>
        <div class="mood-words">
          <div class="mood-word">Defiant <span>energy</span></div>
          <div class="mood-word">Smoky <span>warmth</span></div>
          <div class="mood-word">Charred <span>texture</span></div>
          <div class="mood-word">Honest <span>voice</span></div>
          <div class="mood-word">Loud <span>presence</span></div>
          <div class="mood-word">Lived-in <span>craft</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     05 — BRAND VOICE
═══════════════════════════════════════════ -->
<div style="background: var(--smoke);">
  <div style="max-width:1300px; margin: 0 auto; padding: 7rem 5% 6rem;">
    <div class="section-header">
      <span class="section-num">05 /</span>
      <span class="section-title">Brand Voice</span>
      <div class="section-rule"></div>
    </div>

    <div class="voice-grid">
      <div class="voice-card do">
        <div class="voice-tag">★ We Sound Like</div>
        <ul class="voice-list">
          <li>Char it. Eat it. Repeat it.</li>
          <li>Forks are optional. Napkins, not so much.</li>
          <li>Born from the grill. Raised on hot sauce.</li>
          <li>No salads. No apologies.</li>
          <li>Open till the smoke clears.</li>
          <li>If it ain't smoking, it ain't us.</li>
        </ul>
      </div>
      <div class="voice-card dont">
        <div class="voice-tag">✕ We Don't Sound Like</div>
        <ul class="voice-list">
          <li>Artisanal hand-pressed locally-sourced patties.</li>
          <li>Welcome to the Smokehouse Riot family!</li>
          <li>Curated culinary experiences await.</li>
          <li>A premium fast-casual destination.</li>
          <li>We use only the finest ingredients.</li>
          <li>Indulge in our gourmet selection.</li>
        </ul>
      </div>
    </div>

    <div class="pullquote" style="border: 1px solid rgba(232,71,26,0.18); padding: 4rem 3rem;">
      <div class="pullquote-text">
        Smokehouse Riot doesn't whisper, doesn't pander, doesn't apologize. The brand speaks in short, declarative sentences, with exactly enough swagger to feel earned and exactly enough warmth to feel like home.
      </div>
      <div class="pullquote-attr">— Internal Tone Guide, p. 04</div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     06 — PRIMARY LOGO
═══════════════════════════════════════════ -->
<div style="background: var(--smoke); padding: 4rem 5% 0;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header">
      <span class="section-num">06 /</span>
      <span class="section-title">Primary Logo</span>
      <div class="section-rule"></div>
    </div>
  </div>
</div>
<div style="max-width:1300px; margin: 0 auto; padding: 0 5% 4rem;">
  <div class="logo-grid">
    <div class="logo-card dark">
      <div class="logo-card-corner"></div>
      <img class="logo-img" data-logo src="" alt="Smokehouse Riot Logo" />
      <div class="logo-card-label">Primary — Dark Background</div>
    </div>
    <div class="logo-card light">
      <div class="logo-card-corner" style="border-color:rgba(124,92,71,0.4);"></div>
      <img class="logo-img" data-logo src="" alt="Smokehouse Riot Logo" />
      <div class="logo-card-label" style="color:#7C5C47;">Primary — Light Background</div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     07 — LOGO ANATOMY
═══════════════════════════════════════════ -->
<div style="background: var(--smoke);">
  <div style="max-width:1300px; margin: 0 auto; padding: 0 5% 6rem;">
    <div class="section-header">
      <span class="section-num">07 /</span>
      <span class="section-title">Logo Construction</span>
      <div class="section-rule"></div>
    </div>

    <div class="anatomy-wrap">
      <div class="anatomy-stage">
        <div class="anatomy-canvas">
          <img data-logo src="" alt="Logo Anatomy" />
          <div class="anatomy-marker" style="left: -8%; top: -8%; right: -8%; bottom: -8%;"></div>

          <div class="anatomy-pin" style="top: 8%; left: 102%;">
            <span class="line"></span>
            <span class="dot"></span>
            <span>01 · Wordmark Stack</span>
          </div>
          <div class="anatomy-pin" style="top: 48%; left: 102%;">
            <span class="line"></span>
            <span class="dot"></span>
            <span>02 · Flame Accent</span>
          </div>
          <div class="anatomy-pin" style="top: 88%; left: 102%;">
            <span class="line"></span>
            <span class="dot"></span>
            <span>03 · Stamp Frame</span>
          </div>
        </div>
      </div>

      <div class="anatomy-info">
        <div class="anatomy-row">
          <div class="anatomy-num">01</div>
          <div>
            <div class="anatomy-label">Wordmark Stack</div>
            <div class="anatomy-text">Two lines of Passion One Black, set tight at 0.85 line-height. The cap-height of "RIOT" sits exactly 1.0× below the baseline of "SMOKEHOUSE" — never compress, never expand.</div>
          </div>
        </div>
        <div class="anatomy-row">
          <div class="anatomy-num">02</div>
          <div>
            <div class="anatomy-label">Flame Accent</div>
            <div class="anatomy-text">"RIOT" is filled in Flame (#E8471A) with a 2px Ember (#C93B0F) inner stroke. This is the only place the inner-stroke treatment is permitted across the system.</div>
          </div>
        </div>
        <div class="anatomy-row">
          <div class="anatomy-num">03</div>
          <div>
            <div class="anatomy-label">Stamp Frame</div>
            <div class="anatomy-text">Optional containing rule, 2px solid, used only on packaging seals and merch labels. Inner padding is 0.75× the cap-height of "SMOKEHOUSE" on every side.</div>
          </div>
        </div>
        <div class="anatomy-row">
          <div class="anatomy-num">04</div>
          <div>
            <div class="anatomy-label">Optical Spacing</div>
            <div class="anatomy-text">Letter-spacing is set to -0.02em. Below 24px, kern manually — Passion One's terminals fight when set tight at small sizes.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     08 — ALTERNATE LOGO
═══════════════════════════════════════════ -->
<div style="background: var(--smoke); padding: 0 5%;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header">
      <span class="section-num">08 /</span>
      <span class="section-title">Alternate Logo</span>
      <div class="section-rule"></div>
    </div>
  </div>
</div>
<div style="max-width:1300px; margin: 0 auto; padding: 0 5% 5rem;">
  <div class="logo-grid">
    <div class="logo-card dark">
      <div class="logo-card-corner"></div>
      <img class="logo-img" data-alt-logo src="" alt="Smokehouse Riot Alt Logo" />
      <div class="logo-card-label">Horizontal Wordmark</div>
    </div>
    <div class="logo-card amber-bg">
      <div class="logo-card-corner" style="border-color:rgba(59,31,10,0.4);"></div>
      <img class="logo-img" data-alt-logo src="" alt="Smokehouse Riot Alt Logo" />
      <div class="logo-card-label" style="color:#3B1F0A;">Badge / Stamp Version</div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     09 — LOGO RULES
═══════════════════════════════════════════ -->
<div style="background: var(--bark);">
  <div style="max-width:1300px; margin: 0 auto; padding: 6rem 5%;">
    <div class="section-header" style="border-color: rgba(245,166,35,0.2);">
      <span class="section-num">09 /</span>
      <span class="section-title">Logo Rules</span>
      <div class="section-rule"></div>
    </div>

    <div class="sub-label">Do &amp; Don&rsquo;t</div>

    <div class="donts-grid">
      <div class="dont-cell ok">
        <div class="mini" style="background-image: url('/smokehouseriotlogo.png');"></div>
        <div class="label">Approved · On Char</div>
      </div>
      <div class="dont-cell ok">
        <div class="mini" style="background-image: url('/smokehouseriotlogo.png'); background-color: var(--cream);"></div>
        <div class="label">Approved · On Cream</div>
      </div>
      <div class="dont-cell no">
        <div class="mini" style="background-image: url('/smokehouseriotlogo.png'); transform: skewX(-12deg);"></div>
        <div class="label">Don&rsquo;t · Skew or Distort</div>
      </div>
      <div class="dont-cell no">
        <div class="mini" style="background-image: url('/smokehouseriotlogo.png'); filter: hue-rotate(120deg);"></div>
        <div class="label">Don&rsquo;t · Recolor Outside Palette</div>
      </div>
      <div class="dont-cell no">
        <div class="mini" style="background-image: url('/smokehouseriotlogo.png'); background-color: #5A8A3A;"></div>
        <div class="label">Don&rsquo;t · Place on Off-Brand Color</div>
      </div>
      <div class="dont-cell no">
        <div class="mini" style="background-image: url('/smokehouseriotlogo.png'); opacity: 0.35;"></div>
        <div class="label">Don&rsquo;t · Reduce Below 80% Opacity</div>
      </div>
      <div class="dont-cell no">
        <div class="mini" style="background-image: url('/smokehouseriotlogo.png'); transform: rotate(8deg);"></div>
        <div class="label">Don&rsquo;t · Rotate the Mark</div>
      </div>
      <div class="dont-cell no">
        <div class="mini" style="background-image: url('/smokehouseriotlogo.png'); filter: drop-shadow(0 0 6px #fff);"></div>
        <div class="label">Don&rsquo;t · Add Outer Glow</div>
      </div>
    </div>

    <div class="clear-space">
      <div class="clear-space-visual">
        <img src="/smokehouseriotlogo.png" alt="Logo with clear space" />
      </div>
      <div>
        <div class="case-overline">Clear Space &amp; Min Size</div>
        <div style="font-family:'Passion One',sans-serif; font-size:1.6rem; color:var(--cream); text-transform:uppercase; letter-spacing:0.02em; margin-bottom:1rem;">Give the mark room to breathe.</div>
        <div style="font-family:'Libre Baskerville',serif; font-size:0.86rem; color:var(--tan); line-height:1.85;">
          Maintain a minimum clear space equal to the cap-height of "SMOKEHOUSE" on every side. No type, photograph, or graphic element should ever cross this boundary. Minimum reproduction size is <strong style="color:var(--amber);">28px</strong> on screen and <strong style="color:var(--amber);">12mm</strong> in print. Below this size, switch to the alternate horizontal mark.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     10 — TYPOGRAPHY
═══════════════════════════════════════════ -->
<div style="background: var(--smoke); padding: 6rem 5%;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header">
      <span class="section-num">10 /</span>
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

    <div class="type-scale">
      <div class="case-overline" style="margin-bottom:1.4rem;">Type Scale</div>
      <div class="type-scale-row">
        <span class="type-scale-tag">H1 / Hero</span>
        <span class="type-scale-size">96 / 88</span>
        <span class="type-scale-sample" style="font-size: 4.2rem;">SMOKEHOUSE</span>
      </div>
      <div class="type-scale-row">
        <span class="type-scale-tag">H2 / Section</span>
        <span class="type-scale-size">56 / 60</span>
        <span class="type-scale-sample" style="font-size: 2.6rem;">Char it. Eat it.</span>
      </div>
      <div class="type-scale-row">
        <span class="type-scale-tag">H3 / Block</span>
        <span class="type-scale-size">36 / 44</span>
        <span class="type-scale-sample" style="font-size: 1.8rem;">Born from the grill.</span>
      </div>
      <div class="type-scale-row">
        <span class="type-scale-tag">H4 / Card</span>
        <span class="type-scale-size">22 / 28</span>
        <span class="type-scale-sample" style="font-size: 1.2rem;">Double-stack riot.</span>
      </div>
      <div class="type-scale-row">
        <span class="type-scale-tag">Body</span>
        <span class="type-scale-size">15 / 26</span>
        <span class="type-scale-sample" style="font-family: 'Libre Baskerville', serif; font-size: 0.9rem; color: var(--tan); text-transform: none; letter-spacing: 0;">A burger pressed, charred, and unapologetically loud. Pair with hot sauce. Repeat indefinitely.</span>
      </div>
      <div class="type-scale-row">
        <span class="type-scale-tag">Caption</span>
        <span class="type-scale-size">11 / 18</span>
        <span class="type-scale-sample" style="font-family: 'Space Mono', monospace; font-size: 0.65rem; color: var(--amber); letter-spacing: 0.15em;">EST. 2025 · SR-0042 · DINE IN &amp; TAKEOUT</span>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     11 — COLOR PALETTE
═══════════════════════════════════════════ -->
<div style="background: var(--smoke); padding: 0 5% 5rem;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header" style="padding-top:2rem;">
      <span class="section-num">11 /</span>
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

    <div class="proportion-bar">
      <div class="prop-segment" style="background:#1A0F08; flex: 4; color: var(--ash);">Char · 40%</div>
      <div class="prop-segment" style="background:#3B1F0A; flex: 2.5; color: var(--cream);">Bark · 25%</div>
      <div class="prop-segment" style="background:#FAF0E6; flex: 1.7; color: var(--bark);">Cream · 17%</div>
      <div class="prop-segment" style="background:#E8471A; flex: 1; color: var(--cream);">Flame · 10%</div>
      <div class="prop-segment" style="background:#F5A623; flex: 0.5; color: var(--bark);">Amber · 5%</div>
      <div class="prop-segment" style="background:#C93B0F; flex: 0.3; color: var(--cream);">Ember · 3%</div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1.5rem; margin-top:2rem;">
      <div style="padding:1.5rem; border:1px solid rgba(232,71,26,0.3); background:rgba(232,71,26,0.05);">
        <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; color:var(--flame); margin-bottom:0.8rem; text-transform:uppercase;">Primary Usage</div>
        <div style="font-family:'Libre Baskerville',serif; font-size:0.8rem; color:var(--tan); line-height:1.7;">Flame on Char for main CTAs, hero areas, and logo applications. Never use Flame text on Amber background.</div>
      </div>
      <div style="padding:1.5rem; border:1px solid rgba(245,166,35,0.3); background:rgba(245,166,35,0.05);">
        <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; color:var(--amber); margin-bottom:0.8rem; text-transform:uppercase;">Accent Usage</div>
        <div style="font-family:'Libre Baskerville',serif; font-size:0.8rem; color:var(--tan); line-height:1.7;">Amber for highlights, price tags, and callouts. Use sparingly — it draws the eye and anchors hierarchy.</div>
      </div>
      <div style="padding:1.5rem; border:1px solid rgba(124,92,71,0.3); background:rgba(124,92,71,0.05);">
        <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.2em; color:var(--ash); margin-bottom:0.8rem; text-transform:uppercase;">Accessibility</div>
        <div style="font-family:'Libre Baskerville',serif; font-size:0.8rem; color:var(--tan); line-height:1.7;">Cream on Char hits 18.4:1 (AAA). Flame on Char is 5.2:1 (AA). Never set Cream text on Amber — contrast falls below 3:1.</div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     12 — ICONOGRAPHY
═══════════════════════════════════════════ -->
<div style="background: var(--smoke); padding: 0 5% 6rem;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header" style="padding-top:2rem;">
      <span class="section-num">12 /</span>
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

<!-- ══════════════════════════════════════════
     13 — PATTERNS & TEXTURES
═══════════════════════════════════════════ -->
<div style="background: var(--bark);">
  <div style="max-width:1300px; margin: 0 auto; padding: 6rem 5%;">
    <div class="section-header" style="border-color: rgba(245,166,35,0.2);">
      <span class="section-num">13 /</span>
      <span class="section-title">Patterns &amp; Textures</span>
      <div class="section-rule"></div>
    </div>

    <div class="pattern-grid">
      <div class="pattern-card pattern-flames">
        <div class="pattern-label">Embers · Hero</div>
      </div>
      <div class="pattern-card pattern-stripes">
        <div class="pattern-label">Caution · Wrap</div>
      </div>
      <div class="pattern-card pattern-stamp">
        <div class="pattern-label" style="color:var(--bark); background:rgba(255,255,255,0.4);">Halftone · Print</div>
      </div>
      <div class="pattern-card pattern-checks">
        <div class="pattern-label" style="color:var(--bark); background:rgba(255,255,255,0.4);">Checker · Diner</div>
      </div>
      <div class="pattern-card pattern-burn">
        <div class="pattern-label">Burn · Backdrop</div>
      </div>
      <div class="pattern-card pattern-grid-mark">
        <div class="pattern-label">Grid · Editorial</div>
      </div>
    </div>

    <div style="margin-top:2rem; padding:1.5rem; border:1px solid rgba(245,166,35,0.2); background:rgba(245,166,35,0.05);">
      <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.25em; color:var(--amber); margin-bottom:0.8rem; text-transform:uppercase;">Pattern Usage</div>
      <div style="font-family:'Libre Baskerville',serif; font-size:0.82rem; color:var(--tan); line-height:1.8;">
        Patterns are functional, not decorative. <strong style="color:var(--cream);">Embers</strong> backs hero panels and packaging interiors. <strong style="color:var(--cream);">Caution</strong> appears only on takeout sleeves &amp; merch hangtags. <strong style="color:var(--cream);">Halftone</strong> is reserved for print-only ad campaigns. <strong style="color:var(--cream);">Checker</strong> lines waxed paper liners and pickup mats. Never overlap two patterns in the same surface.
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     14 — BRAND APPLICATIONS
═══════════════════════════════════════════ -->
<div style="background: var(--smoke);">
  <div style="max-width:1300px; margin: 0 auto; padding: 6rem 5%;">
    <div class="section-header">
      <span class="section-num">14 /</span>
      <span class="section-title">Brand Applications</span>
      <div class="section-rule"></div>
    </div>

    <div class="apps-grid">

      <!-- Business Card -->
      <div class="app-card">
        <div class="app-label">Business Card</div>
        <div class="biz-card">
          <div>
            <div class="biz-mark">SMOKEHOUSE<br><span>RIOT</span></div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:flex-end;">
            <div>
              <div class="biz-name">Cole Marrero</div>
              <div class="biz-title">Pit Boss · Co-Owner</div>
            </div>
            <div class="biz-contact">
              cole@smokehouseriot.co<br>
              +1 (415) 555 0184<br>
              smokehouseriot.co
            </div>
          </div>
        </div>
      </div>

      <!-- Takeout Box -->
      <div class="app-card">
        <div class="app-label">Takeout Box</div>
        <div class="takeout">
          <div>
            <div class="takeout-stamp">DOUBLE<br><span>RIOT</span></div>
            <div class="takeout-tagline">— with charred onions, smoked aioli &amp; pickled jalapeños.</div>
          </div>
          <div class="takeout-meta">
            <span>SR-0042</span>
            <span>Eat fast.</span>
          </div>
        </div>
      </div>

      <!-- Sticker Pack -->
      <div class="app-card">
        <div class="app-label">Sticker Pack</div>
        <div class="stickers">
          <div class="stk flame">Char it.</div>
          <div class="stk amber">Eat it.</div>
          <div class="stk cream">Repeat.</div>
          <div class="stk bark">SR<br>★</div>
          <div class="stk outline">Hot AF</div>
          <div class="stk tan">No<br>forks.</div>
        </div>
      </div>

      <!-- T-shirt -->
      <div class="app-card">
        <div class="app-label">Crew Tee</div>
        <div class="tee">
          <div class="tee-shape"></div>
          <div class="tee-collar"></div>
          <div class="tee-print">
            <div class="top">Smokehouse</div>
            <div class="mid">RIOT</div>
            <div class="bot">★ EST. 2025 ★</div>
          </div>
        </div>
      </div>

      <!-- Neon Sign -->
      <div class="app-card">
        <div class="app-label">Storefront Neon</div>
        <div class="neon">
          <div class="neon-text">
            Open<br><span class="accent">Late.</span>
          </div>
        </div>
      </div>

      <!-- Apron -->
      <div class="app-card">
        <div class="app-label">Crew Apron</div>
        <div class="apron">
          <div class="apron-tie left"></div>
          <div class="apron-tie right"></div>
          <div class="apron-body">
            <div class="apron-pocket"></div>
          </div>
          <div class="apron-print">
            <div class="a-top">Smokehouse</div>
            <div class="a-mid">RIOT</div>
          </div>
        </div>
      </div>

      <!-- Sauce Label -->
      <div class="app-card" style="grid-column: 1 / -1;">
        <div class="app-label">House Hot Sauce Label</div>
        <div class="label-strip">
          <div class="label-mono">★ EST. 2025 ★ SMALL BATCH ★ 5 OZ ★</div>
          <div class="label-name">RIOT <span>SAUCE</span></div>
          <div class="label-foot">Made in-house. Shake before unleashing.</div>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     15 — MENU DESIGN
═══════════════════════════════════════════ -->
<div style="background: var(--bark); padding: 5rem 5%;">
  <div style="max-width:1300px; margin: 0 auto;">
    <div class="section-header" style="border-color: rgba(245,166,35,0.2);">
      <span class="section-num">15 /</span>
      <span class="section-title">Menu Design</span>
      <div class="section-rule"></div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <img src="/menu-1.jpg" alt="Menu Design 1" style="width: 100%; max-height: 55vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);" />
      <img src="/menu-2.jpg" alt="Menu Design 2" style="width: 100%; max-height: 55vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);" />
    </div>
    <div style="margin-top:2rem; padding:1.5rem; border:1px solid rgba(245,166,35,0.25); background:rgba(245,166,35,0.04);">
      <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.25em; color:var(--amber); margin-bottom:0.8rem; text-transform:uppercase;">Menu System Notes</div>
      <div style="font-family:'Libre Baskerville',serif; font-size:0.82rem; color:var(--tan); line-height:1.8;">
        Printed on 100lb recycled stock with a soft-touch matte finish. The two-page format is dense, declarative, and intentionally uneditorialized — every item is one short line, no descriptions that read like apologies. Daily specials are stamped on by hand using a custom Riot rubber stamp, reinforcing the lived-in, never-twice-the-same feel.
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     16 — OUTCOMES
═══════════════════════════════════════════ -->
<div style="background: var(--smoke);">
  <div style="max-width:1300px; margin: 0 auto; padding: 6rem 5%;">
    <div class="section-header">
      <span class="section-num">16 /</span>
      <span class="section-title">Outcomes &amp; Impact</span>
      <div class="section-rule"></div>
    </div>

    <div class="outcomes">
      <div class="outcome-cell">
        <div class="outcome-num">+267%</div>
        <div class="outcome-label">Walk-in traffic</div>
        <div class="outcome-text">Within 12 weeks of launch, weekday-evening foot traffic nearly tripled. The neon sign was credited by 41% of new customers as their reason for stopping in.</div>
      </div>
      <div class="outcome-cell">
        <div class="outcome-num">47k</div>
        <div class="outcome-label">Instagram followers</div>
        <div class="outcome-text">Six months from a cold start. User-generated takeout-box photos accounted for 62% of branded mentions — packaging is doing the marketing job by itself.</div>
      </div>
      <div class="outcome-cell">
        <div class="outcome-num">4.8★</div>
        <div class="outcome-label">Review average</div>
        <div class="outcome-text">Across Yelp, Google, and Resy. Reviewers consistently used brand-voice words — "loud," "honest," "no-frills" — without prompting from any owned content.</div>
      </div>
      <div class="outcome-cell">
        <div class="outcome-num">22+</div>
        <div class="outcome-label">Touchpoints shipped</div>
        <div class="outcome-text">Logo suite, color tokens, type scale, icon set, packaging line (5 SKUs), menus, signage, merch (4 items), social templates, and a tone-of-voice guide.</div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     PULL QUOTE
═══════════════════════════════════════════ -->
<div class="pullquote">
  <div class="pullquote-text">
    "The brand looks like the place we wanted to build before we knew how to say it.
    People walk in already mid-sentence — like they've been here before. That's the win."
  </div>
  <div class="pullquote-attr">— Cole Marrero, Pit Boss &amp; Co-Owner</div>
</div>

<!-- ══════════════════════════════════════════
     FOOTER
═══════════════════════════════════════════ -->
<div class="footer">
  <div class="footer-brand">SMOKEHOUSE RIOT™</div>
  <div class="footer-note">Brand Identity Case Study · Char it. Eat it. Repeat it. · 2025</div>
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
