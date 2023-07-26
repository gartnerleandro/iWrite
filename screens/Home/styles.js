import { StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent,
    padding: 16,
  },
  addButton: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    padding: 16,
  },
  addText: {
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  listContainer: {
    gap: 16,
    paddingHorizontal: 16,
  }
});