import Vehicle from "./vehicle";
import {Location} from "../services/Location";

describe('Vehicle', () => {
    let location: Location;
    let vehicle:Vehicle;
    let clock: {
        Start: () => {},
        Timestamp: number,
    };

    beforeEach(() => {
        location = {
            x: 0,
            y: 0
        };
        vehicle = new Vehicle(location, "#000000");
        clock = {
            Start: jest.fn(),
            Timestamp: 0,
        };
    })
    
    it('When not moved Has default data', () => {
        const data = vehicle.GetData();
        expect(data).toStrictEqual({
            "headingAngle": 0,
            "location": location,
            "speed": 1,
            "steerAngle": 0,
            "wheelBaseLength": 10,
        });
    });

    it('When moved Has specific data', () => {
        location.x = 100;
        location.y = 100;
        const vehicle = new Vehicle(location, "#000000");
        const data = vehicle.GetData();
        expect(data).toStrictEqual({
            "headingAngle": 0,
            "location": { ...location, x: 100 },
            "speed": 1,
            "steerAngle": 0,
            "wheelBaseLength": 10,
        });
    });

    it('When in move Has updated data', () => {
        clock.Timestamp = 10;
        vehicle.Update(clock);
        const data = vehicle.GetData();
        expect(data).toStrictEqual({
            "headingAngle": 0,
            "location": { ...location, x: 10 },
            "speed": 1,
            "steerAngle": 0,
            "wheelBaseLength": 10,
        });
    });

    it('When moved and in move Has updated data', () => {
        clock.Timestamp = 10;
        location.x = 100;
        location.y = 100;
        const vehicle = new Vehicle(location, "#000000");
        vehicle.Update(clock);
        const data = vehicle.GetData();
        expect(data).toStrictEqual({
            "headingAngle": 0,
            "location": { ...location, x: 110 },
            "speed": 1,
            "steerAngle": 0,
            "wheelBaseLength": 10,
        });
    });
});
