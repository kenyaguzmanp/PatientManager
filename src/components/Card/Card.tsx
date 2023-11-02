import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Button, Card as PaperCard, Text } from 'react-native-paper';
import { ScreenNames } from '../../screens/ScreenNames';
import { HomeScreenNavigationProp } from '../../navigation/types';

interface CardProps {
  title: string;
  description: string;
  cover?: string;
}

const Card: FC<CardProps> = ({ title, description, cover }: CardProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
        <Button onPress={() => navigation.navigate(ScreenNames.Patients)}>otro</Button>
        <Button onPress={() => navigation.navigate(ScreenNames.PatientDetail)}>Ver mas</Button>
      </PaperCard.Actions>
    </PaperCard>
  );
};

export default Card;
