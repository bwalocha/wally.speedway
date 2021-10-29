export default interface IClock {
    GetTimestamp: () => number;

    Start(): void;
}