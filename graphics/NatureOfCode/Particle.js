import {Motion} from 'graphics/motion';

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @returns
 */
export const Particle = (ctx, x, y) => {
    const {pos, update, seek} = Motion();
    pos.set(x, y);
    const r = 16;
    const show = () => {
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'green';
        ctx.lineWidth = 4;
        ctx.moveTo(pos.x - r, pos.y - r / 2);
        ctx.lineTo(pos.x - r, pos.y + r / 2);
        ctx.lineTo(pos.x + r, pos.y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    };
    return {show, update, seek};
};
