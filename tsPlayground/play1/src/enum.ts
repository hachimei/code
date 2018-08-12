enum Direction {
    Up = 1,
    Down,
    left,
    Right
}

const log = console.log;

for(let direction in Direction){
    log(direction)
}