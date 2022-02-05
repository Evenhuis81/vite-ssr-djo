import {Motion} from 'graphics/motion';
import {vec, vec2} from 'graphics/vectors';

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 */
export const Particle = (ctx, x, y) => {
    const {pos, acc, update} = Motion();
    pos.set(x, y);
    // vel.random2D().mult(Math.random() * 4 + 2);
    const prev = vec2(x, y);

    /** @param {import('types/vectors').vec2} target */
    const attracted = target => {
        const force = vec.sub(target, pos);
        // let dsquared = force.magSq();
        let d = force.mag();
        d = Math.max(5, Math.min(25, d));
        let G = 5;
        let strength = G / (d * d);
        force.setMag(strength);
        // force.mult(-1);
        acc.add(force);
    };

    const show = () => {
        // acc.set(0.01, 0.01);
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.rect(pos.x - 2, pos.y - 2, 4, 4);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(prev.x, prev.y);
        ctx.stroke();

        prev.set(pos.x, pos.y);
    };
    return {show, attracted, update, pos};
};
