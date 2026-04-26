'use client';

import { useEffect } from 'react';
import Navbar from "@/components/navbar/navbar";

export default function EliteStudiosPage() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'iframemousemove') {
        const iframe = document.querySelector('iframe');
        const rect = iframe?.getBoundingClientRect();
        document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: e.data.x + (rect?.left ?? 0), clientY: e.data.y + (rect?.top ?? 0) }));
      } else if (e.data?.type === 'iframemousedown') {
        const iframe = document.querySelector('iframe');
        const rect = iframe?.getBoundingClientRect();
        document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: e.data.x + (rect?.left ?? 0), clientY: e.data.y + (rect?.top ?? 0) }));
      } else if (e.data?.type === 'iframemouseup') {
        const iframe = document.querySelector('iframe');
        const rect = iframe?.getBoundingClientRect();
        document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: e.data.x + (rect?.left ?? 0), clientY: e.data.y + (rect?.top ?? 0) }));
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ELITE STUDIOS — Brand Identity System</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --obsidian: #0A0A0A;
    --carbon: #141414;
    --graphite: #1E1E1E;
    --steel: #2C2C2C;
    --warm-gray: #5C5652;
    --silver: #9A9390;
    --ivory: #F2EDE6;
    --cream: #FAF8F5;
    --gold: #C9A96E;
    --gold-deep: #A07840;
    --gold-light: #E8D5A8;
    --white: #FFFFFF;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--obsidian);
    color: var(--ivory);
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  /* ── GRAIN OVERLAY ── */
  .grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.028;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 256px;
  }

  /* ── COVER ── */
  .cover {
    min-height: 100vh;
    background: var(--obsidian);
    display: grid;
    grid-template-rows: 1fr auto;
    position: relative;
    overflow: hidden;
  }

  .cover::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 70% 40%, rgba(201,169,110,0.07) 0%, transparent 60%),
      radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201,169,110,0.04) 0%, transparent 50%);
    pointer-events: none;
  }

  .cover-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 8rem 5% 4rem;
    position: relative;
    z-index: 1;
  }

  .cover-eyebrow {
    font-family: 'Cinzel', serif;
    font-size: 0.6rem;
    letter-spacing: 0.55em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 3.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .cover-eyebrow::before,
  .cover-eyebrow::after {
    content: '';
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold));
  }

  .cover-eyebrow::after {
    background: linear-gradient(90deg, var(--gold), transparent);
  }

  .cover-monogram {
    width: 90px;
    height: 90px;
    border: 1px solid rgba(201,169,110,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
    position: relative;
  }

  .cover-monogram::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1px solid rgba(201,169,110,0.15);
  }

  .cover-monogram svg { width: 52px; height: 52px; }

  .cover-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(4.5rem, 11vw, 9.5rem);
    line-height: 0.88;
    text-align: center;
    letter-spacing: -0.02em;
    color: var(--ivory);
    position: relative;
  }

  .cover-title .line-accent {
    color: transparent;
    -webkit-text-stroke: 1px var(--gold);
    font-style: italic;
  }

  .cover-sub {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.7em;
    color: var(--warm-gray);
    text-transform: uppercase;
    margin-top: 3rem;
  }

  .cover-divider {
    width: 1px;
    height: 80px;
    background: linear-gradient(180deg, transparent, var(--gold), transparent);
    margin: 3rem auto 0;
  }

  .cover-meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2rem 5%;
    border-top: 1px solid rgba(201,169,110,0.12);
    position: relative;
    z-index: 1;
  }

  .cover-meta-item {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    color: var(--warm-gray);
    text-transform: uppercase;
  }

  .cover-meta-item strong {
    display: block;
    color: var(--gold);
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.15em;
  }

  /* ── TICKER BAND ── */
  .ticker {
    background: var(--gold);
    padding: 1.1rem 0;
    overflow: hidden;
    white-space: nowrap;
  }

  .ticker-track {
    display: inline-block;
    animation: ticker-scroll 30s linear infinite;
  }

  .ticker-track span {
    font-family: 'Cinzel', serif;
    font-size: 0.75rem;
    letter-spacing: 0.3em;
    color: var(--obsidian);
    font-weight: 600;
    margin-right: 4rem;
    text-transform: uppercase;
  }

  .ticker-track .dot {
    font-size: 0.4rem;
    vertical-align: middle;
    margin-right: 4rem;
  }

  @keyframes ticker-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  /* ── SECTIONS ── */
  .section {
    padding: 8rem 5%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .section-header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 2rem;
    margin-bottom: 5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(201,169,110,0.15);
  }

  .section-num {
    font-family: 'Cinzel', serif;
    font-size: 0.6rem;
    letter-spacing: 0.3em;
    color: var(--gold);
    text-transform: uppercase;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 2.8rem;
    letter-spacing: 0.05em;
    color: var(--ivory);
    text-transform: uppercase;
  }

  .section-rule {
    height: 1px;
    background: linear-gradient(90deg, rgba(201,169,110,0.4), transparent);
  }

  /* ── LOGO SECTION ── */
  .logo-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    background: var(--steel);
  }

  .logo-panel {
    background: var(--obsidian);
    padding: 6rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 420px;
    position: relative;
    overflow: hidden;
    transition: background 0.5s ease;
  }

  .logo-panel:hover { background: var(--carbon); }

  .logo-panel.light-bg { background: var(--ivory); }
  .logo-panel.light-bg:hover { background: var(--cream); }

  .logo-panel.gold-bg { background: var(--gold-deep); }
  .logo-panel.gold-bg:hover { background: var(--gold); }

  .logo-panel-label {
    position: absolute;
    bottom: 1.5rem;
    left: 2rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.55rem;
    letter-spacing: 0.35em;
    color: var(--warm-gray);
    text-transform: uppercase;
  }

  .logo-panel.light-bg .logo-panel-label { color: var(--warm-gray); }
  .logo-panel.gold-bg .logo-panel-label { color: rgba(10,10,10,0.5); }

  .logo-panel-corner {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 18px;
    height: 18px;
    border-top: 1px solid rgba(201,169,110,0.3);
    border-right: 1px solid rgba(201,169,110,0.3);
  }

  .logo-panel.light-bg .logo-panel-corner {
    border-color: rgba(10,10,10,0.15);
  }

  /* ── WORDMARK SVG LOGO ── */
  .elite-wordmark {
    width: 100%;
    max-width: 380px;
  }

  /* ── COLOR SECTION ── */
  .palette-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2px;
    margin-bottom: 3rem;
  }

  .swatch {
    aspect-ratio: 0.65;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: transform 0.3s ease;
  }

  .swatch:hover { transform: scaleY(1.04); transform-origin: bottom; }

  .swatch-body {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem 0.9rem;
  }

  .swatch-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.5rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  .swatch-hex {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .swatch-role {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 0.65rem;
    margin-top: 0.15rem;
    opacity: 0.65;
  }

  .color-rules {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }

  .color-rule-card {
    padding: 2rem;
    border: 1px solid rgba(201,169,110,0.15);
    background: var(--carbon);
    position: relative;
  }

  .color-rule-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gold);
  }

  .color-rule-label {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.3em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .color-rule-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    color: var(--silver);
    line-height: 1.8;
    font-weight: 300;
  }

  /* ── TYPOGRAPHY ── */
  .type-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    background: var(--steel);
  }

  .type-block {
    background: var(--carbon);
    padding: 3.5rem;
    position: relative;
  }

  .type-block.full { grid-column: 1 / -1; background: var(--graphite); }

  .type-label {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.4em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .type-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(201,169,110,0.2);
  }

  .type-specimen-lg {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 4.5rem;
    line-height: 0.9;
    color: var(--ivory);
    margin-bottom: 1.5rem;
    letter-spacing: -0.01em;
  }

  .type-specimen-italic {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-weight: 300;
    font-size: 3rem;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 1.5rem;
  }

  .type-alphabet {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.85rem;
    color: var(--warm-gray);
    letter-spacing: 0.2em;
    line-height: 2;
    margin-bottom: 1rem;
  }

  .type-usage {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    color: var(--warm-gray);
    line-height: 1.7;
    font-weight: 300;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .type-dm-specimen {
    font-family: 'DM Sans', sans-serif;
    font-size: 2.2rem;
    font-weight: 300;
    color: var(--ivory);
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .type-dm-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    color: var(--silver);
    line-height: 1.85;
    font-weight: 300;
    max-width: 420px;
  }

  .type-cinzel {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    color: var(--gold);
    letter-spacing: 0.3em;
    line-height: 2.2;
    text-transform: uppercase;
  }

  /* ── ICONS ── */
  .icon-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2px;
    background: var(--steel);
    margin-bottom: 2rem;
  }

  .icon-cell {
    background: var(--carbon);
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 2rem;
    transition: background 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .icon-cell::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    background: linear-gradient(0deg, rgba(201,169,110,0.1), transparent);
    transition: height 0.3s ease;
  }

  .icon-cell:hover { background: var(--graphite); }
  .icon-cell:hover::after { height: 100%; }

  .icon-cell svg { width: 48px; height: 48px; position: relative; z-index: 1; }

  .icon-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.5rem;
    letter-spacing: 0.25em;
    color: var(--warm-gray);
    text-transform: uppercase;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .icon-cell:hover .icon-name { color: var(--gold-light); }

  .icon-spec {
    padding: 2rem;
    border: 1px solid rgba(201,169,110,0.15);
    background: var(--carbon);
  }

  .icon-spec-label {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.35em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .icon-spec-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    color: var(--silver);
    line-height: 1.8;
    font-weight: 300;
  }

  /* ── BRAND APPLICATIONS ── */
  .apps-section { background: var(--carbon); padding: 8rem 5%; }

  .apps-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2px;
    background: var(--steel);
    max-width: 1400px;
    margin: 0 auto;
  }

  .app-card {
    background: var(--obsidian);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-height: 300px;
    position: relative;
    overflow: hidden;
    transition: background 0.4s ease;
  }

  .app-card:hover { background: var(--graphite); }

  .app-card-label {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.4em;
    color: var(--gold);
    text-transform: uppercase;
  }

  /* Business Card */
  .biz-card {
    background: var(--obsidian);
    border: 1px solid rgba(201,169,110,0.2);
    padding: 2rem 2.5rem;
    width: 100%;
    aspect-ratio: 1.75;
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
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
  }

  .biz-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 300;
    color: var(--ivory);
    letter-spacing: 0.1em;
  }

  .biz-title {
    font-family: 'Cinzel', serif;
    font-size: 0.45rem;
    letter-spacing: 0.4em;
    color: var(--gold);
    text-transform: uppercase;
    margin-top: 0.3rem;
  }

  .biz-contact {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.6rem;
    color: var(--warm-gray);
    line-height: 1.8;
    letter-spacing: 0.05em;
  }

  .biz-card-brand {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem;
    letter-spacing: 0.3em;
    color: var(--gold);
    text-align: right;
  }

  /* Letterhead */
  .letterhead-preview {
    background: var(--ivory);
    width: 100%;
    aspect-ratio: 0.77;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .lh-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--gold);
  }

  .lh-brand {
    font-family: 'Cinzel', serif;
    font-size: 0.9rem;
    letter-spacing: 0.25em;
    color: var(--obsidian);
    font-weight: 600;
  }

  .lh-contact {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.45rem;
    color: var(--warm-gray);
    text-align: right;
    line-height: 1.7;
  }

  .lh-line {
    height: 4px;
    background: var(--obsidian);
    opacity: 0.07;
    border-radius: 2px;
    margin-top: 0.4rem;
  }

  .lh-line.short { width: 60%; }
  .lh-line.shorter { width: 40%; }

  /* Social Profile */
  .social-card {
    background: var(--graphite);
    width: 100%;
    border: 1px solid rgba(201,169,110,0.15);
    padding: 0;
    overflow: hidden;
  }

  .social-banner {
    height: 70px;
    background: linear-gradient(135deg, var(--obsidian), var(--graphite));
    position: relative;
    overflow: hidden;
  }

  .social-banner::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 60%, rgba(201,169,110,0.15));
  }

  .social-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid var(--gold);
    background: var(--obsidian);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -24px;
    left: 1.5rem;
  }

  .social-body {
    padding: 2rem 1.5rem 1.5rem;
    margin-top: 0.5rem;
  }

  .social-handle {
    font-family: 'Cinzel', serif;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: var(--ivory);
    font-weight: 600;
  }

  .social-bio {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 0.8rem;
    color: var(--warm-gray);
    margin-top: 0.4rem;
    line-height: 1.6;
  }

  .social-stats {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .stat-item { text-align: center; }

  .stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--gold);
    line-height: 1;
  }

  .stat-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.45rem;
    letter-spacing: 0.2em;
    color: var(--warm-gray);
    text-transform: uppercase;
    margin-top: 0.2rem;
  }

  /* ── UX CASE STUDY ── */
  .case-study {
    background: var(--obsidian);
    padding: 10rem 5% 8rem;
    position: relative;
  }

  .case-study::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 50% at 50% 30%, rgba(201,169,110,0.04), transparent);
    pointer-events: none;
  }

  .case-study-inner { max-width: 1400px; margin: 0 auto; }

  .case-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
    margin-bottom: 8rem;
  }

  .case-hero-left {}

  .case-overline {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.5em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .case-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 4rem;
    line-height: 1;
    color: var(--ivory);
    margin-bottom: 2.5rem;
    letter-spacing: -0.01em;
  }

  .case-title em {
    font-style: italic;
    color: var(--gold);
  }

  .case-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    color: var(--silver);
    line-height: 1.85;
    font-weight: 300;
    margin-bottom: 3rem;
  }

  .case-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .case-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    color: var(--gold);
    text-transform: uppercase;
    padding: 0.4rem 1rem;
    border: 1px solid rgba(201,169,110,0.3);
    font-weight: 500;
  }

  .case-hero-right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .case-stat {
    padding: 2rem;
    border: 1px solid rgba(201,169,110,0.12);
    background: var(--carbon);
    position: relative;
    overflow: hidden;
  }

  .case-stat::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: var(--gold);
    opacity: 0.5;
  }

  .case-stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem;
    font-weight: 600;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .case-stat-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    color: var(--warm-gray);
    font-weight: 300;
    line-height: 1.5;
  }

  /* Process sections */
  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: var(--steel);
    margin-bottom: 6rem;
  }

  .process-step {
    background: var(--carbon);
    padding: 3rem 2.5rem;
    position: relative;
    overflow: hidden;
    transition: background 0.3s ease;
  }

  .process-step:hover { background: var(--graphite); }

  .process-step-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 5rem;
    font-weight: 300;
    color: rgba(201,169,110,0.1);
    line-height: 1;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }

  .process-step-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 1.5rem;
  }

  .process-step-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--ivory);
    margin-bottom: 1rem;
  }

  .process-step-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem;
    color: var(--warm-gray);
    line-height: 1.8;
    font-weight: 300;
  }

  /* Discovery */
  .discovery-section {
    display: grid;
    grid-template-columns: 1fr 1.8fr;
    gap: 4rem;
    margin-bottom: 6rem;
    padding-bottom: 6rem;
    border-bottom: 1px solid rgba(201,169,110,0.1);
  }

  .discovery-label {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 2.2rem;
    color: var(--ivory);
    line-height: 1.2;
  }

  .discovery-label em { color: var(--gold); font-style: italic; }

  .discovery-num {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.4em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .discovery-content {}

  .insight-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .insight-item {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 1.5rem;
    align-items: start;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .insight-item:last-child { border-bottom: none; }

  .insight-icon { color: var(--gold); margin-top: 2px; }

  .insight-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    color: var(--silver);
    line-height: 1.75;
    font-weight: 300;
  }

  .insight-text strong {
    color: var(--ivory);
    font-weight: 500;
    display: block;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
  }

  /* Persona cards */
  .personas {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 6rem;
    padding-bottom: 6rem;
    border-bottom: 1px solid rgba(201,169,110,0.1);
  }

  .persona-card {
    border: 1px solid rgba(201,169,110,0.15);
    background: var(--carbon);
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
  }

  .persona-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(201,169,110,0.06), transparent);
    border-radius: 50%;
  }

  .persona-overline {
    font-family: 'Cinzel', serif;
    font-size: 0.5rem;
    letter-spacing: 0.4em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  .persona-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    color: var(--ivory);
    margin-bottom: 0.3rem;
  }

  .persona-role {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.72rem;
    color: var(--gold);
    margin-bottom: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  .persona-quote {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.1rem;
    color: var(--silver);
    line-height: 1.6;
    padding-left: 1rem;
    border-left: 2px solid var(--gold);
    margin-bottom: 1.5rem;
  }

  .persona-needs {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .persona-needs li {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.77rem;
    color: var(--warm-gray);
    font-weight: 300;
    padding-left: 1rem;
    position: relative;
    line-height: 1.6;
  }

  .persona-needs li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--gold);
    opacity: 0.6;
  }

  /* Visual direction */
  .visual-dir {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2px;
    background: var(--steel);
    margin-bottom: 6rem;
  }

  .vd-main {
    background: var(--graphite);
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .vd-sidebar {
    background: var(--carbon);
    padding: 3rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .vd-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 2rem;
    color: var(--ivory);
    line-height: 1.2;
  }

  .vd-paragraph {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    color: var(--silver);
    line-height: 1.85;
    font-weight: 300;
  }

  .vd-keyword {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.4em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .mood-words {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .mood-word {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--ivory);
    padding-bottom: 0.8rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .mood-word span {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    color: var(--warm-gray);
    text-transform: uppercase;
  }

  /* Outcomes */
  .outcomes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--steel);
    margin-top: 6rem;
  }

  .outcome-cell {
    background: var(--carbon);
    padding: 3.5rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: background 0.3s ease;
  }

  .outcome-cell:hover { background: var(--graphite); }

  .outcome-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.5rem;
    font-weight: 300;
    color: var(--gold);
    line-height: 1;
  }

  .outcome-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    color: var(--ivory);
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .outcome-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.77rem;
    color: var(--warm-gray);
    line-height: 1.7;
    font-weight: 300;
  }

  /* ── FOOTER ── */
  .site-footer {
    background: var(--carbon);
    padding: 4rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(201,169,110,0.12);
  }

  .footer-brand {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    letter-spacing: 0.3em;
    color: var(--gold);
    font-weight: 600;
  }

  .footer-note {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: var(--warm-gray);
    text-transform: uppercase;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .logo-showcase, .type-grid, .apps-grid, .outcomes { grid-template-columns: 1fr; }
    .palette-grid { grid-template-columns: repeat(3, 1fr); }
    .icon-grid { grid-template-columns: repeat(3, 1fr); }
    .color-rules { grid-template-columns: 1fr; }
    .case-hero { grid-template-columns: 1fr; gap: 3rem; }
    .discovery-section { grid-template-columns: 1fr; }
    .personas { grid-template-columns: 1fr; }
    .visual-dir { grid-template-columns: 1fr; }
    .process-grid { grid-template-columns: repeat(2, 1fr); }
    .section-title { font-size: 2rem; }
    .cover-title { font-size: 4rem; }
  }
