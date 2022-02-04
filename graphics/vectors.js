/** @typedef {import('types/vectors').vec2} vec2d */

/**
 *
 * @param {vec2d} v1
 * @param {vec2d} v2
 * @returns {vec2d}
 */
const add = (v1, v2) => {
    v1.x += v2.x;
    v1.y += v2.y;
    return v1;
};

/** @param {vec2d} v */
const magSqVector = v => {
    return v.x * v.x + v.y * v.y;
};

/** @param {vec2d} v */
const getMagnitude = v => {
    return Math.sqrt(magSqVector(v));
};

/**
 * @param {vec2d} v
 * @param {number} n
 */
const setMagnitude = (v, n) => v.normalize().mult(n);

/**
 * @param {vec2d} v
 * @param {number} n
 * @returns {vec2d}
 */
const multiplyVector = (v, n) => {
    v.x *= n;
    v.y *= n;
    return v;
};

/** @param {vec2d} v */
const normalizeVector = v => {
    const l = v.mag();
    if (l !== 0) v.mult(1 / l);
    return v;
};

/** @param {vec2d} v */
const copy = v => vec2(v.x, v.y);

const vec = {
    /**
     * @param {vec2d} v1
     * @param {vec2d} v2
     * @returns {vec2d}
     */
    add: (v1, v2) => add(v1.copy(), v2),
    /**
     * @param {vec2d} vector
     * @param {number} mass
     * @returns {vec2d}
     */
    div: (vector, mass) => {
        let x = vector.x / mass;
        let y = vector.y / mass;
        return vec2(x, y);
    },
    /**
     * @param {vec2d} vector
     * @param {number} num
     * @returns {vec2d}
     */
    mult: (vector, num) => {
        let x = vector.x * num;
        let y = vector.y * num;
        return vec2(x, y);
    },
};

/**
 * 2D vector
 * @param {number} x
 * @param {number} y
 * @returns {vec2d}
 */
const vec2 = (x = 0, y = 0) => {
    const self = {
        get x() {
            return x;
        },
        set x(val) {
            x = val;
        },
        get y() {
            return y;
        },
        set y(val) {
            y = val;
        },
        /**
         * @param {vec2d} v
         * @return {vec2d}
         */
        add: v => add(self, v),
        /**
         * @param {number} x_
         * @param {number} y_
         */
        set: (x_, y_) => {
            x = x_;
            y = y_;
        },
        normalize: () => normalizeVector(self),
        /**
         * @param {vec2d} v
         * @returns {vec2d}
         */
        copy: () => copy(self),
        mag: () => getMagnitude(self),
        /** @param {number} n */
        mult: n => multiplyVector(self, n),
        /** @param {number} n */
        setMag: n => setMagnitude(self, n),
    };
    return self;
};

export {vec, vec2};
