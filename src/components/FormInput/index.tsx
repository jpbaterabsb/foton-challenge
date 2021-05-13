import React from 'react';
import { Text, View } from 'react-native';
import { BookInput , InputProps} from '../Input';

import { Container, FormLabel, ErrorText } from './styles';

export type FormInputProps =  {
  label?: string;
  error?: { message: string};
} & InputProps;

export const FormInput: React.FC<FormInputProps> = ({label, error, ...rest}) => {
  return (
    <Container>
      <FormLabel>{label}</FormLabel>
      <BookInput  {...rest} />
      {error && <ErrorText>{error.message}</ErrorText>}
    </Container>
  );
}