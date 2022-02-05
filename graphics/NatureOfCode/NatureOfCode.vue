<template>
    <canvas id="nature-of-code">No Canvas Support</canvas>
</template>

<script setup>
/** @typedef {import('types/motion').Mover} iMover */

import {mouseProps} from 'graphics/locals';
import {vec2} from 'graphics/vectors';
import {onMounted} from 'vue';
import {Particle} from './Particle';

// let mouseIsPressed = false;

const width = 500;
const height = 500;

onMounted(() => {
    const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('nature-of-code'));
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    canvas.style.backgroundColor = 'black';
    const ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext('2d'));

    const vehicle = Particle(ctx, 100, 100);
    let target;
    const mouse = mouseProps();
    canvas.addEventListener('mousemove', event => {
        mouse.x = event.clientX - canvas.getBoundingClientRect().left;
        mouse.y = event.clientY - canvas.getBoundingClientRect().top;
    });
    document.addEventListener('mousedown', () => {
        mouse.isPressed = true;
    });
    document.addEventListener('mouseup', () => {
        mouse.isPressed = false;
    });

    const loop = () => {
        // ctx.clearRect(0, 0, innerWidth, innerHeight);
        ctx.fillStyle = 'rgba(0, 0, 0)';
        ctx.fillRect(0, 0, width, height);
        ctx.beginPath();
        ctx.fillStyle = 'red';
        target = vec2(mouse.x, mouse.y);
        ctx.arc(target.x, target.y, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        vehicle.seek(target);
        vehicle.update();
        vehicle.show();

        requestAnimationFrame(loop);
    };
    loop();
});
</script>
