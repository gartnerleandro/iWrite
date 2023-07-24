import { StyleSheet } from 'react-native';

import Colors from '../../utils/colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  editText: {
    fontWeight: 'bold',
    color: Colors.secondary,
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
