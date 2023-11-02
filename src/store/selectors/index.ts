import { RootState } from '../store';

export const getPatients = (state: RootState) => state?.patients?.patients;
