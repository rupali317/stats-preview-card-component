import React from "react";
import styled from "styled-components";

const HgGroup = styled.hgroup`
  display: flex;
  text-align: center;
  gap: var(--space-xs);
  flex-direction: column;
  min-width: 16.5rem;   /* 264px */

  @media (min-width:80rem) {
    text-align: left;
    gap: var(--space-s);
  }
`;

const Heading = styled.h3`
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-l);

  @media (min-width:80rem) {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
`;

const Highlight = styled.strong`
  color: var(--accent-color);
`;

const Paragraph = styled.p`
  color: var(--neutral-white-opacity-1);

  @media (min-width:80rem) {
    max-width: 23.375rem; /* 374px */
  }
`;

export const Text = () => (
  <HgGroup>
    <Heading>
      Get <Highlight>insights</Highlight> that help your business grow.
    </Heading>
    <Paragraph>
      Discover the benefits of data analytics and make better decisions
      regarding revenue, customer experience, and overall efficiency.
    </Paragraph>
  </HgGroup>
);
