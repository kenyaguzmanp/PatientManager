import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  HomeScreen: undefined;
  Patients: undefined;
  PatientDetail: undefined;
  EditPatientDetail: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList>;
