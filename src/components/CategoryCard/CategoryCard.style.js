import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderColor: 'gray',
    borderBottomLeftRadius: Dimensions.get('window').height / 16,
    borderTopLeftRadius: Dimensions.get('window').height / 16,
    height: Dimensions.get('window').height / 8,
    width: Dimensions.get('window').width - 20,
    borderWidth: 1,
    backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 20,
  },
});
