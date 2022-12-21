<script setup>
import AutoLink from "@vuepress/theme-default/lib/client/components/AutoLink.vue";
import { toRefs } from "vue";

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
</script>

<template>
  <div class="testimonial">
    <div class="quote">
      <slot></slot>
    </div>
    <div class="signature">
      <img :src="avatar" class="avatar" />
      <AutoLink v-if="link" class="user" :item="{ text: name, link }" />
      <span v-else class="user">{{ name }}</span>
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
  @apply m-2 p-4 italic bg-slate-300 rounded-md;
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
