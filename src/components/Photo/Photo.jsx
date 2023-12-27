import React from 'react';

export const Photo = () => (
    <picture>
        <source srcSet="../../images/image-header-desktop.jpg" media="(min-width:48rem)" width="654" height="480"></source>
        <img src="../../images/image-header-mobile.jpg" alt="Three women are meeting to code" width="540" height="446" />
    </picture>
);