import styled from "styled-components";

export const Picture = styled.picture`
  border-radius: var(--border-radius-soft) var(--border-radius-soft)
    var(--border-radius-none) var(--border-radius-none);
  background-color: var(--accent-color);

  @media (min-width: 80rem) {
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

  @media (min-width: 80rem) {
    border-radius: var(--border-radius-none) var(--border-radius-soft)
      var(--border-radius-soft) var(--border-radius-none);
    max-width: 33.75rem; /* 540px */
    max-height: 27.875rem; /* 446px */
  }
`;