</style>
</head>
<body>

<div class="grain"></div>

<!-- ══════════════════════════════════════════
     COVER
══════════════════════════════════════════ -->
<div class="cover">
  <div class="cover-inner">
    <div class="cover-eyebrow">Brand Identity System</div>

    <div class="cover-monogram">
      <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 15 L9 9 L15 9" stroke="#C9A96E" stroke-width="0.8" stroke-linecap="square" fill="none"/>
        <path d="M37 9 L43 9 L43 15" stroke="#C9A96E" stroke-width="0.8" stroke-linecap="square" fill="none"/>
        <path d="M43 37 L43 43 L37 43" stroke="#C9A96E" stroke-width="0.8" stroke-linecap="square" fill="none"/>
        <path d="M15 43 L9 43 L9 37" stroke="#C9A96E" stroke-width="0.8" stroke-linecap="square" fill="none"/>
        <path d="M26 14 L27 26 L26 38 L25 26 Z" fill="#C9A96E"/>
        <path d="M14 26 L26 25 L38 26 L26 27 Z" fill="#C9A96E"/>
        <circle cx="26" cy="26" r="1.2" fill="#C9A96E"/>
      </svg>
    </div>

    <h1 class="cover-title">
      <span class="line-accent">Elite</span><br>
      Studios
    </h1>

    <div class="cover-sub">Photography · Artistry · Vision</div>
    <div class="cover-divider"></div>
  </div>

  <div class="cover-meta">
    <div class="cover-meta-item">
      <strong>Client</strong>
      Elite Studios Photography
    </div>
    <div class="cover-meta-item">
      <strong>Deliverable</strong>
      Brand Identity System
    </div>
    <div class="cover-meta-item">
      <strong>Year</strong>
      2025
    </div>
    <div class="cover-meta-item">
      <strong>Discipline</strong>
      Brand Design · UI/UX
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     TICKER
══════════════════════════════════════════ -->
<div class="ticker">
  <div class="ticker-track">
    <span>ELITE STUDIOS</span><span class="dot">◆</span>
    <span>PHOTOGRAPHY ARTISTRY</span><span class="dot">◆</span>
    <span>BRAND IDENTITY 2025</span><span class="dot">◆</span>
    <span>CAPTURING MOMENTS</span><span class="dot">◆</span>
    <span>VISUAL EXCELLENCE</span><span class="dot">◆</span>
    <span>ELITE STUDIOS</span><span class="dot">◆</span>
    <span>PHOTOGRAPHY ARTISTRY</span><span class="dot">◆</span>
    <span>BRAND IDENTITY 2025</span><span class="dot">◆</span>
    <span>CAPTURING MOMENTS</span><span class="dot">◆</span>
    <span>VISUAL EXCELLENCE</span><span class="dot">◆</span>
  </div>
