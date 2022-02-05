<template>
    <!-- <AttractionRepulsion55 /> -->
    <NatureOfCode />
</template>

<script setup>
import NatureOfCode from './NatureOfCode/NatureOfCode.vue';

// import AttractionRepulsion55 from './CodingChallenges/AttractionRepulsion55.vue';

import.meta.hot?.on('vite:beforeUpdate', () => import.meta.hot?.invalidate());
</script>
