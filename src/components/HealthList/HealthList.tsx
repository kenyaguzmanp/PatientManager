import React, { FC } from 'react';
import { View } from 'react-native';
import { HealthItem } from '../HealthItem/HealthItem';
import styles from './style';
import { MD3LightTheme } from 'react-native-paper';

interface HealthListProps {}

export interface HealthItem {
  id: string;
  name: string;
  value: string;
  iconName: string;
  containerColor?: string;
}

const items: HealthItem[] = [
  {
    id: '1',
    name: 'Lugs',
    value: '129',
    iconName: 'LUGS',
    containerColor: MD3LightTheme.colors.primaryContainer,
  },
  {
    id: '2',
    name: 'Meds',
    value: '23',
    iconName: 'MEDS',
    containerColor: MD3LightTheme.colors.secondaryContainer,
  },
  {
    id: '3',
    name: 'Laboratory',
    value: '4',
    iconName: 'LAB',
    containerColor: MD3LightTheme.colors.tertiaryContainer,
  },
  {
    id: '4',
    name: 'Vaxines',
    value: '3',
    iconName: 'VAXINE',
    containerColor: MD3LightTheme.colors.surfaceVariant,
  },
];

export const HealthList: FC<HealthListProps> = () => {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        return <HealthItem key={item.id} item={item} containerColor={item.containerColor} />;
      })}
    </View>
  );
};
