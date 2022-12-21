import { defineClientConfig } from "@vuepress/client";
import { provide, onMounted } from "vue";
import "./style.css";
import { icons } from "./fontawesome.config";

const BG_EMOTE_CLASS = [
  "bg-emote--ahhh",
  "bg-emote--heart",
  "bg-emote--hi",
  "bg-emote--lurk",
  "bg-emote--stab"
];

export default defineClientConfig({
  setup() {
    provide("icons", icons);

    onMounted(() => {
      const bgEmoteClass = BG_EMOTE_CLASS.at(
        Math.floor(Math.random() * BG_EMOTE_CLASS.length)
      );
      document.body.classList.add("bg-emote", bgEmoteClass);
      document.documentElement.classList.add("bg-emote", bgEmoteClass);
    });
  }
});
