import Clock from "./Clock";

jest.mock("./Clock");

describe('clock', () => {
    const clock = new Clock();

    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        (Clock as jest.Mock).mockClear();
    });
    
    it('init state', () => {
        const data = clock.Timestamp;
        expect(data).toStrictEqual(0);
    });
});
