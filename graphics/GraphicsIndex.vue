<template>
    <MainSketch />
</template>

<script setup>
import MainSketch from './Main/MainSketch.vue';

import.meta.hot?.on('vite:beforeUpdate', () => import.meta.hot?.invalidate());
</script>
