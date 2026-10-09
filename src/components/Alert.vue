<script setup lang="ts">
defineEmits<{ close: [] }>();
</script>

<template>
  <div class="alert alert-primary alert-dismissible" role="alert">
    <slot />
    <button type="button" class="btn-close" aria-label="Close" @click="$emit('close')"></button>
  </div>
</template>
