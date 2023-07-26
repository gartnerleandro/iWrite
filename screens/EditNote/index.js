import { useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createNote, updateNote } from "../../utils/db";
import Colors from '../../utils/colors';

import styles from "./styles";

export default function EditNoteScreen({ navigation, route }) {
  const { note } = route?.params;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  async function handleSave() {
    setIsLoading(true);
    if (note?.id) {
      await updateNote({ id: note.id, title, content });
    } else {
      await createNote({ title, content });
    }

    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{...styles.header, paddingTop: insets.top, paddingBottom: insets.bottom}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} disabled={isLoading}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSave} disabled={!title || !content || isLoading}
          >
            <Text
              style={{
                ...styles.saveText,
                color: !title || !content || isLoading ? Colors.gray : Colors.secondary
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContainer}
        onPress={() => Keyboard.dismiss()}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          placeholder="Title"
          defaultValue={title || ""}
          onChangeText={(text) => setTitle(text)}
          editable={!isLoading}
          style={styles.titleInput}
        />
        <TextInput
          placeholder="Content"
          defaultValue={content || ""}
          onChangeText={(text) => setContent(text)}
          editable={!isLoading}
          multiline={true}
          style={styles.contentInput}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}