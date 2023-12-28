import React from "react";
import styled from "styled-components";
import { StatsData } from "./StatsData";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  align-items: center;

  @media (min-width:80rem) {
    flex-direction: row;
    gap: 3.75rem;
  }
`;

const StatsNumber = styled.li`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-base);
`;

/* RRC: Lexend Deca and Inter are not loading */
const StatsUnit = styled.li`
  font-family: "Lexend Deca",sans-serif;
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-m);
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;
  color: var(--neutral-white-opacity-2);
`;

const UnorderedList = styled.ul`
  text-align: center;

  @media (min-width:80rem) {
    text-align: left;
  }
`;

const data = StatsData.map(([index, number, unit]) => (
  <UnorderedList key={index}>
    <StatsNumber>{number}</StatsNumber>
    <StatsUnit>{unit}</StatsUnit>
  </UnorderedList>
));

export const Stats = () => <Article>{data}</Article>;
