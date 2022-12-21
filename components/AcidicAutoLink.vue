<script setup>
import { toRefs } from "vue";
import AutoLink from "@vuepress/theme-default/lib/client/components/AutoLink.vue";
import AcidicIcon from "./AcidicIcon.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const { item } = toRefs(props);
console.log(item.value);
</script>

<template>
  <AutoLink v-bind="$attrs" :item="item">
    <template #before>
      <AcidicIcon :icon="item.text"></AcidicIcon>
    </template>
  </AutoLink>
</template>