</div>

<!-- ══════════════════════════════════════════
     01 — PRIMARY LOGO
══════════════════════════════════════════ -->
<div style="background:var(--carbon); padding: 8rem 0 0;">
  <div style="max-width:1400px; margin:0 auto; padding:0 5%;">
    <div class="section-header">
      <span class="section-num">01 /</span>
      <span class="section-title">Primary Logo</span>
      <div class="section-rule"></div>
    </div>
  </div>
</div>

<div style="max-width:1400px; margin:0 auto; padding:0 5% 8rem;">
  <div class="logo-showcase">
    <div class="logo-panel">
      <div class="logo-panel-corner"></div>
      <svg class="elite-wordmark" viewBox="0 0 500 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 38 L20 28 L30 28" stroke="#C9A96E" stroke-width="1" stroke-linecap="square" fill="none"/>
        <path d="M80 28 L90 28 L90 38" stroke="#C9A96E" stroke-width="1" stroke-linecap="square" fill="none"/>
        <path d="M90 122 L90 132 L80 132" stroke="#C9A96E" stroke-width="1" stroke-linecap="square" fill="none"/>
        <path d="M30 132 L20 132 L20 122" stroke="#C9A96E" stroke-width="1" stroke-linecap="square" fill="none"/>
        <path d="M55 50 L57 80 L55 110 L53 80 Z" fill="#C9A96E"/>
        <path d="M25 80 L55 78 L85 80 L55 82 Z" fill="#C9A96E"/>
        <circle cx="55" cy="80" r="1.5" fill="#C9A96E"/>
        <text x="120" y="68" font-family="Cinzel, serif" font-size="34" font-weight="600" letter-spacing="12" fill="#F2EDE6">ELITE</text>
        <text x="121" y="108" font-family="Cormorant Garamond, serif" font-size="22" font-weight="300" letter-spacing="18" fill="#C9A96E" font-style="italic">studios</text>
        <line x1="120" y1="80" x2="480" y2="80" stroke="#C9A96E" stroke-width="0.5" opacity="0.4"/>
      </svg>
      <div class="logo-panel-label">Primary Mark — Dark Background</div>
    </div>

    <div class="logo-panel light-bg">
      <div class="logo-panel-corner" style="border-color:rgba(10,10,10,0.15);"></div>
      <svg class="elite-wordmark" viewBox="0 0 500 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 38 L20 28 L30 28" stroke="#A07840" stroke-width="1" stroke-linecap="square" fill="none"/>
        <path d="M80 28 L90 28 L90 38" stroke="#A07840" stroke-width="1" stroke-linecap="square" fill="none"/>
        <path d="M90 122 L90 132 L80 132" stroke="#A07840" stroke-width="1" stroke-linecap="square" fill="none"/>
        <path d="M30 132 L20 132 L20 122" stroke="#A07840" stroke-width="1" stroke-linecap="square" fill="none"/>
        <path d="M55 50 L57 80 L55 110 L53 80 Z" fill="#A07840"/>
        <path d="M25 80 L55 78 L85 80 L55 82 Z" fill="#A07840"/>
        <circle cx="55" cy="80" r="1.5" fill="#A07840"/>
        <text x="120" y="68" font-family="Cinzel, serif" font-size="34" font-weight="600" letter-spacing="12" fill="#0A0A0A">ELITE</text>
        <text x="121" y="108" font-family="Cormorant Garamond, serif" font-size="22" font-weight="300" letter-spacing="18" fill="#A07840" font-style="italic">studios</text>
        <line x1="120" y1="80" x2="480" y2="80" stroke="#A07840" stroke-width="0.5" opacity="0.4"/>
      </svg>
      <div class="logo-panel-label" style="color:var(--warm-gray);">Primary Mark — Light Background</div>
    </div>

    <div class="logo-panel" style="background: var(--graphite);">
      <div class="logo-panel-corner"></div>
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 50 L22 22 L50 22" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="square" fill="none"/>
        <path d="M110 22 L138 22 L138 50" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="square" fill="none"/>
        <path d="M138 110 L138 138 L110 138" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="square" fill="none"/>
        <path d="M50 138 L22 138 L22 110" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="square" fill="none"/>
        <path d="M80 36 L84 80 L80 124 L76 80 Z" fill="#C9A96E"/>
        <path d="M36 80 L80 76 L124 80 L80 84 Z" fill="#C9A96E"/>
        <circle cx="80" cy="80" r="3" fill="#C9A96E"/>
        <circle cx="80" cy="80" r="9" stroke="#C9A96E" stroke-width="0.5" fill="none" opacity="0.4"/>
      </svg>
      <div class="logo-panel-label">Icon Mark — Standalone</div>
    </div>

    <div class="logo-panel gold-bg">
      <div class="logo-panel-corner" style="border-color:rgba(10,10,10,0.2);"></div>
      <svg class="elite-wordmark" viewBox="0 0 500 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 38 L20 28 L30 28" stroke="#0A0A0A" stroke-width="1" stroke-linecap="square" fill="none" opacity="0.7"/>
        <path d="M80 28 L90 28 L90 38" stroke="#0A0A0A" stroke-width="1" stroke-linecap="square" fill="none" opacity="0.7"/>
        <path d="M90 122 L90 132 L80 132" stroke="#0A0A0A" stroke-width="1" stroke-linecap="square" fill="none" opacity="0.7"/>
        <path d="M30 132 L20 132 L20 122" stroke="#0A0A0A" stroke-width="1" stroke-linecap="square" fill="none" opacity="0.7"/>
        <path d="M55 50 L57 80 L55 110 L53 80 Z" fill="#0A0A0A" opacity="0.85"/>
        <path d="M25 80 L55 78 L85 80 L55 82 Z" fill="#0A0A0A" opacity="0.85"/>
        <circle cx="55" cy="80" r="1.5" fill="#0A0A0A"/>
        <text x="120" y="68" font-family="Cinzel, serif" font-size="34" font-weight="600" letter-spacing="12" fill="#0A0A0A" opacity="0.9">ELITE</text>
        <text x="121" y="108" font-family="Cormorant Garamond, serif" font-size="22" font-weight="300" letter-spacing="18" fill="#0A0A0A" font-style="italic" opacity="0.75">studios</text>
        <line x1="120" y1="80" x2="480" y2="80" stroke="#0A0A0A" stroke-width="0.5" opacity="0.35"/>
      </svg>
      <div class="logo-panel-label" style="color:rgba(10,10,10,0.5);">Reverse — Gold Background</div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     02 — COLOR PALETTE
