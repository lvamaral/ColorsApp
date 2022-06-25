import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tile from './Tile';

import { getRoundsColors } from './logic/colors';
import { makeGrid } from './logic/grid';

export default function Board(props) {
  // const colors = getRoundsColors();
  const rowN = Math.floor(props.level/2) + 2;
  const colN = Math.floor((props.level - 1) / 2) + 2

  // Make 2D array grid first
  const boardGrid = makeGrid(rowN, colN, props.colors);

  // Construct board view
  const board = boardGrid
  .map((row, i) => (
      <View key={i} style={styles.tileRow}>
        {
          row.map((tile, j) => (<Tile key={i + "-" + j} color={tile.colorHex}/>))
        }
      </View>
    )
  );

  return (
    <View style={styles.container}>
      {board}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 16,
    backgroundColor: 'blue',
    position: 'relative',
    top: 0,
    left: 0,
  },
  tileRow: {
    flex: 1,
    flexDirection: 'row'
  }
});
