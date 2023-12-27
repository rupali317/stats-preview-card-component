import React from "react";
import { createGlobalStyle } from "styled-components";
import { Card } from "./components/Card";

const BaseStyles = createGlobalStyle`
  :root {
      /* Device width */
      --desktop-width-layout: 90rem; /* 1440px */
      --tablet-width-layout: 48rem; /* 768px */
      --mobile-width-layout: 23.4375rem; /* 375px; */

      /* Colors */
      --main-background-color: hsl(233, 47%, 7%);
      --card-background-color: hsl(244, 38%, 16%);
      --accent-color: hsl(277, 64%, 61%);
      --neutral-white: hsl(0, 0%, 100%);
      --neutral-white-opacity-1: hsla(0, 0%, 100%, 0.75);
      --neutral-white-opacity-2: hsla(0, 0%, 100%, 0.6);

      /* Typography */
      --font-size-s: 0.75rem; /* 12px */
      --font-size-base: 0.9375rem; /* 15px */
      --font-size-m: 1.5rem; /* 24px */
      --font-size-l: 1.75rem; /* 28px */
      --font-size-xl: 2.25rem; /* 36px; */
      --font-weight-bold: 700;
      --font-weight-regular: 400;
      --line-height-base: normal;
      --line-height-m: 1.5625rem; /* 25px */
      --line-height-l: 2rem; /* 32px */
      --line-height-xl: 2.75rem; /* 44px; */

      /* Spacing */
      --space-none: 0rem;
      --space-xs: 1rem; /* 16px */
      --space-s: 1.5rem; /* 24px */ 
      --space-base: 2rem; /* 32px */
      --space-m: 2.5rem;/* 40px */
      --space-l: 3.6875rem; /* 59px */
      --space-xl: 4.5rem; /* 72px */
      --space-xxl: 5.9375rem; /* 95px */

      /* Borders */
      --border-radius-none: 0rem;
      --border-radius-soft: 0.5rem; /* 8px */

      /* Box shadows */
      --card-box-shadow: 0rem 1.25rem 1.25rem -0.625rem rgba(23, 25, 41, 0.20);

  }
  
  @font-face {
    font-family: "Lexend Deca";
    src: url("../public/fonts/LexendDeca/static/LexendDeca-Regular.ttf") format("truetype")
    font-style normal;
    font-weight: var(--font-weight-normal);
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: url("../public/fonts/Inter/static/Inter-Regular.ttf") format("truetype")
    font-style normal;
    font-weight: var(--font-weight-normal);
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: url("../public/fonts/Inter/static/Inter-Bold.ttf") format("truetype")
    font-style normal;
    font-weight: var(--font-weight-bold);
    font-display: swap;
  }
`;

const ResetStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default spaces */
  * {
    margin: 0;
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-start: 0;
    margin-inline-end: 0 ;
    padding-block-end: 0;
    padding-block-start: 0;
    padding-inline-start: 0; /* Esp for ul */
    padding-inline-end: 0 ;
  }

/* Avoid text overflows */
 body,
 h3,
 p {
    overflow-wrap: break-word;
  }

  /* Prevent font size inflation */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* Set shorter line heights on headings and interactive elements, Balance text wrapping on headings
  */
  h3 {
    line-height: 1.1;
    text-wrap: balance;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  
  ul {
    list-style-type: none;
  }

  /* Make images easier to work with */
  img, picture {
    max-width: 100%;
    display: block;
  }
`;

const DefaultStyles = createGlobalStyle`
  body {
    background-color: var(--main-background-color);
    color: var(--neutral-white);
    font-family: "Inter", sans-serif;
    font-size: var(--font-size-base);
    line-height: var(--line-height-m);
    font-weight: var(--font-weight-regular);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    align-items: center;
    justify-content: center;
  }

  main {
    background-color: var(--card-background-color);
    max-width: 20.4375rem; /* 327px */
    min-height: 48.75rem; /* 780px */
  }
`;

export const App = () => (
  <>
    <BaseStyles />
    <ResetStyles />
    <DefaultStyles />
    <Card />
  </>
);
