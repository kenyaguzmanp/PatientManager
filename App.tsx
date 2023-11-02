import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import Card from './src/components/Card/Card';
import { PatientForm } from './src/components/PatientForm/PatientForm';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Card />
        <PatientForm patientId={'93'} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
