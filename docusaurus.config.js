// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const math = require("remark-math")
const katex = require("rehype-katex")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jasen's Projects",
  tagline: "Can things just work?",
  url: "https://n.project-spectre.info",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // If you aren't using GitHub pages, you don't need these
  organizationName: "hyperswine",
  projectName: "projects",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
      }),
    ]
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/hyperswine/projects",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Overview",
        items: [
          {
            type: "doc",
            docId: "spectre-system",
            position: "left",
            label: "Project List",
          },
          {
            href: "https://github.com/hyperswine/projects",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: { light: "neutral", dark: "forest" },
        options: {
          maxTextSize: 50,
        },
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "YOUR_APP_ID",
      //   // Public API key: it is safe to commit it
      //   apiKey: "YOUR_SEARCH_API_KEY",
      //   indexName: "YOUR_INDEX_NAME",

      //   contextualSearch: true,
      //   searchParameters: {},
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: "search",
      // },
    }),
}

module.exports = config
