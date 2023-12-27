import React from "react";
import { Photo } from "../Photo";
import { Stats } from "../Stats";
import { Text } from "../Text";

export const Card = () => (
  <section>
    <Photo />
    <div className="text-content">
      <Text />
      <Stats />
    </div>
  </section>
);
