// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Arcosx Galaxy",
  tagline: "Per aspera ad astra.",
  url: "https://arcosx.cn",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/galaxy-favicon.ico",
  organizationName: "arcosx", // Usually your GitHub org/user name.
  projectName: "site", // Usually your repo name.
  staticDirectories: ['static'],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-2CX6NSQ51B',
        },
        docs: {
          path: "wiki",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/arcosx/site/edit/master/",
          routeBasePath: "wiki",
          showLastUpdateTime: true,
        },
        blog: {
          routeBasePath: "/",
          showReadingTime: false,
          editUrl: "https://github.com/arcosx/site/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Arcosx Galaxy",
        logo: {
          alt: "Arcosx Galaxy Logo",
          src: "img/galaxy-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Wiki",
          },
          {
            href: "https://github.com/arcosx/site",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
