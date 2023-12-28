import React from "react";
import * as StatsStyles from "../../styles/Stats.style";
import { StatsData } from "./StatsData";

const data = StatsData.map(([index, number, unit]) => (
  <li key={index}>
    <StatsStyles.StatsNumber>{number}</StatsStyles.StatsNumber>
    <StatsStyles.StatsUnit>{unit}</StatsStyles.StatsUnit>
  </li>
));

export const Stats = () => (
  <StatsStyles.UnorderedList>{data}</StatsStyles.UnorderedList>
);
