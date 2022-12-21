<script setup>
import { computed, toRefs, ref, onMounted, inject } from "vue";
import { icon as buildIcon } from "@fortawesome/fontawesome-svg-core";

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
});

const { icon } = toRefs(props);
const icons = inject("icons");

const iconObj = computed(() => icons[icon.value.toLowerCase()]);
const html = computed(() =>
  iconObj.value ? buildIcon(iconObj.value).html : undefined
);

const ready = ref(false);
/* global __VUEPRESS_SSR__ */
if (!__VUEPRESS_SSR__) {
  onMounted(() => {
    ready.value = true;
  });
}
</script>

<template>
  <span v-if="html" :class="{ hidden: !ready }" v-html="html"></span>
</template>
