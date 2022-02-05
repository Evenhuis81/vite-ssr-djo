export const mouseProps = (x_ = 0, y_ = 0, isPressed_ = false) => {
    const self = {
        get x() {
            return x_;
        },
        set x(x) {
            x_ = x;
        },
        get y() {
            return y_;
        },
        set y(y) {
            y_ = y;
        },
        get isPressed() {
            return isPressed_;
        },
        set isPressed(bool) {
            isPressed_ = bool;
        },
    };
    return self;
};
