<template>
    <canvas id="example">Your browser does not support the HTML5 canvas tag.</canvas>
</template>

<script setup>
import {onMounted} from 'vue';

onMounted(async () => {
    // initialise canvas element and create a 2d context object
    (await import('.')).init('example');

    // setup functions
    const setupScript = (await import('./setup')).default;

    // setup executable
    const {setupCanvas} = await import('.');

    // execute the setup functions and set defaults if needed
    setupCanvas(setupScript);

    // load assets

    // load inputs for mouse and keyboard
    const keyPressed = (await import('./draw')).keyPressed;
    document.addEventListener('keydown', keyPressed);

    // draw functions
    const drawScript = (await import('./draw')).default;

    // game loop executable (= update and render)
    const {drawContext} = await import('.');

    // execute the game loop with the draw functions
    drawContext(drawScript);
});
</script>
