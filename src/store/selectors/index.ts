import { createSelector } from 'reselect';
import { RootState } from '../store';

export const getPatients = (state: RootState) => state?.patients?.patients;

export const getSelectedPatient = (state: RootState) => state?.patients?.selectedPatient;

export const getPatientById = (patientId: string) =>
  createSelector(getPatients, (patients) => {
    if (patients) {
      const foundPatient = patients.find((patient) => patient.id === patientId);

      return foundPatient;
    }
    return null;
  });
