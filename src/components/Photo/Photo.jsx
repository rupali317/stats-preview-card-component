import React from "react";
import * as PhotoStyles from "../../styles/Photo.style";

export const Photo = () => (
  <PhotoStyles.Picture>
    <source
      srcSet="../../images/image-header-desktop.jpg"
      media="(min-width:80rem)"
      width="654"
      height="480"
    ></source>
    <PhotoStyles.Image
      src="../../images/image-header-mobile.jpg"
      alt="Three women are meeting to code"
      width="540"
      height="446"
    />
  </PhotoStyles.Picture>
);
