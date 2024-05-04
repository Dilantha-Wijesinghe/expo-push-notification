import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { usePushNotifications } from "./src/hooks/usePushNotifications";
import { useEffect } from "react";

/**
 * Note from Hasith:
 *
 * Hi guys, looks like it's not as straight forward as I hoped to be, but this video helped a lot
 * https://www.youtube.com/watch?v=V-hois8dgM4
 *
 *
 */

export default function App() {
  const { expoPushToken, notification } = usePushNotifications();
  const data = JSON.stringify(notification, undefined, 2);

  useEffect(() => {
    console.log(expoPushToken?.data);
  }, [expoPushToken]);

  return (
    <View style={styles.container}>
      <Text>Token: {expoPushToken?.data ?? ""}</Text>
      <Text>Notification: {data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
