import React, { FC } from 'react';
import { View, Text } from 'react-native';

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <View>
      <Title> Title2</Title>
      <Text>Card</Text>
    </View>
  );
};

export default Card;
