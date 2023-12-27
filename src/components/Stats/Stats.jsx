import React from "react";
import { StatsData } from "./StatsData";

const data = StatsData.map(([index, number, unit]) => (
  <ul key={index}>
    <li>{number}</li>
    <li>{unit}</li>
  </ul>
));

export const Stats = () => <article>{data}</article>
