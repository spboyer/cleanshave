export class Person {
    public id: number;
    public first: string;
    public last: string;
    public age: number;
    public favoriteBeer: string;

    public get Name(): string {
        return this.first + ' ' + this.last;
    }
}