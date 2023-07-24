import { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 


import { EDIT_NOTE_SCREEN } from '../../utils/routes';

import styles from './styles';

export default function NoteScreen({ navigation, route }) {
  const { note } = route?.params;
  const insets = useSafeAreaInsets();
  const [selectedNote, setSelectedNote] = useState({});

  useEffect(() => {
    if (note) {
      setSelectedNote(note);
    }
  }, [note]);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.button, styles.backButton]}
        >
          <AntDesign name="left" size={14} color="black" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(EDIT_NOTE_SCREEN, { note: selectedNote })}
          style={styles.button}
        >
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.noteTitle}>
          {selectedNote?.title}
        </Text>
        <Text>
          {selectedNote?.content}
        </Text>
      </ScrollView>
    </View>
  );
}