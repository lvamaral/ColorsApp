import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import GameHeader from './GameHeader';
import Board from './Board';
import MoveOptions from './MoveOptions';

import { CHALLENGE, ZEN } from '../../constants/game_types';
import { getRoundsColors } from './logic/colors';
import { makeGrid, isGridFull, paintGrid } from './logic/grid';
import { getMaxMoves } from './logic/moves';

export default function Game() {
  // Initialize new game
  // Optionally pass difficulty
  const ORIGIN = [0, 0];
  const [gameType, setGameType] = useState(CHALLENGE);
  const [level, setLevel] = useState(1);
  const [moves, setMoves] = useState(0);
  const [maxMoves, setMaxMoves] = useState(getMaxMoves(level)); // Move to logic module
  const [colors, setColors] = useState(getRoundsColors());
  const [grid, setGrid] = useState(makeGrid(level, colors))

  function handleMove(color) {
    setMoves(moves + 1);

    // Move to logic module?
    if (gameType === CHALLENGE && moves > maxMoves) {
      // Show lose animation / view
      console.log('you lose!');
    } else {
      paintGrid(ORIGIN, grid, color);

      if (isGridFull(grid)) {
        setLevel(level + 1);
      }
    }
  }

  useEffect(() => {
    // Level Up
    const newColors = getRoundsColors();
    setGrid(makeGrid(level, newColors));
    setColors(newColors);
    setMoves(0);
    setMaxMoves(getMaxMoves(level));
  }, [level]);

  return (
    <View style={styles.container}>
      <Board colors={colors} grid={grid} />
      <GameHeader level={level} moves={moves} maxMoves={maxMoves} gameType={gameType} />
      <MoveOptions colors={colors} handleMove={handleMove} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
