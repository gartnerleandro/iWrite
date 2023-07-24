import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getNotes() {
  try {
    const value = await AsyncStorage.getItem('notes');

    if (value !== null) {
      return JSON.parse(value);
    } else {
      return [];
    }
  } catch (e) {
    throw new Error(e);
  }
};

export async function updateNote(note) {
  try {
    const allNotes = await getNotes();
    const index = allNotes.findIndex((n) => n.id === note.id);
    allNotes[index] = note;

    await AsyncStorage.setItem('notes', JSON.stringify(allNotes));

    return allNotes;
  } catch (e) {
    throw new Error(e);
  }
}

export async function createNote(note) {
  try {
    const allNotes = await getNotes();

    allNotes.push({ ...note, id: `${Date.now()}` });

    await AsyncStorage.setItem('notes', JSON.stringify(allNotes));

    return allNotes;
  } catch (e) {
    throw new Error(e);
  }
}

export async function deleteNoteById(id) {
  try {
    const allNotes = await getNotes();

    const filteredNotes = allNotes.filter((n) => n.id !== id);

    await AsyncStorage.setItem('notes', JSON.stringify(filteredNotes));

    return filteredNotes;
  } catch (e) {
    throw new Error(e);
  }
}