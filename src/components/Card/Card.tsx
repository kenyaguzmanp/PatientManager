import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Button, Card as PaperCard, Text } from 'react-native-paper';
import { ScreenNames } from '../../screens/ScreenNames';
import { HomeScreenNavigationProp } from '../../navigation/types';
import i18n from '../../i18n/locales';
import { useDispatch, useSelector } from 'react-redux';
import { getPatientById } from '../../store/selectors';
import { setSelectedPatient } from '../../store/slices/patientsSlice';
import styles from './style';
import { View } from 'react-native';

interface CardProps {
  id: string;
  title: string;
  description: string;
  cover?: string;
  website?: string;
  onPressButton?: () => void;
}

const Card: FC<CardProps> = ({ id, title, description, cover, website }: CardProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const currentPatient = useSelector(getPatientById(id)) || null;
  const dispatch = useDispatch();

  const handleOnPressButton = () => {
    dispatch(setSelectedPatient(currentPatient));
    navigation.navigate(ScreenNames.PatientDetail);
  };

  return (
    <PaperCard>
      <View style={styles.cover}>
        {cover && <PaperCard.Cover style={styles.imageContainer} source={{ uri: cover }} />}
        <View style={styles.titleContainer}>
          <Text style={styles.centered} variant="titleLarge">
            {title}
          </Text>
          {website && (
            <Text style={styles.centered} variant="labelMedium">
              {website}
            </Text>
          )}
        </View>
      </View>
      <PaperCard.Content>
        <Text style={styles.description} variant="bodyMedium" numberOfLines={3}>
          {description}
        </Text>
      </PaperCard.Content>
      <PaperCard.Actions>
        <Button onPress={handleOnPressButton}>{i18n.t('SEE_MORE')}</Button>
      </PaperCard.Actions>
    </PaperCard>
  );
};

export default Card;
