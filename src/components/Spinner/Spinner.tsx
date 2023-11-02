import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

type spinnerSize = number | 'small' | 'large' | undefined;

interface SpinnerProps {
  animating?: boolean;
  size?: spinnerSize;
}

const Spinner = ({ animating = true, size = 'small' }: SpinnerProps) => (
  <ActivityIndicator size={size} animating={animating} color={MD2Colors.red800} />
);

export default Spinner;
