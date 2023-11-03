import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import styles from './style';
import i18n from '../../i18n/locales';
import { useSelector } from 'react-redux';
import { getSelectedPatient } from '../../store/selectors';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ScreenNames } from '../ScreenNames';
import { PATIENT_TEXTS_ELEMENTS } from './utils';

export const PatientDetail: FC = () => {
  const selectedPatient = useSelector(getSelectedPatient);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <Button onPress={() => navigation.navigate(ScreenNames.EditPatientDetail)}>
        {i18n.t('EDIT_DETAILS')}
      </Button>
      {selectedPatient &&
        PATIENT_TEXTS_ELEMENTS.map((field) => {
          const hasField = !!selectedPatient?.[field.name] && selectedPatient[field.name] !== '';

          return (
            hasField && (
              <View>
                {field?.label?.text && (
                  <Text style={field?.label?.style} variant={field?.label?.variant}>
                    {field.label.text}
                  </Text>
                )}
                <Text style={field?.content?.style} variant={field?.content?.variant}>
                  {selectedPatient[field.name]}
                </Text>
              </View>
            )
          );
        })}
    </ScrollView>
  );
};
