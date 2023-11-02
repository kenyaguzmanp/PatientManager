import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MedsProps {}

export const Meds: FC<MedsProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Meds</Text>
      </View>
    </SafeAreaView>
  );
};
