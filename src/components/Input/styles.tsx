import styled, { ReactNativeThemedStyledFunction } from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions, Text, Platform, TextInput } from 'react-native';
import React from 'react';


const { height, width } = Dimensions.get('window');
const statusBarHeight = Constants.statusBarHeight;
const defaultPaddingHeight = height * 0.07;
const defaultPaddingWidth = width * 0.05;

export const InputBox = styled.View<{numberOfLines: number}>`
  height: ${({numberOfLines}) =>  numberOfLines ? `${numberOfLines * 45}px` : `45px`};;
  display: flex;
  flex-direction: row;
  background: #FDFCFC;
  border-radius: 10px;
  width: ${_ => `${width - defaultPaddingWidth * 2}px`}
`;

export const IconView = styled.View`
  height: 45px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type InputProps = {hasIcon: boolean} & React.ComponentProps<typeof TextInput>;

export const Input = styled.TextInput<InputProps>`
  height: ${({numberOfLines}) =>  numberOfLines ? `${numberOfLines * 45}px` : `45px`};
  width: ${_ => `${width - 45 - defaultPaddingWidth * 2}px`};
  font-family: 'SFProText';
  padding-left: ${({hasIcon}) => hasIcon ? '0px' : `${20}px`};
  color: #54565A;
`;