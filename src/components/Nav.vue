<script setup lang="ts">
defineProps<{ base: string }>();

// Sections of the home page. Layout.astro marks the link for the section in
// view with aria-current.
const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-gray-200/80 bg-white/85 backdrop-blur">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
      <a :href="`${base}/#home`" class="shrink-0">
        <img :src="`${base}/assets/high-black-trans-logo.png`" alt="JonKappa" class="h-11 w-auto" width="72" height="44" />
      </a>
      <ul class="flex gap-1 text-sm font-medium">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`${base}/#${link.id}`"
            data-spy
            class="block rounded-full px-3 py-2 text-gray-600 transition hover:text-brand aria-[current]:bg-brand aria-[current]:text-white sm:px-4"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
