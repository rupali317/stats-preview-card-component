import React from "react";
import styled from "styled-components";

const Picture = styled.picture`
  border-radius: var(--border-radius-soft) var(--border-radius-soft)
    var(--border-radius-none) var(--border-radius-none);
  background-color: var(--accent-color);

  @media (min-width: 80rem) {
    border-radius: var(--border-radius-none) var(--border-radius-soft)
      var(--border-radius-soft) var(--border-radius-none);
  }
`;

const Image = styled.img`
  max-height: 15rem;
  mix-blend-mode: multiply;
  opacity: 0.7511;
  border-radius: var(--border-radius-soft) var(--border-radius-soft)
    var(--border-radius-none) var(--border-radius-none);

  @media (min-width: 80rem) {
    border-radius: var(--border-radius-none) var(--border-radius-soft)
      var(--border-radius-soft) var(--border-radius-none);
    max-width: 33.75rem;  /* 540px */
    max-height: 27.875rem;  /* 446px */
  }
`;

export const Photo = () => (
  <Picture>
    <source
      srcSet="../../images/image-header-desktop.jpg"
      media="(min-width:80rem)"
      width="654"
      height="480"
    ></source>
    <Image
      src="../../images/image-header-mobile.jpg"
      alt="Three women are meeting to code"
      width="540"
      height="446"
    />
  </Picture>
);
