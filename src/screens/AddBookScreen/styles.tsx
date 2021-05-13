import styled, { ReactNativeThemedStyledFunction } from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions, Text, Platform, Button } from 'react-native';
import React from 'react';


const { height, width } = Dimensions.get('window');
const statusBarHeight = Constants.statusBarHeight;
const defaultPaddingHeight = height * 0.07;
const defaultPaddingWidth = width * 0.05;



export const TitleBox = styled.View`
  margin-top: 0px;
  flex-direction: row;
`;

export const PageTitle = styled.Text`
  font-family: 'SFProBold';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #FF6978;
  margin: ${() => `53px 20px 0px` };
`;

export const ScrollFormView = styled.ScrollView`
  flex: 1;
`;

export const FormView = styled.View`
  flex: 1;
  padding-bottom: 120px;
`;

export const AuthorText = styled.Text<{ color?: string, bold?: boolean, size?: number }>`
  font-family: 'Roboto' ;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: rgba(49, 49, 49, 0.8);
`;

export const ButtonView = styled.View`
  position: absolute;
  width: ${width-40}px;
  bottom: 38px;
  left: 20px;
  right: 20px;
`;