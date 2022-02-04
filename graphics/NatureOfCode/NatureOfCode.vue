<template>
    <canvas id="nature-of-code">No Canvas Support</canvas>
</template>

<script setup>
/** @typedef {import('types/motion').Motion} Mover */

import {vec, vec2} from 'graphics/vectors';
import {onMounted} from 'vue';
import {Mover} from './Mover';

let mouseIsPressed = false;

const width = 400;
const height = 400;

onMounted(() => {
    const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('nature-of-code'));
    const ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext('2d'));
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    canvas.style.backgroundColor = 'black';

    document.addEventListener('mousedown', () => {
        mouseIsPressed = true;
    });
    document.addEventListener('mouseup', () => {
        mouseIsPressed = false;
    });

    /** @type {Array<Mover>} */
    const movers = [];
    for (let i = 0; i < 10; i++) {
        movers.push(Mover(ctx, Math.floor(Math.random() * width), 100, Math.floor(Math.random() * 5 + 1)));
    }

    const loop = () => {
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        if (mouseIsPressed) {
            let wind = vec2(0.1, 0);
            movers.forEach(mover => {
                mover.applyForce(wind);
            });
        }
        let gravity = vec2(0, 0.2);
        movers.forEach(mover => {
            let weight = vec.mult(gravity, mover.mass);
            mover.applyForce(weight);
            mover.friction();
            mover.update();
            mover.edges();
            mover.show();
        });

        requestAnimationFrame(loop);
    };
    loop();
});
</script>
