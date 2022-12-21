<script setup>
import { toRefs } from "vue";
import AcidicAutoLink from "./AcidicAutoLink.vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const { text, link } = toRefs(props);
</script>

<template>
  <AcidicAutoLink class="button my-2" :item="{ text, link }" />
</template>

<style scoped>
.button {
  @apply inline-block
    p-2
    mx-2
    text-lg
    text-center
    border-solid
    border-2
    rounded-lg
    no-underline;

  @apply border-slate-300
    bg-slate-100
    hover:bg-slate-200;
}

.dark .button {
  @apply border-slate-700
  bg-slate-900
  hover:bg-slate-800;
}
</style>
