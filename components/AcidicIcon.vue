<script setup>
import { computed, toRefs, ref, onMounted } from "vue";
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

const ready = ref(false);

if (!__VUEPRESS_SSR__) {
  onMounted(() => {
    ready.value = true;
  });
}
</script>

<template>
  <span :class="{'hidden': !ready}" v-html="html"></span>
</template>
