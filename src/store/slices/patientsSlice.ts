import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Patient, PatientFormValues, PatientResponse } from '../../types/patient/intex';
import { PATIENT_FORM_INPUTS_FIELDS } from '../../components/PatientForm/patientInputs';

export interface PatientSlice {
  patients: Patient[];
  selectedPatient: Patient | null;
  isLoading: boolean | null;
  hasError: boolean | null;
}

const initialState: PatientSlice = {
  patients: [],
  selectedPatient: null,
  isLoading: null,
  hasError: null,
};

interface UpdatePatientFieldsAction {
  patient: Patient;
  values: PatientFormValues;
}

const videos = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setPatients(state, action: PayloadAction<PatientResponse>) {
      const { payload } = action;
      const getMappedPatientExtraFields = (patients: Patient[]) => {
        return patients.map((patient) => {
          return {
            ...PATIENT_FORM_INPUTS_FIELDS,
            ...patient,
          };
        });
      };

      const formattedPatients =
        payload && payload.length > 0 ? getMappedPatientExtraFields(payload) : [];

      state.patients = formattedPatients || [];
    },
    setSelectedPatient(state, action: PayloadAction<Patient | null>) {
      const { payload } = action;
      state.selectedPatient = payload;
    },
    updatePatientFields(state, action: PayloadAction<UpdatePatientFieldsAction>) {
      const { patients } = state;
      const {
        payload: { patient, values },
      } = action;
      const currentPatient = patients.find((patientData) => patientData?.id === patient?.id);

      const updatedPatient: Patient = {
        ...currentPatient,
        ...values,
      };

      const filteredPatients = patients.filter((patientData) => patientData?.id !== patient?.id);

      const updatedPatients = [updatedPatient, ...filteredPatients];
      state.patients = updatedPatients;
      state.selectedPatient = updatedPatient;
    },
    setInitialState(state) {
      state.patients = [];
      state.selectedPatient = null;
      state.isLoading = null;
      state.hasError = null;
    },
  },
});

export const { setPatients, setInitialState, setSelectedPatient, updatePatientFields } =
  videos.actions;

export default videos.reducer;
