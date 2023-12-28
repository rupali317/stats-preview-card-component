import styled from "styled-components";

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  align-items: center;
  text-align: center;

  @media (min-width: 80rem) {
    flex-direction: row;
    gap: 3.75rem; /* 60px */
    text-align: left;
  }
`;

export const StatsNumber = styled.h4`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-base);
`;

export const StatsUnit = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-m);
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;
  color: var(--neutral-white-opacity-2);
`;
