<script setup lang="ts">
import { ref } from 'vue';
import Alert from './Alert.vue';
import Button from './Button.vue';

const alertVisible = ref(false);
</script>

<template>
  <div>
    <Alert v-if="alertVisible" @close="alertVisible = false">Hello World Alert</Alert>

    <Button color="primary" @click="alertVisible = true">Hello World</Button>
  </div>
</template>
