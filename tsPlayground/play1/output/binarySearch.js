"use strict";
var BinarySearch = /** @class */ (function () {
    function BinarySearch() {
        this.root = null;
    }
    BinarySearch.prototype.Node = function (key) {
        return { key: key, left: null, right: null };
    };
    BinarySearch.prototype.insert = function (key) {
        var newNode = this.Node(key);
        if (this.root === null) {
            this.root = newNode;
        }
        else if (key !== this.root.key) {
            this.insertNode(this.root, newNode);
        }
    };
    BinarySearch.prototype.insertNode = function (root, newNode) {
        if (newNode.key < root.key) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    };
    return BinarySearch;
}());
//# sourceMappingURL=binarySearch.js.map