import React, { FC } from 'react';
import { Button, Card as PaperCard, Text } from 'react-native-paper';

interface CardProps {}

const Card: FC<CardProps> = () => {
  return (
    <PaperCard>
      <PaperCard.Content>
        <Text variant="titleLarge">Kenya Guzman</Text>
        <Text variant="bodyMedium">Paciente</Text>
      </PaperCard.Content>
      <PaperCard.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <PaperCard.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </PaperCard.Actions>
    </PaperCard>
  );
};

export default Card;
