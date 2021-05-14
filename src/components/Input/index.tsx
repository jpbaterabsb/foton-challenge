import React, { useRef, RefObject } from 'react';

import { InputBox, IconView, Input } from './styles';
import { TextInput, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { SvgProps } from "react-native-svg";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type InputProps = React.ComponentProps<typeof TextInput> & React.ComponentProps<typeof Shadow> & {
  icon?: React.ComponentType<SvgProps>;
  onClear?: any;
};

type Func = (v?: any) => void;

export const BookInput: React.FC<InputProps> = ({
  icon: Icon,
  onChangeText,
  distance,
  startColor,
  radius,
  numberOfLines = 1,
  multiline,
  onClear
}) => {
  const inputRef = useRef<TextInput>();
  return (
    <Shadow
      distance={distance ? distance : undefined}
      startColor={startColor ? startColor : 'rgba(212, 173, 134, 0.122623)'}
      offset={[5, 5]}
      radius={radius ? radius : 10}
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
          onChangeText={onChangeText}
          numberOfLines={numberOfLines}
          multiline={multiline}
          ref={inputRef}
        />
        {onClear && (
          <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => {
              inputRef?.current?.clear();
              onClear();
            }}>
              <Ionicons name="close-circle" size={24} color="#F0F0F0" />
            </TouchableOpacity>
          </View>
        )}
      </InputBox>
    </Shadow>
  );
}

export default Input;