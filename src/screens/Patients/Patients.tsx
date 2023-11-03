import React, { FC } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { getPatients } from '../../store/selectors';
import { PatientsList } from '../../components/PatientsList/PatientsList';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PatientsProps {}

export const Patients: FC<PatientsProps> = () => {
  const patients = useSelector(getPatients);

  return (
    <SafeAreaView>
      <View style={styles.content}>
        <PatientsList patients={patients} />
      </View>
    </SafeAreaView>
  );
};
