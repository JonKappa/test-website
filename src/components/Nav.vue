<script setup lang="ts">
const props = defineProps<{
  base: string;
  path: string;
}>();

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const isHome = props.path === '/';
</script>

<template>
  <nav class="flex bg-[rgb(53,53,112)] text-white">
    <ul class="flex">
      <li :class="['relative transition duration-250', { 'hover:bg-[rgb(72,72,154)]': !isHome }]">
        <span v-if="isHome" class="absolute inset-0 bg-white [view-transition-name:nav-indicator]"></span>
        <a :href="`${base}/`" class="relative z-1 flex h-full items-center" style="view-transition-name: nav-link-home">
          <img
            class="my-2.5 mr-5 h-16 w-[105px]"
            :src="`${base}/assets/high-${isHome ? 'black' : 'white'}-trans-logo.png`"
            alt="JonKappa"
            height="64"
            width="100"
          />
        </a>
      </li>
      <li
        v-for="link in links"
        :key="link.to"
        :class="['relative transition duration-250', path === link.to ? 'text-black' : 'hover:bg-[rgb(72,72,154)]']"
      >
        <span v-if="path === link.to" class="absolute inset-0 bg-white [view-transition-name:nav-indicator]"></span>
        <a
          :href="`${base}${link.to}/`"
          class="relative z-1 flex h-full items-center px-8"
          :style="{ viewTransitionName: `nav-link${link.to.replace('/', '-')}` }"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
