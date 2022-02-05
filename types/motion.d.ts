import { vec, vec2 } from "./vectors";

export interface Motion {
    update: function;
    // show: function;
    // edges: function;
    seek: (target: vec2) => void;
    attract: (mover: Mover) => void;
    applyForce: (force: vec2) => void;
    friction: function;
    mass: number;
    drag: function;
    // r: number;
    pos: vec2;
    vel: vec2;
    acc: vec2
    // setColor: (r: number, g: number, b: number) => void;
}

export interface Mover {
    show: function;
    edges: function;
    setColor: function;
    update: function;
    pos: vec2;
    mass: number;
    applyForce;
    attract: function;
}