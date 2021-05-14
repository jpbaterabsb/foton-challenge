import React from 'react';
import { Container } from './styles';
import { ActivityIndicator } from 'react-native';

export const Loader: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color="#000" size='large' />
    </Container>
  );
}