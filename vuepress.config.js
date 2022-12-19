import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineUserConfig({
  lang: "en-US",
  title: "aciddotEXE",
  description: "Merry Christmas!",

  theme: defaultTheme({
    logo: "/logo.png",
    sidebar: false,
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

  head: [["link", { rel: "icon", href: "/logo.png" }]],

  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer]
        }
      }
    }
  }),

  dest: path.join(__dirname, "dist"),
  public: path.join(__dirname, "public"),
  temp: path.join(__dirname, "target/temp"),
  cache: path.join(__dirname, "target/cache")
});
