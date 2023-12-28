import styled from "styled-components";
import { DesktopWidth } from "../Breakpoints";

export const HgGroup = styled.hgroup`
  display: flex;
  text-align: center;
  gap: var(--space-xs);
  flex-direction: column;
  min-width: 16.5rem; /* 264px */

  @media (min-width: ${DesktopWidth}) {
    text-align: left;
    gap: var(--space-s);
  }
`;

export const Heading = styled.h3`
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
