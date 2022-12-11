import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routing from "./Routing"

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Routing></Routing>
    </SafeAreaView>
  );
}

