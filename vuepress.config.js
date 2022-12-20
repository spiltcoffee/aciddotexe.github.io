import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const domain = "aciddotexe.com";
const url = `https://${domain}`;
const title = "aciddotEXE";
const description = "Your friendly loud neighbourhood lady";
const logo = "/emotes/stab.png";

export default defineUserConfig({
  lang: "en-US",
  title,
  description,

  theme: defaultTheme({
    logo,
    contributors: false,
    navbar: [
      {
        icon: "fa-brands fa-twitch",
        text: "Twitch",
        link: "https://www.twitch.tv/aciddotexe"
      },
      {
        icon: "fa-brands fa-mastodon",
        text: "Mastodon",
        link: "https://mastodon.au/@aciddotEXE",
        rel: "me noopener noreferrer"
      },
      {
        icon: "fa-brands fa-twitter",
        text: "Twitter",
        link: "https://twitter.com/aciddotexe"
      }
    ]
  }),

  alias: {
    "@theme/AutoLink.vue": path.join(__dirname, "components/AcidicAutoLink.vue")
  },

  plugins: [
    registerComponentsPlugin({
      components: {
        Icon: path.resolve(__dirname, "./components/AcidicIcon.vue")
      }
    })
  ],

  head: [
    ["link", { rel: "icon", href: "/emotes/stab.png" }],

    ["meta", { property: "og:url", content: url }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: title }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { property: "og:image", content: `${url}${logo}` }],

    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:domain", content: domain }],
    ["meta", { property: "twitter:url", content: url }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:description", content: description }],
    ["meta", { name: "twitter:image", content: `${url}${logo}` }]
  ],

  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer]
        }
      }
    }
  }),

  public: path.join(__dirname, "public"),
  dest: path.join(__dirname, "target/dist"),
  temp: path.join(__dirname, "target/temp"),
  cache: path.join(__dirname, "target/cache")
});
