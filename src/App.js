import React from "react";
import * as GlobalStyles from "./styles/Global.style";
import { Card } from "./components/Card";

export const App = () => (
  <>
    <GlobalStyles.BaseStyles />
    <GlobalStyles.ResetStyles />
    <GlobalStyles.DefaultStyles />
    <Card />
  </>
);
