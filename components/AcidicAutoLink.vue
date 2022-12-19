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
</script>

<template>
  <AcidicIcon v-if="item.icon" :icon="item.icon" class="mr-2"></AcidicIcon>
  <AutoLink :item="item"></AutoLink>
</template>
