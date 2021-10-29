export default class Vehicle {
    constructor() {
        this._velocity = 0;
        this._angle = 0;
    }
    Turn() {
        this._angle += 0.1;
        this._velocity -= 0.1;
    }
    Update(clock) {
    }
}
