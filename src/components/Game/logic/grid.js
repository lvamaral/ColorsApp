// TODO: could add a difficulty param to decide # of possible colors
const makeTile = (colors, pos) => {
  return { color: colors[Math.floor(Math.random()*colors.length)], pos };
}

const isInBounds = (grid, pos) => {
  return pos[0] >= 0
  && pos[1] >= 0
  && pos[0] < grid[0].length // cols
  && pos[1] < grid.length // rows
}

const getConnectedSameColorTiles = (originTile, grid, color) => {
  let queue = [originTile];
  const seen = new Set();
  const connectedTiles = [];

  while (queue.length > 0) {
    const currentTile = queue.pop();

    if (!seen.has(currentTile)) {
      seen.add(currentTile);
      connectedTiles.push(currentTile);

      const adjacentTiles = getAdjacentSameColorNotSeenTiles(currentTile, grid, color, seen);
      queue = [...queue, ...adjacentTiles];
    }
  }

  return connectedTiles;
}

const getAdjacentSameColorNotSeenTiles = (tile, grid, color) => {
  const tilePos = tile.pos;
  const adjacentTiles = [];
  const possiblePositions = [
    [tilePos[0],  tilePos[1] - 1], // up
    [tilePos[0] + 1,  tilePos[1]], // right
    [tilePos[0],  tilePos[1] + 1], // down
    [tilePos[0] - 1,  tilePos[1]] // left
  ];

  for (const possiblePos of possiblePositions) {
    if (isInBounds(grid, possiblePos)) // In bounds
      {
        const possibleTile = grid[possiblePos[1]][possiblePos[0]];

        if (possibleTile.color === color) {
          adjacentTiles.push(possibleTile);
        }
      }
  }

  return adjacentTiles;
}

export const makeGrid = (level, colors) => {
  const rows = Math.floor(level/2) + 2;
  const cols = Math.floor((level - 1) / 2) + 2

  return new Array(cols)
  .fill(0)
  .map((_, y) => (
    new Array(rows)
    .fill(0)
    .map((_, x) => makeTile(colors, [x,y]))
  ));
}

export const isGridFull = (grid) => {
  let initialColor = grid[0][0].color;

  for (const row of grid) {
    for (const tile of row) {
      if (tile.color !== initialColor) {
        return false;
      }
    }
  }

  return true;
}

export const paintGrid = (origin, grid, color) => {
  const initialTile = grid[origin[0]][origin[1]];
  const intialTileColor = initialTile.color;

  const connectedTiles = getConnectedSameColorTiles(initialTile, grid, intialTileColor);

  for (const tile of connectedTiles) {
    tile.color = color;
  }
}