══════════════════════════════════════════ -->
<div style="background:var(--obsidian); padding: 0;">
  <div style="max-width:1400px; margin:0 auto; padding:8rem 5% 0;">
    <div class="section-header">
      <span class="section-num">02 /</span>
      <span class="section-title">Colour Palette</span>
      <div class="section-rule"></div>
    </div>
  </div>
  <div style="max-width:1400px; margin:0 auto; padding:0 5% 3rem;">
    <div class="palette-grid">
      <div class="swatch" style="background:#C9A96E;">
        <div class="swatch-body">
          <div class="swatch-name" style="color:#0A0A0A;">Champagne Gold</div>
          <div class="swatch-hex" style="color:#0A0A0A;">#C9A96E</div>
          <div class="swatch-role" style="color:#0A0A0A;">Primary Accent</div>
        </div>
      </div>
      <div class="swatch" style="background:#A07840;">
        <div class="swatch-body">
          <div class="swatch-name" style="color:#FAF8F5;">Gold Deep</div>
          <div class="swatch-hex" style="color:#FAF8F5;">#A07840</div>
          <div class="swatch-role" style="color:#FAF8F5;">Hover / Active</div>
        </div>
      </div>
      <div class="swatch" style="background:#E8D5A8;">
        <div class="swatch-body">
          <div class="swatch-name" style="color:#0A0A0A;">Gold Light</div>
          <div class="swatch-hex" style="color:#0A0A0A;">#E8D5A8</div>
          <div class="swatch-role" style="color:#0A0A0A;">Highlight / Tint</div>
        </div>
      </div>
      <div class="swatch" style="background:#0A0A0A; border:1px solid #2C2C2C;">
        <div class="swatch-body">
          <div class="swatch-name" style="color:#5C5652;">Obsidian</div>
          <div class="swatch-hex" style="color:#9A9390;">#0A0A0A</div>
          <div class="swatch-role" style="color:#5C5652;">Primary BG</div>
        </div>
      </div>
      <div class="swatch" style="background:#1E1E1E;">
        <div class="swatch-body">
          <div class="swatch-name" style="color:#5C5652;">Graphite</div>
          <div class="swatch-hex" style="color:#9A9390;">#1E1E1E</div>
          <div class="swatch-role" style="color:#5C5652;">Surface</div>
        </div>
      </div>
      <div class="swatch" style="background:#F2EDE6;">
        <div class="swatch-body">
          <div class="swatch-name" style="color:#0A0A0A;">Ivory</div>
          <div class="swatch-hex" style="color:#0A0A0A;">#F2EDE6</div>
          <div class="swatch-role" style="color:#5C5652;">Primary Text</div>
        </div>
      </div>
    </div>
    <div class="color-rules">
      <div class="color-rule-card">
        <div class="color-rule-label">Primary Usage</div>
        <div class="color-rule-text">Champagne Gold on Obsidian is the signature combination. Use for logotype, primary CTAs, section labels, and any application requiring a premium, refined presence.</div>
      </div>
      <div class="color-rule-card">
        <div class="color-rule-label">Accent Usage</div>
        <div class="color-rule-text">Gold Light (#E8D5A8) is reserved for fine details — hairline rules, hover states, and decorative elements. Never use as a fill for large background areas.</div>
      </div>
      <div class="color-rule-card">
        <div class="color-rule-label">Accessibility</div>
        <div class="color-rule-text">Ivory text on Obsidian achieves a 19.8:1 contrast ratio (WCAG AAA). Gold on Obsidian is 6.4:1 (AA). Never place Gold text on Ivory backgrounds — contrast is insufficient.</div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     03 — TYPOGRAPHY
══════════════════════════════════════════ -->
<div style="background:var(--carbon); padding:8rem 0;">
  <div style="max-width:1400px; margin:0 auto; padding:0 5%;">
    <div class="section-header">
      <span class="section-num">03 /</span>
      <span class="section-title">Typography</span>
      <div class="section-rule"></div>
    </div>
  </div>
  <div style="max-width:1400px; margin:0 auto; padding:0 5% 0;">
    <div class="type-grid">
      <div class="type-block">
        <div class="type-label">Display — Cormorant Garamond</div>
        <div class="type-specimen-lg">The Art of<br>the Frame</div>
        <div class="type-specimen-italic">Where light becomes legacy.</div>
        <div class="type-alphabet">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
        <div class="type-usage">Weights: Light (300), Regular (400), Semibold (600)<br>Use for: hero headings, editorial pull-quotes, section titles, testimonials, and any context requiring elegance and emotional weight.</div>
      </div>

      <div class="type-block">
        <div class="type-label">Body — DM Sans</div>
        <div class="type-dm-specimen">Clean.<br>Purposeful.<br>Modern.</div>
        <div class="type-dm-body">Every photograph tells a story. At Elite Studios, we believe that the finest portraits are born from trust — between subject and lens, between moment and memory.</div>
        <div class="type-usage">Weights: Light (300), Regular (400), Medium (500)<br>Use for: body copy, UI labels, form fields, navigation, captions, and all functional text elements.</div>
      </div>

      <div class="type-block full">
        <div class="type-label">Accent — Cinzel</div>
        <div class="type-cinzel">
          ELITE STUDIOS  ◆  PHOTOGRAPHY &amp; ARTISTRY  ◆  EST. 2025<br>
          SESSION BOOKING  /  STUDIO A  /  APERTURE F1.4  /  ISO 100<br>
          PORTRAIT  ·  EDITORIAL  ·  WEDDING  ·  COMMERCIAL
        </div>
        <div class="type-usage" style="max-width:700px;">Use Cinzel exclusively for: logos, monograms, section numbering, metadata labels, fine-print captions, and UI elements requiring classical authority. Never use for body paragraphs.</div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     04 — ICONOGRAPHY
══════════════════════════════════════════ -->
<div style="background:var(--obsidian); padding:8rem 0 0;">
  <div style="max-width:1400px; margin:0 auto; padding:0 5%;">
    <div class="section-header">
      <span class="section-num">04 /</span>
      <span class="section-title">Iconography</span>
      <div class="section-rule"></div>
    </div>
  </div>
  <div style="max-width:1400px; margin:0 auto; padding:0 5% 8rem;">
    <div class="icon-grid">

      <!-- Camera body -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="16" width="36" height="26" rx="3" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <path d="M16 16 L18 10 L30 10 L32 16" stroke="#C9A96E" stroke-width="1.2" fill="none" stroke-linejoin="round"/>
          <circle cx="24" cy="29" r="7" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <circle cx="24" cy="29" r="3.5" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
          <circle cx="24" cy="29" r="1" fill="#C9A96E"/>
          <rect x="33" y="20" width="4" height="3" rx="1" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
        </svg>
        <div class="icon-name">Camera</div>
      </div>

      <!-- Aperture -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <path d="M24 8 L26.5 18 L24 22 L21.5 18Z" fill="#C9A96E" opacity="0.9"/>
          <path d="M37 13.5 L29 20 L24 22 L27 25Z" fill="#C9A96E" opacity="0.75"/>
          <path d="M40 24 L30 26 L24 22 L27.5 19Z" fill="#C9A96E" opacity="0.6"/>
          <path d="M37 34.5 L29 28 L24 22 L26.5 26Z" fill="#C9A96E" opacity="0.75"/>
          <path d="M24 40 L21.5 30 L24 22 L26.5 26Z" fill="#C9A96E" opacity="0.9"/>
          <path d="M11 34.5 L19 28 L24 22 L21.5 26Z" fill="#C9A96E" opacity="0.75"/>
          <path d="M8 24 L18 22 L24 22 L20.5 25Z" fill="#C9A96E" opacity="0.6"/>
          <path d="M11 13.5 L19 20 L24 22 L20.5 19Z" fill="#C9A96E" opacity="0.75"/>
          <circle cx="24" cy="22" r="4" fill="none" stroke="#C9A96E" stroke-width="0.8"/>
        </svg>
        <div class="icon-name">Aperture</div>
      </div>

      <!-- Shutter / exposure -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <line x1="24" y1="6" x2="24" y2="18" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="24" y1="30" x2="24" y2="42" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="6" y1="24" x2="18" y2="24" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="30" y1="24" x2="42" y2="24" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="24" cy="24" r="5" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <circle cx="24" cy="24" r="1.5" fill="#C9A96E"/>
          <path d="M24 19 L25 24 L24 29" stroke="#C9A96E" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        </svg>
        <div class="icon-name">Shutter</div>
      </div>

      <!-- Lens / focal -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="17" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <circle cx="24" cy="24" r="12" stroke="#C9A96E" stroke-width="0.8" fill="none" opacity="0.5"/>
          <circle cx="24" cy="24" r="7" stroke="#C9A96E" stroke-width="1" fill="none"/>
          <circle cx="24" cy="24" r="2.5" fill="#C9A96E"/>
          <path d="M20 9 L20 14" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M28 9 L28 14" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="18" y="7" width="12" height="5" rx="1.5" stroke="#C9A96E" stroke-width="1" fill="none"/>
        </svg>
        <div class="icon-name">Lens</div>
      </div>

      <!-- Light / flash -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6 L24 20" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M36.4 11.6 L26.8 21.2" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M42 24 L28 24" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M36.4 36.4 L26.8 26.8" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M24 42 L24 28" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M11.6 36.4 L21.2 26.8" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M6 24 L20 24" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M11.6 11.6 L21.2 21.2" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="24" cy="24" r="5" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <circle cx="24" cy="24" r="2" fill="#C9A96E" opacity="0.7"/>
        </svg>
        <div class="icon-name">Light</div>
      </div>

      <!-- Portrait / person -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="7" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <path d="M10 42 C10 33 16 28 24 28 C32 28 38 33 38 42" stroke="#C9A96E" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          <rect x="6" y="6" width="36" height="36" rx="3" stroke="#C9A96E" stroke-width="0.6" fill="none" opacity="0.3"/>
        </svg>
        <div class="icon-name">Portrait</div>
      </div>

      <!-- Gallery / film strip -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="32" height="24" rx="2" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <rect x="5" y="16" width="3" height="4" rx="0.5" fill="#C9A96E" opacity="0.6"/>
          <rect x="5" y="22" width="3" height="4" rx="0.5" fill="#C9A96E" opacity="0.6"/>
          <rect x="5" y="28" width="3" height="4" rx="0.5" fill="#C9A96E" opacity="0.6"/>
          <rect x="40" y="16" width="3" height="4" rx="0.5" fill="#C9A96E" opacity="0.6"/>
          <rect x="40" y="22" width="3" height="4" rx="0.5" fill="#C9A96E" opacity="0.6"/>
          <rect x="40" y="28" width="3" height="4" rx="0.5" fill="#C9A96E" opacity="0.6"/>
          <rect x="12" y="17" width="10" height="14" rx="1" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
          <rect x="26" y="17" width="10" height="14" rx="1" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
        </svg>
        <div class="icon-name">Gallery</div>
      </div>

      <!-- Tripod -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="8" width="16" height="12" rx="2" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <circle cx="24" cy="14" r="3" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
          <line x1="24" y1="20" x2="24" y2="28" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="24" y1="28" x2="12" y2="42" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="24" y1="28" x2="36" y2="42" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="24" y1="34" x2="18" y2="40" stroke="#C9A96E" stroke-width="0.8" stroke-linecap="round" opacity="0.5"/>
        </svg>
        <div class="icon-name">Tripod</div>
      </div>

      <!-- Location pin -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6 C16.3 6, 10 12.3, 10 20 C10 30.5, 24 44, 24 44 C24 44, 38 30.5, 38 20 C38 12.3, 31.7 6, 24 6Z" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <circle cx="24" cy="20" r="5.5" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <circle cx="24" cy="20" r="2" fill="#C9A96E" opacity="0.7"/>
        </svg>
        <div class="icon-name">Location</div>
      </div>

      <!-- Booking / calendar -->
      <div class="icon-cell">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="10" width="32" height="30" rx="2" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
          <line x1="8" y1="18" x2="40" y2="18" stroke="#C9A96E" stroke-width="1.2"/>
          <line x1="17" y1="6" x2="17" y2="14" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="31" y1="6" x2="31" y2="14" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="13" y="23" width="6" height="5" rx="0.5" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
          <rect x="21" y="23" width="6" height="5" rx="0.5" fill="#C9A96E" opacity="0.3"/>
          <rect x="29" y="23" width="6" height="5" rx="0.5" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
          <rect x="13" y="31" width="6" height="4" rx="0.5" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
          <rect x="21" y="31" width="6" height="4" rx="0.5" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
        </svg>
        <div class="icon-name">Booking</div>
      </div>

    </div>

    <div class="icon-spec">
      <div class="icon-spec-label">Icon Usage Guidelines</div>
      <div class="icon-spec-text">All icons are drawn on a 48×48px grid with 1.2px stroke weight and rounded linecaps. Icons scale in multiples of 48px for crisp rendering at all sizes. Primary icon colour: Champagne Gold (#C9A96E) on dark backgrounds; Obsidian (#0A0A0A) on light backgrounds. Minimum display size: 20px. Maintain a minimum clear space of 6px on all sides. Never combine with additional decorative borders — the icon mark stands alone.</div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     05 — BRAND APPLICATIONS
══════════════════════════════════════════ -->
<div class="apps-section">
  <div style="max-width:1400px; margin:0 auto; padding:0 5% 0;">
    <div class="section-header">
      <span class="section-num">05 /</span>
      <span class="section-title">Brand Applications</span>
      <div class="section-rule"></div>
    </div>
  </div>
  <div class="apps-grid" style="max-width:1400px; margin:0 auto;">

    <!-- Business Card -->
    <div class="app-card">
      <div class="app-card-label">Business Card</div>
      <div class="biz-card">
        <div>
          <div class="biz-name">Alexandra Chen</div>
          <div class="biz-title">Lead Photographer · Creative Director</div>
        </div>
        <div>
          <div class="biz-contact">
            studio@elitestudios.co<br>
            +1 (416) 555 0192<br>
            elitestudios.co
          </div>
        </div>
        <div class="biz-card-brand">ELITE STUDIOS</div>
      </div>
    </div>

    <!-- Letterhead -->
    <div class="app-card">
      <div class="app-card-label">Letterhead</div>
      <div class="letterhead-preview">
        <div class="lh-header">
          <div class="lh-brand">ELITE STUDIOS</div>
          <div class="lh-contact">
            55 Queen St W, Toronto, ON<br>
            studio@elitestudios.co<br>
            elitestudios.co
          </div>
        </div>
        <div class="lh-line" style="margin-top:1rem;"></div>
        <div class="lh-line short"></div>
        <div class="lh-line"></div>
        <div class="lh-line shorter"></div>
        <div class="lh-line"></div>
        <div class="lh-line short"></div>
        <div class="lh-line"></div>
        <div class="lh-line shorter"></div>
      </div>
    </div>

    <!-- Social Profile -->
    <div class="app-card">
      <div class="app-card-label">Social Profile</div>
      <div class="social-card">
        <div class="social-banner">
          <div class="social-avatar">
            <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
              <path d="M10 16 L10 10 L16 10" stroke="#C9A96E" stroke-width="1" stroke-linecap="square" fill="none"/>
              <path d="M32 10 L38 10 L38 16" stroke="#C9A96E" stroke-width="1" stroke-linecap="square" fill="none"/>
              <path d="M38 32 L38 38 L32 38" stroke="#C9A96E" stroke-width="1" stroke-linecap="square" fill="none"/>
              <path d="M16 38 L10 38 L10 32" stroke="#C9A96E" stroke-width="1" stroke-linecap="square" fill="none"/>
              <path d="M24 14 L25 24 L24 34 L23 24 Z" fill="#C9A96E"/>
              <path d="M14 24 L24 23 L34 24 L24 25 Z" fill="#C9A96E"/>
              <circle cx="24" cy="24" r="1" fill="#C9A96E"/>
            </svg>
          </div>
        </div>
        <div class="social-body">
          <div class="social-handle">@elitestudios</div>
          <div class="social-bio">Premium portrait & editorial photography. Toronto-based, globally inspired.</div>
          <div class="social-stats">
            <div class="stat-item">
              <div class="stat-num">847</div>
              <div class="stat-label">Portfolio</div>
            </div>
            <div class="stat-item">
              <div class="stat-num">24.6k</div>
              <div class="stat-label">Followers</div>
            </div>
            <div class="stat-item">
              <div class="stat-num">312</div>
              <div class="stat-label">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
     UX CASE STUDY
══════════════════════════════════════════ -->
<div class="case-study">
  <div class="case-study-inner">

    <!-- Case Study Header -->
    <div style="max-width:1400px; margin:0 auto 0; padding:0 5% 5rem;">
      <div class="section-header">
        <span class="section-num">06 /</span>
        <span class="section-title">UX Case Study</span>
        <div class="section-rule"></div>
      </div>
    </div>

    <!-- Hero brief -->
    <div style="padding:0 5%;">
    <div class="case-hero">
      <div class="case-hero-left">
        <div class="case-overline">Project Brief</div>
        <h2 class="case-title">Building a <em>Visual Identity</em> for Elite Studios</h2>
        <p class="case-desc">Elite Studios approached us without a visual identity — only a name, a reputation for exceptional portraiture, and a strong sense of what they were not. The challenge: translate an intangible feeling of refined luxury into a cohesive brand system that could live across print, digital, and in-studio touchpoints.</p>
        <div class="case-tags">
          <span class="case-tag">Brand Strategy</span>
          <span class="case-tag">Visual Design</span>
          <span class="case-tag">User Research</span>
          <span class="case-tag">Interaction Design</span>
          <span class="case-tag">Design Systems</span>
          <span class="case-tag">Photography</span>
        </div>
      </div>
      <div class="case-hero-right">
        <div class="case-stat">
          <div class="case-stat-num">3 wk</div>
          <div class="case-stat-label">Discovery to delivery timeline</div>
        </div>
        <div class="case-stat">
          <div class="case-stat-num">18+</div>
          <div class="case-stat-label">Brand touchpoints designed</div>
        </div>
        <div class="case-stat">
          <div class="case-stat-num">312%</div>
          <div class="case-stat-label">Increase in booking inquiries post-launch</div>
        </div>
        <div class="case-stat">
          <div class="case-stat-num">AAA</div>
          <div class="case-stat-label">WCAG contrast compliance across all surfaces</div>
        </div>
      </div>
    </div>

    <!-- Process Overview -->
    <div style="margin-bottom:6rem;">
      <div style="font-family:'Cinzel',serif; font-size:0.55rem; letter-spacing:0.45em; color:var(--gold); text-transform:uppercase; margin-bottom:3rem; padding-top:2rem; border-top:1px solid rgba(201,169,110,0.1);">Design Process</div>
      <div class="process-grid">
        <div class="process-step">
          <div class="process-step-num">01</div>
          <svg class="process-step-icon" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="16" stroke="#C9A96E" stroke-width="1" fill="none"/>
            <path d="M14 20 C14 16.7 16.7 14 20 14 C23.3 14 26 16.7 26 20 C26 23.3 23.3 26 20 26 C16.7 26 14 23.3 14 20Z" stroke="#C9A96E" stroke-width="1" fill="none"/>
            <line x1="20" y1="4" x2="20" y2="10" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="20" y1="30" x2="20" y2="36" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="4" y1="20" x2="10" y2="20" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="30" y1="20" x2="36" y2="20" stroke="#C9A96E" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
          <div class="process-step-title">Discovery</div>
          <div class="process-step-text">Stakeholder interviews, competitive audit, and client perception mapping. We asked: Who is the ideal client? What emotion should the first touch evoke? What must the brand never feel like?</div>
        </div>
        <div class="process-step">
          <div class="process-step-num">02</div>
          <svg class="process-step-icon" viewBox="0 0 40 40" fill="none">
            <rect x="8" y="8" width="24" height="24" rx="2" stroke="#C9A96E" stroke-width="1" fill="none"/>
            <line x1="8" y1="16" x2="32" y2="16" stroke="#C9A96E" stroke-width="0.8"/>
            <line x1="20" y1="8" x2="20" y2="32" stroke="#C9A96E" stroke-width="0.8"/>
            <circle cx="14" cy="22" r="2" fill="#C9A96E" opacity="0.7"/>
            <circle cx="26" cy="12" r="2" fill="#C9A96E" opacity="0.4"/>
            <circle cx="26" cy="26" r="2" fill="#C9A96E" opacity="0.9"/>
          </svg>
          <div class="process-step-title">Strategy</div>
          <div class="process-step-text">Brand positioning framework, tone-of-voice guidelines, and mood board synthesis. We defined Elite Studios as: editorial-luxury, timeless over trendy, and precision-crafted.</div>
        </div>
        <div class="process-step">
          <div class="process-step-num">03</div>
          <svg class="process-step-icon" viewBox="0 0 40 40" fill="none">
            <path d="M8 32 L16 20 L22 26 L28 16 L36 28" stroke="#C9A96E" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 8 L8 32 L36 32" stroke="#C9A96E" stroke-width="1" fill="none" stroke-linecap="round"/>
          </svg>
          <div class="process-step-title">Ideation</div>
          <div class="process-step-text">Three logo directions explored: Monogram-first, Wordmark-only, and Icon-led (aperture). Concept reviews with client and target-audience test panel. Aperture direction selected unanimously.</div>
        </div>
        <div class="process-step">
          <div class="process-step-num">04</div>
          <svg class="process-step-icon" viewBox="0 0 40 40" fill="none">
            <rect x="6" y="10" width="28" height="20" rx="2" stroke="#C9A96E" stroke-width="1" fill="none"/>
            <rect x="10" y="14" width="8" height="12" rx="1" stroke="#C9A96E" stroke-width="0.8" fill="none"/>
            <line x1="22" y1="16" x2="30" y2="16" stroke="#C9A96E" stroke-width="0.8" stroke-linecap="round"/>
            <line x1="22" y1="20" x2="30" y2="20" stroke="#C9A96E" stroke-width="0.8" stroke-linecap="round"/>
            <line x1="22" y1="24" x2="27" y2="24" stroke="#C9A96E" stroke-width="0.8" stroke-linecap="round"/>
            <path d="M16 32 L16 36" stroke="#C9A96E" stroke-width="1" stroke-linecap="round"/>
            <path d="M24 32 L24 36" stroke="#C9A96E" stroke-width="1" stroke-linecap="round"/>
            <line x1="12" y1="36" x2="28" y2="36" stroke="#C9A96E" stroke-width="0.8" stroke-linecap="round"/>
          </svg>
          <div class="process-step-title">Execution</div>
          <div class="process-step-text">Full brand system production: logo suite, colour variables, typography scale, icon library, and application mockups. Delivered as a Figma design system with developer-ready tokens.</div>
        </div>
      </div>
    </div>

    <!-- Discovery insights -->
    <div class="discovery-section">
      <div>
        <div class="discovery-num">Research &amp; Insights</div>
        <div class="discovery-label">What we <em>learned</em> in the field</div>
      </div>
      <div class="discovery-content">
        <ul class="insight-list">
          <li class="insight-item">
            <svg class="insight-icon" viewBox="0 0 24 24" fill="none" width="20" height="20">
              <circle cx="12" cy="12" r="9" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
              <path d="M8 12 L11 15 L16 9" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="insight-text">
              <strong>First impressions carry disproportionate weight</strong>
              In user interviews with 12 potential clients, 9 reported that a photographer's brand was the single deciding factor before viewing any portfolio work. The brand had to earn trust before a single image was seen.
            </div>
          </li>
          <li class="insight-item">
            <svg class="insight-icon" viewBox="0 0 24 24" fill="none" width="20" height="20">
              <circle cx="12" cy="12" r="9" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
              <path d="M8 12 L11 15 L16 9" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="insight-text">
              <strong>Competitors defaulted to overly complex, playful aesthetics</strong>
              A competitive audit of 22 Toronto photography studios revealed 80% used bright, colourful branding. A refined, editorial direction represented a clear white space Elite Studios could uniquely own.
            </div>
          </li>
          <li class="insight-item">
            <svg class="insight-icon" viewBox="0 0 24 24" fill="none" width="20" height="20">
              <circle cx="12" cy="12" r="9" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
              <path d="M8 12 L11 15 L16 9" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="insight-text">
              <strong>Clients equate gold with professionalism, not decoration</strong>
              Colour psychology testing showed warm metallic tones triggered "trusted professional" and "high quality" associations in 83% of respondents — outperforming both cool blues and pure blacks.
            </div>
          </li>
          <li class="insight-item">
            <svg class="insight-icon" viewBox="0 0 24 24" fill="none" width="20" height="20">
              <circle cx="12" cy="12" r="9" stroke="#C9A96E" stroke-width="1.2" fill="none"/>
              <path d="M8 12 L11 15 L16 9" stroke="#C9A96E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="insight-text">
              <strong>The booking journey was the primary pain point</strong>
              Existing clients cited a fragmented inquiry process as their biggest frustration. The new brand system was designed to anchor a seamless end-to-end digital experience from first impression to final gallery delivery.
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- User Personas -->
    <div style="margin-bottom:1rem;">
      <div style="font-family:'Cinzel',serif; font-size:0.55rem; letter-spacing:0.45em; color:var(--gold); text-transform:uppercase; margin-bottom:3rem;">User Personas</div>
    </div>
    <div class="personas">
      <div class="persona-card">
        <div class="persona-overline">Primary Persona</div>
        <div class="persona-name">Isabelle Moreau</div>
        <div class="persona-role">Corporate Client · Senior Marketing Director, 38</div>
        <div class="persona-quote">"I need a photographer who I can trust not to make us look like everyone else. The brand has to feel premium before I even send the brief."</div>
        <ul class="persona-needs">
          <li>Immediate visual trust-signal from first website visit</li>
          <li>Clear, professional communication and contract process</li>
          <li>Consistent brand experience across all deliverables</li>
          <li>Fast turnaround without sacrificing quality</li>
        </ul>
      </div>
      <div class="persona-card">
        <div class="persona-overline">Secondary Persona</div>
        <div class="persona-name">Daniel &amp; Sofia Reyes</div>
        <div class="persona-role">Wedding Clients · Creative Professionals, 29 &amp; 31</div>
        <div class="persona-quote">"We're obsessed with aesthetics — we chose our florist based on their Instagram grid alone. The studio we hire needs to match how we see ourselves."</div>
        <ul class="persona-needs">
          <li>Portfolio that demonstrates consistent visual style and mood</li>
          <li>Emotional connection through brand storytelling</li>
          <li>Seamless online booking and gallery delivery experience</li>
          <li>Brand that looks good when shared on social media</li>
        </ul>
      </div>
    </div>

    <!-- Visual Direction -->
    <div style="margin-bottom:2rem;">
      <div style="font-family:'Cinzel',serif; font-size:0.55rem; letter-spacing:0.45em; color:var(--gold); text-transform:uppercase; margin-bottom:3rem; padding-top:6rem; border-top:1px solid rgba(201,169,110,0.1);">Visual Direction</div>
    </div>
    <div class="visual-dir">
      <div class="vd-main">
        <div class="vd-title">The Concept: Aperture as Identity</div>
        <div class="vd-paragraph">The aperture — the iris of the camera lens — became the conceptual anchor of the entire identity. It is at once the most fundamental tool of photography and a deeply symbolic form: a circle that opens to let in light, to reveal what is otherwise hidden, to make the invisible visible.</div>
        <div class="vd-paragraph">The eight-bladed aperture mark references the f-stop mechanism found in high-end prime lenses. Each blade is weighted with the brand's champagne gold, creating a sense of precision engineering that mirrors Elite Studios' approach to craft. The form is simultaneously technical and elegant — exactly the tension at the heart of the brand.</div>
        <div class="vd-paragraph">Cormorant Garamond was chosen for its roots in classical French typography — a language of refinement, editorial culture, and timelessness. Paired with the geometric clarity of DM Sans, the combination avoids both the stuffiness of pure historic serif work and the coldness of pure modern sans-serif design.</div>
      </div>
      <div class="vd-sidebar">
        <div class="vd-keyword">Mood Words</div>
        <div class="mood-words">
          <div class="mood-word">Refined <span>precision</span></div>
          <div class="mood-word">Editorial <span>authority</span></div>
          <div class="mood-word">Luminous <span>warmth</span></div>
          <div class="mood-word">Timeless <span>presence</span></div>
          <div class="mood-word">Intimate <span>trust</span></div>
        </div>
      </div>
    </div>

    <!-- Outcomes -->
    <div style="padding-top:6rem; border-top:1px solid rgba(201,169,110,0.1); margin-top:6rem;">
      <div style="font-family:'Cinzel',serif; font-size:0.55rem; letter-spacing:0.45em; color:var(--gold); text-transform:uppercase; margin-bottom:3rem;">Outcomes &amp; Impact</div>
    </div>
    <div class="outcomes">
      <div class="outcome-cell">
        <div class="outcome-num">312%</div>
        <div class="outcome-label">Increase in Booking Inquiries</div>
        <div class="outcome-text">Within 8 weeks of brand launch, monthly inquiry volume tripled. Client-reported reason: "The website finally looks like what I've been looking for."</div>
      </div>
      <div class="outcome-cell">
        <div class="outcome-num">4.9★</div>
        <div class="outcome-label">Brand Perception Score</div>
        <div class="outcome-text">Post-launch client survey scored brand experience 4.9/5.0 across trust, professionalism, and visual appeal — up from 3.2/5.0 prior to rebrand.</div>
      </div>
      <div class="outcome-cell">
        <div class="outcome-num">18+</div>
        <div class="outcome-label">Touchpoints Delivered</div>
        <div class="outcome-text">Logo suite, colour system, typography scale, icon library, business cards, letterhead, email signature, social profiles, gallery watermark, and booking portal UI.</div>
      </div>
    </div>

    </div><!-- /padding wrapper -->
  </div>
</div>

<!-- ══════════════════════════════════════════
     FOOTER
══════════════════════════════════════════ -->
<div class="site-footer">
  <div class="footer-brand">ELITE STUDIOS™</div>
  <div class="footer-note">Brand Identity System · Designed with precision · 2025</div>
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
          title="Elite Studios Brand Kit"
        />
      </div>
    </div>
  );
}
