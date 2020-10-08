import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '85%',
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

  img: {
    width: '100%',
    paddingBottom: '100%',
    backgroundColor: '#4369b0',
    borderRadius: 10,
  },

  text_box: {
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },

  text: {
    fontSize: 18,
    paddingTop: 5,
  },

  title_text: {
    paddingTop: 20,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
