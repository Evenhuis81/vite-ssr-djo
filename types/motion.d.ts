import { vec2 } from "./vectors";

export interface Motion {
    update: function;
    show: function;
    edges: function;
    applyForce: (force: vec2) => any;
    friction: function;
    mass: number;
    drag: function;
}