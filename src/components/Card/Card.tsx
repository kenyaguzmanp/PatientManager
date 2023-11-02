import React, { FC } from 'react';
import { Button, Card as PaperCard, Text } from 'react-native-paper';

interface CardProps {
  title: string;
  description: string;
  cover?: string;
}

const Card: FC<CardProps> = ({ title, description, cover }: CardProps) => {
  return (
    <PaperCard>
      {cover && <PaperCard.Cover source={{ uri: cover }} />}
      <PaperCard.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{description}</Text>
      </PaperCard.Content>
      <PaperCard.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </PaperCard.Actions>
    </PaperCard>
  );
};

export default Card;
