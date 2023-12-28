import React from "react";
import * as StatsStyles from "../../styles/Stats.style";
import { StatsData } from "./StatsData";

const data = StatsData.map(([index, number, unit]) => (
  <StatsStyles.UnorderedList key={index}>
    <li>
      <StatsStyles.StatsNumber>{number}</StatsStyles.StatsNumber>
    </li>
    <li>
      <StatsStyles.StatsUnit>{unit}</StatsStyles.StatsUnit>
    </li>
  </StatsStyles.UnorderedList>
));

export const Stats = () => <StatsStyles.Article>{data}</StatsStyles.Article>;
