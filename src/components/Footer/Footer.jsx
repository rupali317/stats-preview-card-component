import React from "react";
import styled from "styled-components";

const Small = styled.small`
  font-size: var(--font-size-s);
`;

const Link = styled.a`
  color: var(--accent-color);

  &:hover {
    color: var(--neutral-white);
  }
`;

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
