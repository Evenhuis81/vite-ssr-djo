import {Motion} from 'graphics/motion';

const width = 500;
const height = 500;

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} m
 * @returns {import('types/motion').Mover}
 */
export const Mover = (ctx, x, y, m) => {
    const {pos, vel, applyForce, update, friction, drag, attract} = Motion();
    let {mass} = Motion();
    pos.set(x, y);
    vel.random2D().mult(5);
    mass = m;
    const r = Math.sqrt(mass) * 2;
    let fillC = 'rgba(255, 255, 255, 0.4)';

    const show = () => {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.fillStyle = fillC;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    };
    /**
     *
     * @param {number} r
     * @param {number} g
     * @param {number} b
     */
    const setColor = (r, g, b) => {
        fillC = `rgb(${r}, ${g}, ${b})`;
    };
    const edges = () => {
        if (pos.y >= height - r) {
            pos.y = height - r;
            vel.y *= -1;
            vel.y * 0.95;
        } else if (pos.y < r) {
            pos.y = r;
            vel.y *= -1;
            vel.y * 0.95;
        }

        if (pos.x >= width - r) {
            pos.x = width - r;
            vel.x *= -1;
            vel.x * 0.95;
        } else if (pos.x <= r) {
            pos.x = r;
            vel.x *= -1;
            vel.x * 0.95;
        }
    };
    return Object.freeze({update, show, edges, applyForce, friction, mass, pos, r, drag, attract, setColor});
};
