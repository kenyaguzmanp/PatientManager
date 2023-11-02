export interface PatientFormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  age: string;
  weight: string;
  bmi: string;
}

export interface Patient {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
  id: string;
}

export type PatientResponse = Patient[] | undefined;
