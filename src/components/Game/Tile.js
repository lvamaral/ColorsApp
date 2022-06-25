import { View, StyleSheet } from 'react-native';

export default function Tile(props) {
  const backgroundColor = { backgroundColor: props.color }

  return (
    <View style={[styles.container, backgroundColor]}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'top',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
