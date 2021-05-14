import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

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
  padding-bottom: 134px;
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
export const BackArrowView = styled.View`
  width: ${Dimensions.get('window').width}px;
  margin-top: 55px;
  margin-left: 33px;
  margin-bottom: 15px;
`;


export const WallPaper = styled.ImageBackground.attrs(() => ({
  imageStyle: {
    resizeMode: 'stretch'
  }
}))`
  width: 100%;
  height: 282px;
`;

