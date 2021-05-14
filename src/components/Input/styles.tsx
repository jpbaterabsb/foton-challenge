import styled from 'styled-components/native';
import { Dimensions, TextInput } from 'react-native';
import React from 'react';


const { width } = Dimensions.get('window');
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

type InputProps = {hasIcon: boolean, ref: any, hasClear: boolean} & React.ComponentPropsWithRef<typeof TextInput>;

export const Input = styled.TextInput<InputProps>`
  height: ${({numberOfLines}) =>  numberOfLines ? `${numberOfLines * 45}px` : `45px`};
  width: ${({ hasClear }) => hasClear ? `${width - 85 - defaultPaddingWidth * 2}px` : `${width - 45 - defaultPaddingWidth * 2}px`};
  font-family: 'SFProText';
  padding-left: ${({hasIcon}) => hasIcon ? '0px' : `${20}px`};
  color: #54565A;
`;