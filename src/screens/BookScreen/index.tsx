import React, { Fragment } from 'react';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import { Container, BookTitleBox, BookTitle, BookAuthor, DescriptionView, Description, BottomView, BottomViewBox, BottomMenuTitle, Divider } from './styles';
import { Dimensions, ImageBackground, View, Image, Text } from 'react-native';
import image from '../../../assets/images/book-background.png';
import sprint from '../../../assets/images/Sprint.png';
import { Ionicons, Feather } from '@expo/vector-icons';

import { Shadow } from 'react-native-shadow-2';


const BottomMenu: React.FC = () => {
  return (
      <BottomView>
        <BottomViewBox>
          <Feather name="book-open" size={24} color="#CFCBD2" />
          <BottomMenuTitle>Read</BottomMenuTitle>
        </BottomViewBox>
        <Divider />
        <BottomViewBox>
          <Feather name="headphones" size={24} color="#CFCBD2" />
          <BottomMenuTitle>Listen</BottomMenuTitle>
        </BottomViewBox>
        <Divider />
        <BottomViewBox>
          <Feather name="share" size={24} color="#CFCBD2" />
          <BottomMenuTitle>Share</BottomMenuTitle>
        </BottomViewBox>
      </BottomView>
  );
}

export const BookScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageBackground source={image} style={{
        flex: 1,
        width: '100%',
        height: 282
      }}
        imageStyle={{
          resizeMode: 'stretch'
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{
            width: Dimensions.get('window').width,
            marginTop: 55,
            marginLeft: 33,
            marginBottom: 15
          }}>
            <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={() => navigation.goBack()} />
          </View>
          <View
            style={{ alignSelf: 'center' }}
          >
            <Shadow
              distance={8} startColor={'#EEE'}
            >
              <Image source={sprint}
                width={151}
                height={234}
              >
              </Image>
            </Shadow>
          </View>
          <BookTitleBox>
            <Text>
              <BookTitle bold>
                Hooked:
              </BookTitle>
              <BookTitle >
                {" "}
              </BookTitle>
              <BookTitle >
                How to Build Habid-Forming Products
              </BookTitle>
            </Text>
            <BookAuthor>
              Nir Eyal
            </BookAuthor>
          </BookTitleBox>
          <DescriptionView>
            <Description>
              How do successful companies create products people can’t put down? Why do some products capture widespread attention while others flop?Why do some products capture widespread attention while others flop?Why do some products capture widespread attention while others flop?
              </Description>
          </DescriptionView>
        </View>
      </ImageBackground>
      <BottomMenu />
    </Container>
  );
}