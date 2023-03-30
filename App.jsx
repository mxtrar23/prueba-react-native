import * as React from 'react';
import { NativeBaseProvider, Box } from "native-base";
import { StatusBar } from 'expo-status-bar';
import Main from './src/view/Main';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Box flex={1} alignItems="center" justifyContent="center" bgColor="#fff" >
        <Main/>
      </Box>
    </NativeBaseProvider>
  );
}

