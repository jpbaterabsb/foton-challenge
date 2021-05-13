import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';
import { ButtonLayout, ButtonText } from './styles';



export const PrimaryButton: React.FC<{ title: string } & React.ComponentProps<typeof TouchableOpacity>> = ({ title, ...rest }) => {
  return (
    <Shadow
      offset={[5,5]}
      distance={40}
      radius={10}
      startColor='rgba(212, 173, 134, 0.4926)'
    >
      <TouchableOpacity
        {...rest}
      >
        <ButtonLayout>
          <ButtonText>{title}</ButtonText>
        </ButtonLayout>
      </TouchableOpacity>
    </Shadow>
  );
}