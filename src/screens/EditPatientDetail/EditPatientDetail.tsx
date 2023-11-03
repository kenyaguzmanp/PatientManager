import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { PatientForm } from '../../components/PatientForm/PatientForm';
import styles from './style';
import { useSelector } from 'react-redux';
import { getSelectedPatient } from '../../store/selectors';

interface EditPatientDetailProps {}

export const EditPatientDetail: FC<EditPatientDetailProps> = () => {
  const selectedPatient = useSelector(getSelectedPatient);
  return (
    <ScrollView style={styles.container}>
      <PatientForm patient={selectedPatient} />
    </ScrollView>
  );
};
