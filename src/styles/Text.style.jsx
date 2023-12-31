import styled from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const DivSection = styled.div`
  display: flex;
  text-align: center;
  gap: var(--space-xs);
  flex-direction: column;
  min-width: 16.5rem; /* 264px */
  padding: var(--space-none);

  @media (min-width: ${DesktopWidth}) {
    text-align: left;
    gap: var(--space-s);
  }
`;

export const Heading = styled.h1`
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-l);

  @media (min-width: ${DesktopWidth}) {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
`;

export const Highlight = styled.strong`
  color: var(--accent-color);
`;

export const Paragraph = styled.p`
  color: var(--neutral-white-opacity-1);

  @media (min-width: ${DesktopWidth}) {
    max-width: 23.375rem; /* 374px */
  }
`;
