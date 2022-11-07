import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 4,
    margin: 10,
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  blackview: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: Dimensions.get('window').height / 24,
    width: Dimensions.get('window').width - 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'right',
    fontWeight: 'bold',
    paddingRight: 10,
    color: 'white',
    flex: 1,
  },
  inner_container: {},
});
