const sandpiles = require('../../src/problem_4_sandpiles');

describe("#init from sandpiles", () => {
  beforeEach((done) => {
    this.grid = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    done();
  });

  it("should add one sand grain to an empty grid at row/column specified where both row/column are within range", (done) => {
    var row = 1;
    var column = 1;
    sandpiles.init(this.grid, row, column);
    expect(this.grid[row][column]).toBe(1);
    done();
  })

  it("should correctly cascade a three grain square to four one grain squares up/down/left/right if the only original is the middle three grain square", (done) => {
    var row = 2;
    var column = 2;
    this.grid[row][column] = 3;
    sandpiles.init(this.grid, row, column);
    expect(this.grid[row][column]).toBe(0);
    expect(this.grid[row - 1][column]).toBe(1);
    expect(this.grid[row + 1][column]).toBe(1);
    expect(this.grid[row][column - 1]).toBe(1);
    expect(this.grid[row][column + 1]).toBe(1);
    done();
  })


})
