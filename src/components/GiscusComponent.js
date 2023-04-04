import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="hyc3z/hyc3z"
      repoId="MDEwOlJlcG9zaXRvcnkzMjU3NDc2Mjc="
      category="Announcements"
      categoryId="DIC_kwDOE2qDq84CTH9a"  // E.g. id of "General"
      mapping="title"                        // Important! To map comments to URL
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}