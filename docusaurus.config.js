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
  staticDirectories: ['public', 'static'],
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
          // Please change this to your repo.
          editUrl: "https://github.com/arcosx/site/edit/master/",
          routeBasePath: "wiki",
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
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
            position: "left",
            label: "Wiki",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/arcosx/site",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/_arcosx",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/wangguobin/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/arcosx",
              },
              {
                label: "Stackoverflow",
                href: "https://stackoverflow.com/users/6897372/arcosx",
              },
            ],
          },
          {
            title: "Sites",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} arcosx. Built with Docusaurus. Hosted by Vercel.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
