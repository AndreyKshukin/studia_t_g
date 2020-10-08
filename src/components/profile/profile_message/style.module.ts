import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text: {
    marginBottom: 20,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
