export default class ArrayList<T> {
    array: Array<T>;
    length: number;
    constructor();
    addAll(arr: Array<T>): void;
    insert(item: T): void;
    toString(): string;
    bubbleSort(): void;
    comparator(a1: T, a2: T): number;
    insertSort(): void;
    quickSort(): void;
}
