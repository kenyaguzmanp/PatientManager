import React, { FC } from 'react';
import { View } from 'react-native';
import { HealthItem as HealthItemType } from '../HealthList/HealthList';
import { MD3LightTheme, Text } from 'react-native-paper';
import { LugsIcon } from '../SvgIcons/LugsIcon/LugsIcon';
import styles from './style';
import { MedsIcon } from '../SvgIcons/MedsIcon/MedsIcon';
import { LabIcon } from '../SvgIcons/LabIcon/LabIcon';
import { VaxineIcon } from '../SvgIcons/VaxineIcon/VaxineIcon';

interface HealthItemProps {
  item: HealthItemType;
  containerColor?: string;
}

const iconsMap = {
  LUGS: <LugsIcon />,
  MEDS: <MedsIcon />,
  LAB: <LabIcon />,
  VAXINE: <VaxineIcon />,
};

export const HealthItem: FC<HealthItemProps> = ({
  item,
  containerColor = MD3LightTheme.colors.primaryContainer,
}: HealthItemProps) => {
  return (
    <View style={[styles.container, { backgroundColor: containerColor }]}>
      <Text variant="titleLarge">{item.name}</Text>
      <Text variant="bodyLarge">{item.value}</Text>
      <View style={styles.iconContainer}>{iconsMap[item.iconName]}</View>
    </View>
  );
};
