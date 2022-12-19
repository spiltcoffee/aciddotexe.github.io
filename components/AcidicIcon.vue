<script setup>
import { computed, toRefs } from "vue";
import {
  icon as buildIcon,
  findIconDefinition,
  parse
} from "@fortawesome/fontawesome-svg-core";

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
});

const { icon } = toRefs(props);
const html = computed(
  () => buildIcon(findIconDefinition(parse.icon(icon.value))).html
);
</script>

<template>
  <span v-html="html"></span>
</template>
