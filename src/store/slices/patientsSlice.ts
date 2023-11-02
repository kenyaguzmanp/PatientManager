import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Patient, PatientResponse } from '../../types/patient/intex';

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

const videos = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setPatients(state, action: PayloadAction<PatientResponse>) {
      const { payload } = action;
      state.patients = payload || [];
    },
    setInitialState(state) {
      state.patients = [];
      state.selectedPatient = null;
      state.isLoading = null;
      state.hasError = null;
    },
  },
});

export const { setPatients, setInitialState } = videos.actions;

export default videos.reducer;
