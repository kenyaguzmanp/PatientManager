import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenNames } from '../screens/ScreenNames';

import i18n from '../i18n/locales';
import { Meds } from '../screens/Meds/Meds';

const Stack = createNativeStackNavigator();

const MedsStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ScreenNames.Meds}
        screenOptions={{
          presentation: 'card',
          headerShown: true,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name={'MedsScreen'}
            component={Meds}
            options={{
              headerTitle: i18n.t('MEDS'),
              header: () => null,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default MedsStack;
