import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header/Header';

interface PatientsProps {}

export const Patients: FC<PatientsProps> = () => {
  return (
    <View>
      <Header title="Pacientes" />
      <View>
        <Text>Patients</Text>
      </View>
    </View>
  );
};
