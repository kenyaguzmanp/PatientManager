import React, { FC } from 'react';
import { Formik, FormikErrors } from 'formik';
import { View, Button, ViewStyle } from 'react-native';
import * as Yup from 'yup';
import styles from './styles';
import { Input } from '../Input/Input';
import { Patient, PatientFormValues } from '../../types/patient/intex';
import { getMappedFormatInputs } from './patientInputs';
import { useDispatch } from 'react-redux';
import { updatePatientFields } from '../../store/slices/patientsSlice';

interface PatientFormProps {
  patient: Patient;
}

const patientFormInitialValues: PatientFormValues = {
  name: '',
  email: '',
  phoneNumber: '',
  age: '',
  weight: '',
  bmi: '',
};

export interface PatientSimpleInput {
  name: keyof PatientFormValues;
  placeholder?: string;
  style?: ViewStyle;
  editable?: boolean;
  keyboardType?: 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url';
  secureTextEntry?: boolean;
  onPressEdit?: () => void;
  errors?: FormikErrors<PatientFormValues>;
  defaultValue?: string;
}

export const PatientForm: FC<PatientFormProps> = ({ patient }: PatientFormProps) => {
  const mappedInputs = getMappedFormatInputs(patient);
  const dispatch = useDispatch();
  // console.log('🚀 ~ file: PatientForm.tsx:36 ~ mappedInputs:', { mappedInputs });

  const onSubmit = (values: PatientFormValues) => {
    console.log('🚀 ~ file: PatientForm.tsx:35 ~ values:', values);
    dispatch(updatePatientFields({ patient, values }));
  };

  const schema = Yup.object({
    name: Yup.string().required('Please, provide your name!'),
    email: Yup.string().email().required(),
    phoneNumber: Yup.string().min(4).max(10, 'Password should not excced 10 chars.'),
    age: Yup.number(),
    weight: Yup.number(),
    bmi: Yup.number(),
  });

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Formik
          initialValues={patientFormInitialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
          validateOnChange
        >
          {({ handleSubmit, values, errors, setFieldValue, setFieldTouched }) => {
            const setField = async (field: string, value: unknown) => {
              await setFieldValue(field, value);
              await setFieldTouched(field, true);
            };

            return (
              <>
                {mappedInputs.map((input, index) => {
                  return (
                    <View key={`${input.name}-${index}`} style={styles.container}>
                      <View>
                        <Input
                          {...input}
                          values={values}
                          handleChange={(value: string) => void setField(input.name, value)}
                          handleBlur={() => void setFieldTouched(input.name, true)}
                          setField={setField}
                          errors={errors}
                        />
                      </View>
                    </View>
                  );
                })}
                <Button onPress={() => handleSubmit()} title="Submit" />
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};
