import React from "react";
import { Small, Link } from "../../styles/Footer.style";

export const Footer = () => (
  <Small>
    Challenge by{" "}
    <Link
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noreferrer"
    >
      Frontend Mentor.
    </Link>{" "}
    Coded by{" "}
    <Link
      href="https://www.linkedin.com/in/rupali-rc/"
      target="_blank"
      rel="noreferrer"
    >
      Rupali Roy Choudhury
    </Link>
  </Small>
);
