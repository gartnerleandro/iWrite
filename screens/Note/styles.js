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
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  backText: {
    textAlign: 'center',
  },
  editText: {
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  noteTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  }
});
