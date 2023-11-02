import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  HomeScreen: undefined;
  Patients: undefined;
  PatientDetail: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList>;
