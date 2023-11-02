import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Card />
      </View>
    </SafeAreaView>
  );
};
