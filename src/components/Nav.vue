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
  <nav class="nav">
    <ul>
      <li :class="{ active: isHome }">
        <span v-if="isHome" class="nav-indicator"></span>
        <a :href="`${base}/`" class="p-0" style="view-transition-name: nav-link-home">
          <img
            class="site-logo"
            :src="`${base}/assets/high-${isHome ? 'black' : 'white'}-trans-logo.png`"
            alt="JonKappa"
            height="64"
            width="100"
          />
        </a>
      </li>
      <li v-for="link in links" :key="link.to" :class="{ active: path === link.to }">
        <span v-if="path === link.to" class="nav-indicator"></span>
        <a :href="`${base}${link.to}/`" :style="{ viewTransitionName: `nav-link${link.to.replace('/', '-')}` }">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
