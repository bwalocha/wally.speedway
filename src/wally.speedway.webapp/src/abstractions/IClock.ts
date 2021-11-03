export default interface IClock {
    get Timestamp(): number;

    Start(): void;
}