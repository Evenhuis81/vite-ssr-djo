import main from '..';
import {mouseProps} from '../locals';
import constants from '../constants';

/** @type {string} */
let id;

/** @type {{x: number, y: number}} */
let mouse;

/** @type {number} */
let width;

/** @type {number} */
let height;

/** @param {string} canvasId */
const init = canvasId => {
    id = canvasId;
    mouse = mouseProps();
    main.init(id, mouse);
};

/** @param {function} script */
const setupCanvas = script => main.setup(id, script);

/** @param {function} script */
const drawContext = script => main.run(script);

/** @param {Array<any>} args */
const size = (...args) => {
    width = args[0];
    height = args[1];
    main.size(id, args);
};

const fullWindow = () => {
    width = innerWidth;
    height = innerHeight;
    main.fullWindow(id);
};

/** @param {Array<number>} args */
const background = (...args) => main.background(id, args);

/** @param {Array<number>} args */
const fill = (...args) => main.fill(id, args);

/** @param {Array<number>} args */
const ellipse = (...args) => main.ellipse(id, args);

/**
 * @param {any} message
 * @param {number} x
 * @param {number} y
 */
const text = (message, x, y) => main.text(id, message, x, y);

/**
 * @param {number} x
 * @param {number} y
 */
const point = (x, y) => main.point(id, x, y);

/** @param {number} num */
const random = num => {
    return Math.round(Math.random() * num);
};

let secondsPassed = 0;
let oldTimeStamp = 0;

let frameCounter = 0;
let frameRate = 0;

const frameCount = () => {
    return frameCounter++;
};

const fps = () => {
    secondsPassed = (performance.now() - oldTimeStamp) / 1000;
    oldTimeStamp = performance.now();

    if (frameCount() % 30 === 0) frameRate = Math.round(1 / secondsPassed);

    main.text(id, frameRate, 50, 50);
};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
const line = (x1, y1, x2, y2) => main.line(id, x1, y1, x2, y2);

/** @param {Array<number>} args */
const stroke = (...args) => main.stroke(id, args);

/** @param {Array<number>} args */
const rect = (...args) => main.rect(id, args);

/**
 * @param {string} src
 * @param {string} name
 */
const loadImage = (src, name, dx = 0, dy = 0) => main.loadImage(id, src, name);

/**
 * @param {string} name
 * @param {number} dx
 * @param {number} dy
 */
const image = (name, dx = 0, dy = 0) => main.image(id, name, dx, dy);

const CENTER = constants.CENTER;

export {
    init,
    setupCanvas,
    drawContext,
    size,
    fullWindow,
    background,
    mouse,
    text,
    CENTER,
    fill,
    ellipse,
    width,
    height,
    point,
    random,
    fps,
    frameCount,
    line,
    stroke,
    rect,
    loadImage,
    image,
};
// let movingSpeed = 50;

// let rectX = 0;
// let rectY = 0;

// function gameLoop(timeStamp) {
//     // Calculate the number of seconds passed since the last frame
//     secondsPassed = (timeStamp - oldTimeStamp) / 1000;
//     oldTimeStamp = timeStamp;

//     // Calculate fps
//     fps = Math.round(1 / secondsPassed);

//     // Draw number to the screen
//     context.fillStyle = 'white';
//     context.fillRect(0, 0, 200, 100);
//     context.font = '25px Arial';
//     context.fillStyle = 'black';
//     context.fillText('FPS: ' + fps, 10, 30);

//     // Perform the drawing operation
//     update(secondsPassed);
//     draw();

//     // The loop function has reached it's end. Keep requesting new frames
//     window.requestAnimationFrame(gameLoop);
// }

// function update(secondsPassed) {
//     rectX += movingSpeed * secondsPassed;
//     rectY += movingSpeed * secondsPassed;
// }

// function draw() {
//     // Clear the entire canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     context.fillStyle = '#ff8080';
//     context.fillRect(rectX, rectY, 150, 100);
// }
