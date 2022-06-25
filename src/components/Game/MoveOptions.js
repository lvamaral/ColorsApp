import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function MoveOptions(props) {
  const colorOptions = props.colors.map((color, i) => {
    return (
      <View key={i} style={[styles.moveButton, { backgroundColor: color }] }/>
    )
  })


  return (
    <View style={styles.container}>
      {colorOptions}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '10%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    // paddingBottom: 75
  },
  moveButton: {
    width: '15%',
    height: '85%',
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  }
});
