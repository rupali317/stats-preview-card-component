import React from "react";
import { BaseStyles, ResetStyles, DefaultStyles } from "./styles/Global.style";
import { Card } from "./components/Card";

export const App = () => (
  <>
    <BaseStyles />
    <ResetStyles />
    <DefaultStyles />
    <Card />
  </>
);
