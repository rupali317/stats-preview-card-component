import React from "react";
import { createGlobalStyle } from "styled-components";
import { Card } from "./components/Card";

const GlobalStyles = createGlobalStyle`
  /* Device width */
  --desktop-width-layout: 90rem; /* 1440px */
  --tablet-width-layout: 48rem /* 768px */
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
  --font-size-m: 1.5rem /* 24px */
  --font-size-l: 1.75rem /* 28px */
  --font-size-xl: 2.25rem /* 36px; */
  --font-weight-bold: 700;
  --font-weight-normal: 400;
  --line-height-base: normal;
  --line-height-m: 1.5625rem /* 25px */
  --line-height-l: 2rem /* 32px */
  --line-height-xl: 2.75rem /* 44px; */

  /* Spacing */
  --space-none: 0rem;
  --space-xs: 1rem; /* 16px */
  --space-s: 1.5rem; /* 24px */ 
  --space-base: 2rem; /* 32px */
  --space-m: 2.5rem /* 40px */
  --space-l: 3.6875rem /* 59px */
  --space-xl: 4.5rem /* 72px */
  --space-xxl: 5.9375rem /* 95px */

  /* Borders */
  --border-radius-none: 0rem;
  --border-radius-soft: 0.5rem; /* 8px */

  /* Box shadows */
  --card-box-shadow: 0rem 1.25rem 1.25rem -0.625rem rgba(23, 25, 41, 0.20);
`;

export const App = () => (
  <>
    <GlobalStyles />
    <Card />
  </>
);
