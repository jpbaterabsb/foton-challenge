import styled, { ReactNativeThemedStyledFunction } from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions, Text, Platform, FlatList } from 'react-native';
import { Book } from '../../types/Book';


const { height, width } = Dimensions.get('window');
const statusBarHeight = Constants.statusBarHeight;
const defaultPaddingHeight = height * 0.07;
const defaultPaddingWidth = width * 0.05;

export const InputBox = styled.View`
  height: 45px;
  display: flex;
  flex-direction: row;
  background: #FDFCFC;
  border-radius: 10px;
  width: ${_ => `${width - defaultPaddingWidth * 2}px`}
`;

export const Icon = styled.View`
  height: 45px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  height: 45px;
  width: ${_ => `${width - 45 - defaultPaddingWidth * 2}px`};
  font-family: 'SFProText';
  color: #54565A;
`;

export const Header = styled.View`
  display: flex;
  padding: ${_ => `${defaultPaddingHeight}px ${defaultPaddingWidth}px 0px ${defaultPaddingWidth}px`}
`;


export const TitleBox = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;


export const AuthorText = styled.Text<{ color?: string, bold?: boolean, size?: number }>`
  font-family: 'Roboto' ;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: rgba(49, 49, 49, 0.8);
  &:before {
    content: "by ";
  }
`;

export const Body = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}))`
  margin-top: 36px;
  background: red;
  padding: ${_ => `0px ${defaultPaddingWidth}px 0px ${defaultPaddingWidth}px`}
`;

export const FlatBook = styled(FlatList as new () => FlatList<Book>)`
  margin-top: 36px;
  
  padding: ${_ => `0px ${defaultPaddingWidth}px 0px ${defaultPaddingWidth}px`};
`;


export const BookView = styled.View.attrs(_ => ({
}))`
  height: 193px;
  width: 105px;
  margin-bottom: 28px;
`;

export const BookCover = styled.ImageBackground.attrs(_ => ({
  imageStyle: {
    borderRadius: 5,
  }
}))
  `
  height: 153px;
  width: 105px;
`;

export const BookInfoBox = styled.View`
  flex-direction: column;
`;