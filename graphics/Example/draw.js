import {background, fps, image} from '.';

let x = 0;

export default () => {
    background(0);
    image('powerUp', x, 100);
    // x++;
    fps();
};

export const keyPressed = ({key, keyCode}) => {
    console.log(key);
    console.log(keyCode);
};
