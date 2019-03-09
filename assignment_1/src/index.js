const sandpiles = require("./problem_4_sandpiles.js");
var grid = [[3,3,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
const row = 0;
const column = 0;
console.log("before: ");
console.log(grid);
console.log("after: ");
sandpiles.init(grid, row, column);
console.log(grid);
