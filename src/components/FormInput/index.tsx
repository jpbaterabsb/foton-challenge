import React from 'react';
import { BookInput , InputProps} from '../Input';

import { Container , FormLabel} from './styles';

export type FormInputProps = InputProps & {
  label: string;
};

export const FormInput: React.FC<FormInputProps> = ({label, ...rest}) => {
  return (
    <Container>
      <FormLabel>{label}</FormLabel>
      <BookInput  {...rest} />
    </Container>
  );
}