import styled from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const Picture = styled.picture`
  border-radius: var(--border-radius-soft) var(--border-radius-soft)
    var(--border-radius-none) var(--border-radius-none);
  background-color: var(--accent-color);

  @media (min-width: ${DesktopWidth}) {
    border-radius: var(--border-radius-none) var(--border-radius-soft)
      var(--border-radius-soft) var(--border-radius-none);
  }
`;

export const Image = styled.img`
  max-height: 15rem; /* 240px */
  mix-blend-mode: multiply;
  opacity: 0.7511;
  border-radius: var(--border-radius-soft) var(--border-radius-soft)
    var(--border-radius-none) var(--border-radius-none);

  @media (min-width: ${DesktopWidth}) {
    border-radius: var(--border-radius-none) var(--border-radius-soft)
      var(--border-radius-soft) var(--border-radius-none);
    min-width: 33.75rem; /* 540px */
    min-height: 27.875rem; /* 446px */
  }
`;
