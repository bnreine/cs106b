module.exports = {
  init(grid, row, column){
    if(row < 0 || row > grid.length - 1 || column < 0 || column > grid > grid[0].length - 1){
      return;
    } else if(grid[row][column] >= 0 && grid[row][column] <=2){
      grid[row][column]++;
      return;
    } else {
      grid[row][column] = 0;
      module.exports.init(grid, row + 1, column);
      module.exports.init(grid, row - 1, column);
      module.exports.init(grid, row , column + 1);
      module.exports.init(grid, row, column - 1);
      return;
    }
  }
}
