import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { enhancedRetrieveUsers } from '../../api/services';
import { noop } from 'lodash';
import { useSelector } from 'react-redux';
import { getPatients } from '../../store/selectors';
import { PatientsList } from '../../components/PatientsList/PatientsList';
import i18n from '../../i18n/locales';
import styles from './style';
import { Header } from '../../components/Header/Header';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../ScreenNames';
import { HomeScreenNavigationProp } from '../../navigation/types';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    const patientsPromise = async () => {
      await enhancedRetrieveUsers({
        onPreRequest: noop,
        onSuccess: noop,
        onError: noop,
        setLoadingState: noop,
      });
    };
    patientsPromise().catch((e) => console.log(e));
  }, []);
  const patients = useSelector(getPatients);

  return (
    <View style={styles.container}>
      <Header title={i18n.t('HOME_TITLE')}>
        <Button
          style={styles.buttonHeader}
          mode="text"
          onPress={() => navigation.navigate(ScreenNames.Patients)}
        >
          {i18n.t('SEE_ALL_PATIENTS_BUTTON_TITLE')}
        </Button>
      </Header>
      <View>
        <PatientsList patients={patients.slice(0, 5)} />
      </View>
    </View>
  );
};
