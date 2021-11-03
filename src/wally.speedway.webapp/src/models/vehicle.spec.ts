import Vehicle from "./vehicle";
import Clock from "./../services/Clock";

jest.mock("./../services/Clock");

describe('vehicle', () => {
    const location = {
        x: 0, 
        y: 0
    };
    const vehicle = new Vehicle(location, "#000000");
    const clock = new Clock();

    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        (Clock as jest.Mock).mockClear();
    });
    
    it('init location', () => {
        const data = vehicle.GetData();
        expect(data).toStrictEqual({
            "headingAngle": 0,
            "location": location,
            "speed": 1,
            "steerAngle": 0,
            "wheelBaseLength": 10,
        });
    });

    xit('next location', () => {
        vehicle.Update(clock);
        const data = vehicle.GetData();
        expect(data).toStrictEqual({
            "headingAngle": 0,
            "location": location,
            "speed": 1,
            "steerAngle": 0,
            "wheelBaseLength": 10,
        });
    });
});
