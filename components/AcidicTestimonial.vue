<script setup>
import AutoLink from "@vuepress/theme-default/lib/client/components/AutoLink.vue";
import { ref, toRefs, onMounted } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  }
});

const { name, avatar, link } = toRefs(props);

const ready = ref(false);
/* global __VUEPRESS_SSR__ */
if (!__VUEPRESS_SSR__) {
  onMounted(() => {
    ready.value = true;
  });
}
</script>

<template>
  <div v-if="ready" class="testimonial">
    <div class="quote">
      <slot></slot>
    </div>
    <div class="signature">
      <img :src="avatar" class="avatar" />
      <span class="user">{{ name }}</span>
    </div>
  </div>
</template>

<style scoped>
.testimonial {
  @apply px-4 pt-2 m-2 bg-slate-200 rounded-md;
}
.dark .testimonial {
  @apply bg-slate-700;
}
.quote {
  @apply m-2 p-4 italic bg-slate-300 rounded-md whitespace-pre-line;
}
.dark .quote {
  @apply bg-slate-800;
}

.signature {
  @apply m-2 pt-2 pb-3 flex items-center justify-end space-x-3;
}
.avatar {
  @apply w-12 h-12 rounded-full;
}

.user {
  @apply font-bold;
}
</style>
