// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const navbar = require("./config/navbar.config.js")
const analytics = require("./config/analytics.config.js")
const blog = require("./config/blog.config.js")
const docs = require("./config/docs.config.js")

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
        gtag: analytics.gtag,
        docs: docs,
        blog: blog,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: navbar,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
