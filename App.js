import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor: 'green' }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: 'blue' }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
