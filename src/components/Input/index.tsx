import React from 'react';

import { InputBox, IconView, Input } from './styles';
import { TextInputChangeEventData, NativeSyntheticEvent, TextInput } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

export type InputProps = React.ComponentProps<typeof TextInput> & React.ComponentProps<typeof Shadow> & {
  icon?: React.ComponentType<{ width: number, height: number }>;
};

export const BookInput: React.FC<InputProps> = ({ icon: Icon, onChange, distance, startColor, radius, numberOfLines = 1, multiline }) => {
  return (
    <Shadow
    distance={ distance ? distance : undefined}
    startColor={ startColor ? startColor: 'rgba(212, 173, 134, 0.122623)'}
    offset={[5,5]}
    radius={radius? radius : 10}
    >
      <InputBox
      numberOfLines={numberOfLines}
      >
        {Icon && (
          <IconView>
            <Icon width={16} height={16} />
          </IconView>
        )}
        <Input
          hasIcon={!!Icon}
          onChange={onChange}
          numberOfLines={numberOfLines}
          multiline={multiline}
        />
      </InputBox>
    </Shadow>
  );
}

export default Input;