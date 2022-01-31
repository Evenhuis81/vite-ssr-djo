export const vec2 = (x = 0, y = 0) => {
    const properties = {
        x,
        y,
    };
    const self = {
        get x() {
            return properties.x;
        },
        set x(val) {
            properties.x = val;
        },
        get y() {
            return properties.y;
        },
        set y(val) {
            properties.y = val;
        },
    };
    return self;
};
