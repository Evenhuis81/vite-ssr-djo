<template>
    <Example />
</template>

<script setup>
import Example from './Example/Example.vue';

// full reload on hmr detection (p5 needs reinitialization)
import.meta.hot?.on('vite:beforeUpdate', () => import.meta.hot.invalidate());
</script>
