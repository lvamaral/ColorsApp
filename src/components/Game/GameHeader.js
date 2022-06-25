import { View, Text, StyleSheet } from 'react-native';

export default function GameHeader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.moveDisplay}>{props.moves}</Text>
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
    justifyContent: 'flex-end',
  },
  moveDisplay: {
    fontSize: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 1
  }
});
