/** @type {{[key: string]: HTMLCanvasElement}} */
const canvas = {};

/** @type {{[key: string]: CanvasRenderingContext2D}} */
const context = {};

/** @type {{[key: string]: HTMLImageElement}} */
const images = {};

/**
 * @param {string} id
 * @param {{x: number, y: number}} mouse
 */
const init = (id, mouse, renderer = '2d') => {
    canvas[id] = /** @type {HTMLCanvasElement} */ (document.getElementById(id));
    context[id] = /** @type {CanvasRenderingContext2D} */ (canvas[id].getContext(renderer));
    context[id].fillStyle = 'white';
    context[id].strokeStyle = 'black';
    canvas[id].addEventListener('mousemove', event => {
        mouse.x = event.clientX - canvas[id].getBoundingClientRect().left;
        mouse.y = event.clientY - canvas[id].getBoundingClientRect().top;
    });
};

/**
 * @param {string} id
 * @param {function} script
 */
const setup = (id, script) => {
    script();
    if (getComputedStyle(canvas[id]).backgroundColor === 'rgba(0, 0, 0, 0)') background(id, [0, 0, 0, 0.2]);
    if (getComputedStyle(canvas[id]).position === 'static') centerCanvas(id);
};

/**
 * @param {function} script
 */
export const run = script => {
    const loop = () => {
        script();
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
};

/**
 * @param {string} id
 * @param {Array<any>} args
 */
const size = (id, args) => {
    canvas[id].style.position = 'absolute';
    if (args.length > 1) {
        canvas[id].width = args[0];
        canvas[id].height = args[1];
        if (args[2] === 'center') {
            centerCanvas(id);
        }
    }
    // any context gets removed with resize
    context[id].fillStyle = 'white';
    context[id].strokeStyle = 'black';
};

/** @param {string} id */
const fullWindow = id => size(id, [innerWidth, innerHeight]);

/** @param {string} id */
const centerCanvas = id => {
    canvas[id].style.position = 'absolute';
    canvas[id].style.top = '50%';
    canvas[id].style.left = '50%';
    canvas[id].style.transform = 'translate(-50%, -50%)';
};

/** @param {string} id */
const clear = id => {
    context[id].clearRect(0, 0, canvas[id].width, canvas[id].height);
};

/**
 * @param {string} id
 * @param {Array<number>} args
 */
const background = (id, args) => {
    context[id].clearRect(0, 0, canvas[id].width, canvas[id].height);
    if (args.length === 1) canvas[id].style.backgroundColor = `rgb(${args[0]}, ${args[0]}, ${args[0]})`;
    if (args.length === 3) canvas[id].style.backgroundColor = `rgb(${args[0]}, ${args[1]}, ${args[2]})`;
    if (args.length === 4) canvas[id].style.backgroundColor = `rgba(${args[0]}, ${args[1]}, ${args[2]}, ${args[3]})`;
};

/**
 * @param {string} id
 * @param {Array<number>} args
 */
const fill = (id, args) => {
    context[id].fillStyle = `rgb(${args[0]}, ${args[1]}, ${args[2]})`;
};

/**
 * @param {string} id
 * @param {Array<number>} args
 */
const ellipse = (id, args) => {
    context[id].beginPath();
    context[id].ellipse(args[0], args[1], args[2] / 2, args[3] / 2, 0, 0, 2 * Math.PI);
    context[id].stroke(); // make optional: set stroke or no stroke
    context[id].fill(); // make optional: set fill or no fill
};

/**
 * @param {string} id
 * @param {any} message
 * @param {number} x
 * @param {number} y
 */
const text = (id, message, x, y) => {
    context[id].fillText(message, x, y);
};

/**
 * @param {string} id
 * @param {number} x
 * @param {number} y
 */
const point = (id, x, y) => {
    context[id].fillStyle = 'black';
    context[id].fillRect(x, y, 1, 1);
};

/**
 * @param {string} id
 * @param {number} x1
 * @param {number} y1
 *  @param {number} x2
 * @param {number} y2
 */
const line = (id, x1, y1, x2, y2) => {
    context[id].beginPath();
    context[id].moveTo(x1, y1);
    context[id].lineTo(x2, y2);
    context[id].stroke();
};

/**
 * @param {string} id
 * @param {Array<number>} args
 */
const stroke = (id, args) => {
    context[id].strokeStyle = `rgb(${args[0]}, ${args[1]}, ${args[2]})`;
};

/**
 * @param {string} id
 * @param {Array<number>} args
 */
const rect = (id, args) => {
    context[id].fillRect(args[0], args[1], args[2], args[3]);
    context[id].strokeRect(args[0], args[1], args[2], args[3]);
};

/**
 * @param {string} id
 * @param {number} value
 */
const strokeWeight = (id, value) => {
    context[id].lineWidth = value;
};

/**
 * @param {string} id
 * @param {string} src
 * @param {string} name
 */
const loadImage = (id, src, name) => {
    images[name] = new Image();
    images[name].src = '/graphics/Example/assets/' + src;
};

/**
 * @param {string} id
 * @param {string} name
 * @param {number} dx
 * @param {number} dy
 */
const image = (id, name, dx, dy) => {
    context[id].drawImage(images[name], dx, dy);
    // images[name].addEventListener('load', () => {
    // });
};
export default {
    init,
    setup,
    run,
    size,
    fullWindow,
    background,
    text,
    fill,
    ellipse,
    point,
    clear,
    line,
    stroke,
    rect,
    strokeWeight,
    loadImage,
    image,
};
