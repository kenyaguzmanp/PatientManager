import React, { FC } from 'react';
import { Formik, FormikErrors } from 'formik';
import { View, Text, Button, ViewStyle } from 'react-native';
import * as Yup from 'yup';
import styles from './styles';
import { Input } from '../Input/Input';
import { PatientFormValues } from '../../types/patient/intex';
import { patientFormInputs } from './patientInputs';

interface PatientFormProps {
  patientId: string;
}

const patientFormInitialValues: PatientFormValues = {
  fullName: '',
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

export const PatientForm: FC<PatientFormProps> = ({ patientId }) => {
  const onSubmit = (values: PatientFormValues) => {
    console.log('🚀 ~ file: PatientForm.tsx:35 ~ values:', values);
  };

  const schema = Yup.object({
    fullName: Yup.string().required('Please, provide your name!'),
    email: Yup.string().email().required(),
    phoneNumber: Yup.string().min(4).max(10, 'Password should not excced 10 chars.').required(),
    age: Yup.number(),
    weight: Yup.number(),
    bmi: Yup.number(),
  });

  return (
    <View>
      <Text>PatientForm {patientId} </Text>
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
              {patientFormInputs.map((input, index) => {
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
  );
};
