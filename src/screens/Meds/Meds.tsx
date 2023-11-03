import React, { FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HealthList } from '../../components/HealthList/HealthList';

interface MedsProps {}

export const Meds: FC<MedsProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <HealthList />
      </View>
    </SafeAreaView>
  );
};
