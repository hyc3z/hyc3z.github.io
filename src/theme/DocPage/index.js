import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
  PageMetadata,
} from '@docusaurus/theme-common';
import {
  docVersionSearchTag,
  DocsSidebarProvider,
  DocsVersionProvider,
  useDocRouteMetadata,
} from '@docusaurus/theme-common/internal';
import DocPageLayout from '@theme/DocPage/Layout';
import NotFound from '@theme/NotFound';
import SearchMetadata from '@theme/SearchMetadata';
function DocPageMetadata(props) {
  const { versionMetadata } = props;
  return (
    <>
      <SearchMetadata
        version={versionMetadata.version}
        tag={docVersionSearchTag(
          versionMetadata.pluginId,
          versionMetadata.version,
        )}
      />
      <PageMetadata>
        {versionMetadata.noIndex && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </PageMetadata>
    </>
  );
}
export default function DocPage(props) {
  const { versionMetadata } = props;
  const currentDocRouteMetadata = useDocRouteMetadata(props);
  if (!currentDocRouteMetadata) {
    return <NotFound />;
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  const commentElement = useRef(null)
  useEffect(() => {
    let s = document.createElement("script");
    s.src = "https://giscus.app/client.js"
    s.setAttribute("data-repo", "hyc3z/hyc3z")
    s.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkzMjU3NDc2Mjc=")
    s.setAttribute("data-category", "Announcements")
    s.setAttribute("data-category-id", "DIC_kwDOE2qDq84CTH9a")
    s.setAttribute("data-mapping", "title")
    s.setAttribute("data-strict", "0")
    s.setAttribute("data-reactions-enabled", "1")
    s.setAttribute("data-emit-metadata", "0")
    s.setAttribute("data-input-position", "bottom")
    s.setAttribute("data-theme", "preferred_color_scheme")
    s.setAttribute("data-lang", "zh-CN")
    s.setAttribute("crossorigin", "anonymous")
    s.async = true;
    commentElement.current.appendChild(s);
  }, [])
  return (
    <>
      <DocPageMetadata {...props} />
      <HtmlClassNameProvider
        className={clsx(
          // TODO: it should be removed from here
          ThemeClassNames.wrapper.docsPages,
          ThemeClassNames.page.docsDocPage,
          props.versionMetadata.className,
        )}>
        <DocsVersionProvider version={versionMetadata}>
          <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
            <DocPageLayout>
              {docElement}
              <div style={{ marginTop: '20px' }} ref={commentElement}></div>
            </DocPageLayout>
          </DocsSidebarProvider>
        </DocsVersionProvider>
      </HtmlClassNameProvider>
    </>
  );
}
