import { isEmpty } from 'lodash';
import { Patient } from '../../types/patient/intex';
import { PatientSimpleInput } from './PatientForm';
import styles from './styles';

export const PATIENT_FORM_INPUTS: Array<PatientSimpleInput> = [
  {
    name: 'name',
    placeholder: 'Full Name',
    style: styles.textInput,
    editable: false,
  },
  {
    name: 'email',
    placeholder: 'Email Address',
    style: styles.textInput,
    keyboardType: 'email-address',
    editable: true,
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

const getPatientFormInputs = () => {
  let fields = {};
  PATIENT_FORM_INPUTS.forEach((formInput) => {
    fields = {
      ...fields,
      [formInput.name]: null,
    };
  });
  return fields;
};

export const PATIENT_FORM_INPUTS_FIELDS = getPatientFormInputs();

export const getMappedFormatInputs = (patientDetails?: Patient) => {
  const isEmptyDetails = isEmpty(patientDetails);
  const mappedPatientFormInputs = PATIENT_FORM_INPUTS.map((formInput) => {
    return {
      ...formInput,
      defaultValue: isEmptyDetails ? '' : patientDetails[formInput.name],
    };
  });

  return mappedPatientFormInputs;
};
