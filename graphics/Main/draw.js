// @ts-nocheck
import {background, image, strokeWeight, ellipse, height, noFill, noStroke, point, random, rect, stroke, text, textSize, width} from '.';
let y = 300;
let x = 0.003;


export default () => {
    background(2,3,87);
   stroke(240,60,20)
  
    strokeWeight(2 );
     
    textSize(60)
    text('Hello devon', x, y);
    // make text stroke with default off
     
};

export const keyPressed = ({key, keyCode}) => {
    if (key == ' ') space = true
};