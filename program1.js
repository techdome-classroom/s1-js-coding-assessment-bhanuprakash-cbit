const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Helper function for DFS traversal
  const dfs = (i, j) => {
      // Check bounds and whether the cell is land ('L')
      if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
          return;
      }

      // Mark the current cell as visited by setting it to 'W' (water)
      grid[i][j] = 'W';

      // Explore all 4 possible directions (up, down, left, right)
      dfs(i - 1, j); // Up
      dfs(i + 1, j); // Down
      dfs(i, j - 1); // Left
      dfs(i, j + 1); // Right
  };

  // Loop through each cell in the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          // If we find an unvisited land cell, start a DFS from there
          if (grid[i][j] === 'L') {
              islandCount++;
              dfs(i, j); // Mark all connected land as visited
          }
      }
  }
  console.log(islandCount);
  return islandCount;

};
console.log(getTotalIsles);

module.exports = getTotalIsles;