import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenNames } from '../screens/ScreenNames';

import i18n from '../i18n/locales';
import { Patients } from '../screens/Patients/Patients';
import { PatientDetail } from '../screens/PatientDetail/PatientDetail';

const Stack = createNativeStackNavigator();

const PatientsStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ScreenNames.Patients}
        screenOptions={{
          presentation: 'card',
          headerShown: true,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name={'PatientsScren'}
            component={Patients}
            options={{
              headerTitle: i18n.t('PATIENTS'),
              header: () => null,
            }}
          />
          <Stack.Screen
            name={'PatientDetail'}
            component={PatientDetail}
            options={{ headerTitle: i18n.t('PATIENT_DETAILS') }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default PatientsStack;
