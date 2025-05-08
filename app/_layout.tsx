import { EventEmitter } from 'events';
import { Stack } from "expo-router";
import 'react-native-polyfill-globals';
import '../global.css';

import { AuthProvider } from "@/providers/AuthProvider";
import { StatusBar } from "expo-status-bar";

declare global {
  interface GlobalThis {
    EventEmitter: typeof EventEmitter;
  }
}

(global as any).EventEmitter = EventEmitter;

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
