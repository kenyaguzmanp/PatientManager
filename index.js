/**
 * @format
 */
import * as React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';
import { paperTheme } from './src/theme';

export default function Main() {
  return (
    <PaperProvider theme={paperTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
