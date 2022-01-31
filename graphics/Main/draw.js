// @ts-nocheck
import {background, ellipse, height, noFill, noStroke, point, random, rect, stroke, text, textSize, width} from '.';

export default () => {
    background(128);
    noStroke();
    text('Hello World', 50, 50);
    // make text stroke with default off
};

export const keyPressed = ({key, keyCode}) => {
    console.log(key);
    console.log(keyCode);
};
