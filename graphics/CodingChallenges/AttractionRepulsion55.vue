<template>
    <canvas id="attraction-repulsion">No Canvas Support</canvas>
</template>

<script setup>
/** @typedef {import('types/vectors').vec2} vec2d */
import {mouseProps} from 'graphics/locals';
import {vec2} from 'graphics/vectors';
import {onMounted} from 'vue';
import {getCanvas, getContext} from '.';
import {Particle} from './Particle';

const width = 400;
const height = 400;

onMounted(() => {
    const canvas = getCanvas('attraction-repulsion', width, height, 'center');
    const ctx = getContext(canvas, '2d');

    const particles = new Array(50);

    /** @type {Array<vec2d>} */
    const attractors = [];
    for (let i = 0; i < particles.length; i++)
        particles[i] = Particle(ctx, Math.floor(Math.random() * width), Math.floor(Math.random() * height));

    // for (let i = 0; i < attractors.length; i++)
    //     attractors[i] = vec2(Math.floor(Math.random() * width), Math.floor(Math.random() * height));

    const mouse = mouseProps();
    canvas.addEventListener('mousemove', event => {
        mouse.x = event.clientX - canvas.getBoundingClientRect().left;
        mouse.y = event.clientY - canvas.getBoundingClientRect().top;
    });
    document.addEventListener('mousedown', () => {
        mouse.isPressed = true;
        attractors.push(vec2(mouse.x, mouse.y));
    });
    document.addEventListener('mouseup', () => {
        mouse.isPressed = false;
    });

    const loop = () => {
        ctx.clearRect(0, 0, width, height);
        // ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        // ctx.fillRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            for (let j = 0; j < attractors.length; j++) {
                particles[i].attracted(attractors[j]);
            }
            particles[i].update();
            particles[i].show();
        }
        for (let i = 0; i < attractors.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'green';
            ctx.rect(attractors[i].x - 2, attractors[i].y - 2, 5, 5);
            ctx.fill();
        }

        requestAnimationFrame(loop);
    };
    loop();
});
</script>
