<script setup lang="ts">
withDefaults(defineProps<{ color?: 'primary' | 'secondary' | 'danger' }>(), {
  color: 'primary',
});
defineEmits<{ click: [] }>();
</script>

<template>
  <button type="button" :class="`btn btn-${color}`" @click="$emit('click')">
    <slot />
  </button>
</template>
