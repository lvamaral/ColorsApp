import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import GameHeader from './GameHeader';
import Board from './Board';
import MoveOptions from './MoveOptions';

import { getRoundsColors } from './logic/colors';

export default function Game() {
  // Initialize new game
  // Set difficulty, type
  const [level, setLevel] = useState(2);
  const [moves, setMoves] = useState(0);

  const colors = getRoundsColors();

  return (
    <View style={styles.container}>
      <Board level={level} colors={colors} />
      <GameHeader level={level} moves={moves} />
      <MoveOptions colors={colors}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
