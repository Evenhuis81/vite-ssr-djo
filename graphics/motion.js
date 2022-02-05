/** @typedef {import('types/motion').Motion} Motions */

import {vec, vec2} from 'graphics/vectors';

/**
 * @returns {Motions}
 */
export const Motion = () => {
    const pos = vec2();
    const vel = vec2();
    const acc = vec2();
    let maxSpeed = 4;
    let mass = 1;
    const mu = 0.1;
    const dragC = 0.2;

    /** @param {import('types/vectors').vec2} target */
    const seek = target => {
        let desired = vec.sub(target, pos);
        if (desired.mag() < 10) {
            vel.mult(0);
            return;
        }
        desired.setMag(maxSpeed);
        let steering = vec.sub(desired, vel);
        applyForce(steering);
    };

    /** @param {import('types/motion').Mover} mover */
    const attract = mover => {
        let force = vec.sub(pos, mover.pos);
        let distanceSq = Math.max(100, Math.min(1000, force.magSq()));

        let G = 5;

        let strength = ((mass * mover.mass) / distanceSq) * G;
        force.setMag(strength);
        mover.applyForce(force);
    };
    const drag = () => {
        let drag = vel.copy();
        drag.norm();
        drag.mult(-1);

        let speedSq = vel.magSq();
        drag.setMag(dragC * speedSq);

        applyForce(drag);
    };

    const friction = () => {
        // diff = when in contact => let diff = height - (pos.y + r) => if (diff < 1)
        let friction = vel.copy();
        friction.norm();
        friction.mult(-1);
        let normal = mass;
        friction.setMag(mu * normal);
        applyForce(friction);
    };
    /** @param {import('types/vectors').vec2} force */
    const applyForce = force => {
        let f = vec.div(force, mass);
        acc.add(f);
    };
    const update = () => {
        vel.add(acc);
        vel.limit(maxSpeed);
        pos.add(vel);
        acc.set(0, 0);
    };
    return Object.freeze({update, applyForce, friction, drag, attract, mass, pos, vel, acc, seek});
};
