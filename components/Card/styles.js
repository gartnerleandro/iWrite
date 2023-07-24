import { StyleSheet } from "react-native";
import Colors from '../../utils/colors';

export default StyleSheet.create({
  noteContainer: {
    borderLeftColor: Colors.tertiary,
    borderLeftWidth: 4,
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
  wrapper: {
    padding: 10,
    gap: 10,
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteContent: {

  },
});