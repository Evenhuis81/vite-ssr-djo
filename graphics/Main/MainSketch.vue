<template>
    <canvas id="main">Your browser does not support the HTML5 canvas tag.</canvas>
</template>

<script setup>
import {onMounted} from 'vue';

onMounted(async () => {
    // initialise canvas element, create a 2d context object, adds inputs
    (await import('.')).init('main');

    // setup functions
    const setupScript = (await import('./setup')).default;

    // setup executable
    const {setupCanvas} = await import('.');

    // execute the setup functions and set defaults if needed
    setupCanvas(setupScript);

    // draw functions
    const drawScript = (await import('./draw')).default;

    // game loop executable (update and render)
    const {drawContext} = await import('.');

    // execute the game loop with the draw functions
    drawContext(drawScript);
});
</script>
