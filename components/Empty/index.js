import { useRef } from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";

import styles from "./styles";

export default function EmptyComponent() {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        ref={animation}
        style={{
          width: "100%",
        }}
        source={require('../../assets/empty.json')}
      />
      <Text style={styles.text}>No notes created yet</Text>
    </View>
  );
}