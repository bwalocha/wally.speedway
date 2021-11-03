import Vehicle from "./vehicle";

describe('Vehicle', () => {
    const location = {
        x: 0, 
        y: 0
    };
    const vehicle = new Vehicle(location, "#000000");
    const clock = {
        Start: jest.fn(),
        Timestamp: 0,
    };
    
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
});
