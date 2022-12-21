<script setup>
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
  href: {
    type: String,
    required: false
  }
});

const { name, avatar, href } = toRefs(props);
</script>

<template>
  <div>
    <div><slot></slot></div>
    <div>
      <img :src="avatar" />
      <a v-if="href" :href="href">{{ name }}</a>
      <span v-else>{{ name }}</span>
    </div>
  </div>
</template>
