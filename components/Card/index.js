import { View, Text, TouchableOpacity } from 'react-native';

import { NOTE_SCREEN } from '../../utils/routes';

import styles from './styles';

export default function CardComponent({ navigation, note }) {
  const { id, title, content } = note;

  return (
    <TouchableOpacity
      style={styles.noteContainer}
      onPress={() => navigation.navigate(NOTE_SCREEN, { note })}
    >
      <View id={id} style={styles.wrapper}>
        <Text style={styles.noteTitle} numberOfLines={2}>{title}</Text>
        <Text style={styles.noteContent} numberOfLines={5}>{content}</Text>
      </View>
    </TouchableOpacity>
  )
}