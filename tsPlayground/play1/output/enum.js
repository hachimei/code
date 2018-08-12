"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var log = console.log;
for (var direction in Direction) {
    log(direction);
}
//# sourceMappingURL=enum.js.map