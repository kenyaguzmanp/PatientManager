import React from 'react';

import Navigator from './src/navigation/navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}

export default App;
