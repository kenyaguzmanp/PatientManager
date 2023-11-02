import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PatientsProps {}

export const Patients: FC<PatientsProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Patients</Text>
      </View>
    </SafeAreaView>
  );
};
