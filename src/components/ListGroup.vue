<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  items: string[];
  heading: string;
}>();

const emit = defineEmits<{ selectItem: [item: string] }>();

const selectedIndex = ref(-1);

function select(item: string, index: number) {
  selectedIndex.value = index;
  emit('selectItem', item);
}
</script>

<template>
  <h1>{{ heading }}</h1>
  <p v-if="items.length === 0">No Item Found</p>
  <ul class="list-group">
    <li
      v-for="(item, index) in items"
      :key="item"
      :class="['list-group-item', { active: selectedIndex === index }]"
      @click="select(item, index)"
    >
      {{ item }}
    </li>
  </ul>
</template>
