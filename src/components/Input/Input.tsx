import { FormikErrors } from 'formik';
import { noop } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { View, Text, TextInput, ViewStyle } from 'react-native';
import { PatientFormValues } from '../../types/patient/intex';

interface InputProps {
  name: keyof PatientFormValues;
  placeholder?: string;
  style?: ViewStyle;
  keyboardType?: 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url';
  secureTextEntry?: boolean;
  editable?: boolean;
  onPressEdit?: () => void;
  handleChange: (value: string) => void;
  handleBlur: () => undefined;
  errors?: FormikErrors<PatientFormValues>;
  values: PatientFormValues;
  defaultValue?: string;
  setField: (field: string, value: unknown) => Promise<void>;
}

export const Input: FC<InputProps> = ({ ...props }) => {
  const { name, handleChange, values, errors } = props;
  const [shouldEdit, setShouldEdit] = useState<boolean | undefined>(props?.editable);

  useEffect(() => {
    const syncDefaultValue = async () => {
      if (props?.defaultValue) {
        await props.setField(props.name, props.defaultValue);
      }
    };

    syncDefaultValue().catch((error) => {
      console.log('🚀 ~ file: Input.tsx:33 ~ syncDefaultValue ~ error:', error);
    });
  }, []);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text>{props.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <TextInput
            {...props}
            value={values[name]}
            onChangeText={(value) => {
              handleChange(value);
            }}
            onBlur={props?.handleBlur ? props.handleBlur : noop}
            defaultValue={props?.defaultValue}
            editable={shouldEdit}
          />
        </View>
        {props?.onPressEdit && props?.defaultValue && (
          <Text
            onPress={() => {
              setShouldEdit(true);
              if (props?.onPressEdit) {
                props.onPressEdit();
              }
            }}
            style={{ width: 24, height: 24, padding: 5, backgroundColor: 'gray' }}
          >
            E
          </Text>
        )}
      </View>
      {errors && errors[name] && (
        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors[name]}</Text>
      )}
    </View>
  );
};
