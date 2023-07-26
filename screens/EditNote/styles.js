import { StyleSheet } from 'react-native';

import Colors from '../../utils/colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    minWidth: 64,
  },
  cancelText: {
    color: Colors.red,
  },
  saveText: {
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 16
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  contentInput: {
    textAlignVertical: "top",
    minHeight: 400,
  }
});
