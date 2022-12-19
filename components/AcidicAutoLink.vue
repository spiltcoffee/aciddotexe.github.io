<script setup>
import { toRefs } from "vue";
import AutoLink from "@vuepress/theme-default/lib/client/components/AutoLink.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const { item } = toRefs(props);
</script>

<template>
  <AutoLink :item="item">
    <template #before v-if="item.icon"
      ><i :class="item.icon" aria-hidden="true"></i
    ></template>
  </AutoLink>
</template>
