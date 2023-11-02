import React, { FC, ReactNode } from 'react';
import styles from './style';
import { Surface, Text } from 'react-native-paper';
import { View } from 'react-native';

interface HeaderProps {
  title?: string;
  children?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ title = '', children }: HeaderProps) => {
  return (
    <Surface style={styles.surface} elevation={4}>
      <View style={styles.content}>
        <Text variant="headlineLarge">{title}</Text>
        {children && children}
      </View>
    </Surface>
  );
};
