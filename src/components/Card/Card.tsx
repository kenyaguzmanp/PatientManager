import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Button, Card as PaperCard, Text } from 'react-native-paper';
import { ScreenNames } from '../../screens/ScreenNames';
import { HomeScreenNavigationProp } from '../../navigation/types';
import i18n from '../../i18n/locales';
import { useDispatch, useSelector } from 'react-redux';
import { getPatientById } from '../../store/selectors';
import { setSelectedPatient } from '../../store/slices/patientsSlice';

interface CardProps {
  id: string;
  title: string;
  description: string;
  cover?: string;
  onPressButton?: () => void;
}

const Card: FC<CardProps> = ({ id, title, description, cover }: CardProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const currentPatient = useSelector(getPatientById(id)) || null;
  const dispatch = useDispatch();

  const handleOnPressButton = () => {
    dispatch(setSelectedPatient(currentPatient));
    navigation.navigate(ScreenNames.PatientDetail);
  };

  return (
    <PaperCard>
      {cover && <PaperCard.Cover source={{ uri: cover }} />}
      <PaperCard.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium" numberOfLines={3}>
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
