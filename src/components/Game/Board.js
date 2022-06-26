import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tile from './Tile';

export default function Board(props) {
  // Construct board view
  const board = props.grid
  .map((row, i) => (
      <View key={i} style={styles.tileRow}>
        {
          row.map((tile, j) => (<Tile key={i + "-" + j} color={tile.color}/>))
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
