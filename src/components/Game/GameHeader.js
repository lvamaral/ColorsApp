import { View, Text, StyleSheet } from 'react-native';

import { CHALLENGE } from '../../constants/game_types';

export default function GameHeader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.levelDisplay}>Level: {props.level}</Text>
      <Text style={styles.moveDisplay}>{props.moves} {props.gameType === CHALLENGE ? '/ ' + props.maxMoves : ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    padding: 20,
    alignItems: 'top',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moveDisplay: {
    fontSize: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 1
  },
  levelDisplay: {
    fontSize: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 1
  }
});
