import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/Home';
import EditNoteScreen from './screens/EditNote';
import NoteScreen from './screens/Note';

import { HOME_SCREEN, NOTE_SCREEN, EDIT_NOTE_SCREEN } from './utils/routes';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            presentation: 'card',
          }}
        >
          <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={EDIT_NOTE_SCREEN} component={EditNoteScreen} options={{ presentation: 'modal' }} />
          <Stack.Screen name={NOTE_SCREEN} component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
