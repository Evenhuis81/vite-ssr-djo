/** @typedef {import('types/motion').Motion} Motion */

import {vec, vec2} from 'graphics/vectors';

const width = 400;
const height = 400;
let mu = 0.1;

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} m
 * @returns {Motion}
 */
export const Mover = (ctx, x, y, m) => {
    const pos = vec2(x, y);
    const vel = vec2();
    const acc = vec2();
    const mass = m;
    const r = Math.sqrt(mass) * 10;

    const drag = () => {};

    const friction = () => {
        let diff = height - (pos.y + r);
        if (diff < 1) {
            let friction = vel.copy();
            friction.normalize();
            friction.mult(-1);
            let normal = mass;
            friction.setMag(mu * normal);
            applyForce(friction);
        }
    };
    /** @param {import('types/vectors').vec2} force */
    const applyForce = force => {
        let f = vec.div(force, mass);
        acc.add(f);
    };
    const update = () => {
        vel.add(acc);
        pos.add(vel);
        acc.set(0, 0);
    };
    const show = () => {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    };
    const edges = () => {
        if (pos.y >= height - r) {
            pos.y = height - r;
            vel.y *= -1;
        }

        if (pos.x >= width - r) {
            pos.x = width - r;
            vel.x *= -1;
        } else if (pos.x <= r) {
            pos.x = r;
            vel.x *= -1;
        }
    };
    return Object.freeze({update, show, edges, applyForce, friction, mass, drag});
};
