import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    flex: 1,
  },
  text_container: {
    paddingTop: 20,
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  areatitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  divider: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  description: {
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: 'red',
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 10,
  },
  button_text: {
    fontSize: 20,
    fontWeight: 'bold',

    color: 'white',
  },
});
