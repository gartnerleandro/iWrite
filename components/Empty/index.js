import { useRef } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

export default function EmptyComponent() {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No notes created yet</Text>
    </View>
  );
}