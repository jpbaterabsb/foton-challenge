import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const statusBarHeight = Constants.statusBarHeight;
const defaultPaddingHeight = height * 0.07;
const defaultPaddingWidth = width * 0.05;



export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background: #FFFCF9;
  padding-top: ${_ => `${statusBarHeight}px`};
`;

export const Title = styled.Text<{ color?: string, bold?: boolean, size?: number }>`
  font-family: ${({ bold }) => bold ? 'SFProBold' : 'SFProDisplay'} ;
  margin-right: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ size }) => size ? `${size}px` : '24px'};
  line-height: 29px;
  color: ${({ color }) => color ? color : '#54565A'};
`;