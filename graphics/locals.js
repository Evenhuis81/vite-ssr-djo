export const mouseProps = () => {
    const properties = {
        x: 0,
        y: 0,
    };
    const self = {
        get x() {
            return properties.x;
        },
        set x(x) {
            properties.x = x;
        },
        get y() {
            return properties.y;
        },
        set y(y) {
            properties.y = y;
        },
    };
    return self;
};
