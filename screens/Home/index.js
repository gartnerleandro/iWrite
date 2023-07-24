import { useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import Card from "../../components/Card";

import Colors from "../../utils/colors";
import { getNotes } from '../../utils/db';
import { EDIT_NOTE_SCREEN } from "../../utils/routes";

import styles from './styles';
import EmptyComponent from "../../components/Empty";

export default function HomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(true);
  const insets = useSafeAreaInsets();

  function fetchNotes() {
    setLoadingNotes(true);
    getNotes()
      .then((notes) => {
        setNotes(notes);
        setLoadingNotes(false);
      })
      .catch((e) => {
        console.log(e);
        setLoadingNotes(false);
      });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  useFocusEffect(useCallback(() => {
    fetchNotes();
  }, [navigation]));

  return (
    <View style={{...styles.container, paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={styles.header}>
        <Text style={styles.title}>iWrite</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate(EDIT_NOTE_SCREEN, { note: {} })}
        >
          <AntDesign name="plus" size={15} color={Colors.secondary} style={{ fontWeight: 'bold' }} />
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notes}
        onRefresh={fetchNotes}
        refreshing={loadingNotes}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => <Card note={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => !loadingNotes && <EmptyComponent />}
      />
    </View>
  );
}