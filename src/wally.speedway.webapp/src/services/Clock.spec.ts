import Clock from "./Clock";

describe('Clock', () => {
    const clock = new Clock();

    describe('When not Started', () => {

        it('Timestamp equals 0', () => {
            const data = clock.Timestamp;
            expect(data).toStrictEqual(0);
        });

        it('Next() do nothing', () => {
            clock.Next();
            const data = clock.Timestamp;
            expect(data).toStrictEqual(0);
        });
    });

    describe('When Started', () => {
        
        it('Timestamp greater than 0', async () => {
            clock.Start();

            await new Promise(f => setTimeout(f, 100));
            
            const data = clock.Timestamp;
            expect(data).toBeGreaterThan(0);
        });

        it('Next() resets Timestamp', async () => {
            clock.Start();

            await new Promise(f => setTimeout(f, 1));

            clock.Next();
            const data = clock.Timestamp;
            expect(data).toBe(0);
        });

    });
});
