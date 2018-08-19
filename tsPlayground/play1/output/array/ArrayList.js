"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.array = [];
        this.length = this.array.length;
    }
    ArrayList.prototype.addAll = function (arr) {
        if (arr.length > this.array.length) {
            arr.push.apply(arr, this.array);
            this.array = arr;
        }
        else {
            this.array.push.apply(this.array, arr);
        }
    };
    ArrayList.prototype.insert = function (item) {
        this.array.push(item);
    };
    ArrayList.prototype.toString = function () {
        return this.array.join('-');
    };
    ArrayList.prototype.bubbleSort = function () {
        var _this = this;
        this.array.sort(function (a1, a2) { return _this.comparator(a1, a2); });
    };
    ArrayList.prototype.comparator = function (a1, a2) {
        if (typeof a1 === 'number' && typeof a2 === 'number') {
            return a1 - a2;
        }
        else {
            return 0;
        }
    };
    ArrayList.prototype.insertSort = function () {
        var j, temp;
        for (var i = 1; i < this.array.length; i++) {
            if (typeof this.array[i] === 'number') {
                j = i;
                temp = this.array[i];
                while (j > 0 && this.array[j - 1] > temp) {
                    this.array[j] = this.array[j - 1];
                    j--;
                }
                this.array[j] = temp;
            }
        }
    };
    ArrayList.prototype.quickSort = function () {
        quick(this.array, 0, this.array.length - 1);
    };
    return ArrayList;
}());
exports.default = ArrayList;
function quick(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quick(arr, left, index - 1);
        }
        if (right > index) {
            quick(arr, index, right);
        }
    }
}
function partition(arr, left, right) {
    var pivor = arr[Math.floor((left + right) / 2)], i = left, j = right;
    while (i <= j) {
        while (arr[i] < pivor) {
            i++;
        }
        while (arr[j] > pivor) {
            j--;
        }
        if (i <= j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}
//# sourceMappingURL=ArrayList.js.map