import { Stack } from "expo-router";
import '../global.css';
import 'react-native-url-polyfill'

import { AuthProvider} from "@/providers/AuthProvider";
import {StatusBar} from "expo-status-bar";


export default function RootLayout() {
  return (
      <AuthProvider>
          <Stack screenOptions={{headerShown: false,}}>
              <Stack.Screen name="login" />
              <Stack.Screen name="inicio" />
          </Stack>
          <StatusBar style="dark" />
      </AuthProvider>
  )
}
