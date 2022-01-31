import {background, fullWindow, loadImage} from '.';

export default () => {
    fullWindow();
    background(0);
    loadImage('mario_PNG75.png', 'powerUp');
};
