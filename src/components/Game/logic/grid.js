// TODO: could add a difficulty param to decide # of possible colors
const makeTile = (colors) => {
  return { colorHex: colors[Math.floor(Math.random()*colors.length)] };
}

export const makeGrid = (rows, cols, colors) => {
  return new Array(cols)
  .fill(0)
  .map(() => (
    new Array(rows)
    .fill(0)
    .map(() => makeTile(colors))
  ));
}

