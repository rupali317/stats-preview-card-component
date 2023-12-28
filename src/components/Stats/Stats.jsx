import React from "react";
import * as StatsStyles from "../../styles/Stats.style";
import { StatsData } from "./StatsData";

const data = StatsData.map(([index, number, unit]) => (
  <StatsStyles.UnorderedList key={index}>
    <StatsStyles.StatsNumber>{number}</StatsStyles.StatsNumber>
    <StatsStyles.StatsUnit>{unit}</StatsStyles.StatsUnit>
  </StatsStyles.UnorderedList>
));

export const Stats = () => <StatsStyles.Article>{data}</StatsStyles.Article>;
