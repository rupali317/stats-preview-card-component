import React from "react";
import {
  Article,
  StatsNumber,
  StatsUnit,
  UnorderedList,
} from "../../styles/Stats.style";
import { StatsData } from "./StatsData";

const data = StatsData.map(([index, number, unit]) => (
  <UnorderedList key={index}>
    <StatsNumber>{number}</StatsNumber>
    <StatsUnit>{unit}</StatsUnit>
  </UnorderedList>
));

export const Stats = () => <Article>{data}</Article>;
