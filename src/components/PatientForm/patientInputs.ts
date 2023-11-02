import { PatientSimpleInput } from './PatientForm';
import styles from './styles';

export const patientFormInputs: Array<PatientSimpleInput> = [
  {
    name: 'fullName',
    placeholder: 'Full Name',
    style: styles.textInput,
    editable: false,
    defaultValue: 'Kenya Guzman',
  },
  {
    name: 'email',
    placeholder: 'Email Address',
    style: styles.textInput,
    keyboardType: 'email-address',
    editable: true,
    defaultValue: 'kenyaguzmanp@gmail.com',
  },
  {
    name: 'phoneNumber',
    placeholder: 'Phone Number',
    style: styles.textInput,
    keyboardType: 'phone-pad',
    editable: true,
    onPressEdit: () => {
      console.log('🚀 ~ file: PatientForm.tsx:38 ~ onPressEdit:');
    },
  },
  {
    name: 'age',
    placeholder: 'Age',
    style: styles.textInput,
    keyboardType: 'numeric',
    defaultValue: '30',
    editable: false,
    onPressEdit: () => {
      console.log('🚀 ~ file: PatientForm.tsx:38 ~ onPressEdit:');
    },
  },
  {
    name: 'weight',
    placeholder: 'Weight',
    style: styles.textInput,
    keyboardType: 'numeric',
    editable: true,
    onPressEdit: () => {
      console.log('🚀 ~ file: PatientForm.tsx:38 ~ onPressEdit:');
    },
  },
  {
    name: 'bmi',
    placeholder: 'BMI',
    style: styles.textInput,
    keyboardType: 'numeric',
    editable: true,
    onPressEdit: () => {
      console.log('🚀 ~ file: PatientForm.tsx:38 ~ onPressEdit:');
    },
  },
];
