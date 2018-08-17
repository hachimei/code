interface node {
    key: number;
    left: node | null;
    right: node | null;
}
declare class BinarySearch {
    constructor();
    Node(key: number): node;
    root: node | null;
    insert(key: number): void;
    insertNode(root: node, newNode: node): void;
}
