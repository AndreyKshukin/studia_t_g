import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingBottom: 5,
    paddingRight: 23,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#8895a0',
  },

  text: {
    fontSize: 18,
  },

  email: {
    fontSize: 18,
    color: '#8895a0',
  },

  img: {
    height: 20,
    width: 20,
    tintColor: '#8895a0',
  },
});
