import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  HomeScreen: undefined;
  PatientsScreen: {
    name: string;
    birthYear: string;
  };
  PatientDetail: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList>;
