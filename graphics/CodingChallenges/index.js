/**
 * @param {string} id
 * @param {number} w
 * @param {number} h
 * @param {string} position
 * @returns {HTMLCanvasElement}
 */
export const getCanvas = (id, w, h, position = '0') => {
    const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(id));
    if (position === 'center') {
        canvas.width = w;
        canvas.height = h;
        canvas.style.position = 'absolute';
        canvas.style.top = '50%';
        canvas.style.left = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';
        canvas.style.backgroundColor = 'rgb(51, 51, 51)';
    }
    return canvas;
};

/**
 * @param {HTMLCanvasElement} canvas
 * @param {string} type
 */
export const getContext = (canvas, type) => /** @type {CanvasRenderingContext2D} */ (canvas.getContext(type));
