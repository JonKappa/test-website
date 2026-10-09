<script setup lang="ts">
defineProps<{ base: string }>();

const year = new Date().getFullYear();
</script>

<template>
  <div class="fluid-container" style="width: 100%">
    <div style="background-color: black">
      <footer id="footer" style="color: white; padding-top: 1%; padding-bottom: 3%; text-align: center">
        Created by <a :href="`${base}/`" style="color: blue">Jonathan Capparell</a> | ©{{ year }} <br />All rights
        reserved.
      </footer>
    </div>
  </div>
</template>
