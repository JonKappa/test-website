<script setup lang="ts">
defineProps<{ base: string }>();

const year = new Date().getFullYear();
</script>

<template>
  <footer id="footer" class="bg-black pt-[1%] pb-[3%] text-center text-white">
    Created by <a :href="`${base}/`" class="text-[blue] underline">Jonathan Capparell</a> | ©{{ year }} <br />All
    rights reserved.
  </footer>
</template>
