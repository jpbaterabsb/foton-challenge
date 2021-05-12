import styled, { ReactNativeThemedStyledFunction } from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';


const { height, width } = Dimensions.get('window');
const statusBarHeight = Constants.statusBarHeight;
const defaultPaddingHeight = height * 0.07;
const defaultPaddingWidth = width * 0.05;

export const Container = styled.View`
  display: flex;
  flex: 1;
  background:  #FFFCF9;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 282px;
`;


export const BookTitleBox = styled.View`
  margin: 32px 20px 10px 20px;
`;

export const BookAuthor = styled.Text`
  font-family: 'SFProDisplay';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.670588px;
  color: #FF6978;
  margin-top: 7px;
`;


export const DescriptionView = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1, marginHorizontal: 20 }
})`
`;

export const Description = styled.Text`
  font-family: 'SFProText';
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.2px;

  color: rgba(49, 49, 49, 0.6);
`;

export const BookTitle = styled.Text.attrs(() => ({
  numberOfLines: 5
})) <{ bold?: boolean }>`
  font-family: ${({ bold }) => bold ? 'SFProBold' : 'SFProDisplay'} ;
  font-style: normal;
  margin-right: 10px;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 1.5px;
`;


export const BottomView = styled.View`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 53px;
  height: 56px;
  elevation: 8;
  background: #FFF;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;

`;

export const BottomViewBox = styled.View`
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.View`
  width: 0.1px;
  height: 16px;
  border: 1px solid rgba(151, 151, 151, 0.2);
`;

export const BottomMenuTitle = styled.Text`
  font-family: 'SFProBold';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;
  color: #3F4043;
  margin-left: 10px;
`;

