// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');

async function createConfig() {
  const katex = (await import('rehype-katex')).default;
  return {
    title: `Hyc3z's blog`,
    tagline: 'Effortlessness is a myth.',
    url: 'https://hyc3z.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'hyc3z', // Usually your GitHub org/user name.
    projectName: 'hyc3z.github.io', // Usually your repo name.
    staticDirectories: ['static'],
    scripts: [
      '/js/midiplayer.js',
    ],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/docs',
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [math],
            rehypePlugins: [katex],
            sidebarCollapsible: false,
            sidebarCollapsed: false
          },
          blog: {
            showReadingTime: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: `Hyc3z's blog`,
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Notes',
              collapsed: false,
            },
            {
              href: 'https://github.com/hyc3z',
              label: 'Hyc3z',
              position: 'right',
            },
          ],
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
    stylesheets: [
      {
        href: '/katex/katex.min.css',
        type: 'text/css',
        crossorigin: 'anonymous',
      },
    ],
  }
};

module.exports = createConfig;

