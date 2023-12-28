import React from "react";
import { Picture, Image } from "../../styles/Photo.style";

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
