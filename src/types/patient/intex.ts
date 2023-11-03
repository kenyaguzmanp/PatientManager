import { Nullable } from '..';

export interface PatientFormValues {
  name: Nullable<string>;
  email?: Nullable<string>;
  phoneNumber?: Nullable<string>;
  age?: Nullable<string>;
  weight?: Nullable<string>;
  bmi?: Nullable<string>;
}

export interface Patient {
  createdAt?: Nullable<string>;
  name?: Nullable<string>;
  avatar?: Nullable<string>;
  description?: Nullable<string>;
  website?: Nullable<string>;
  id?: Nullable<string>;
  email?: Nullable<string>;
  phoneNumber?: Nullable<string>;
  weight?: Nullable<string>;
  bmi?: Nullable<string>;
  age?: Nullable<string>;
}

export type PatientResponse = Patient[] | undefined;
