import React, { Fragment } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import _ from 'lodash';
import { Container, BookTitleBox, BookTitle, BookAuthor, DescriptionView, Description, BackArrowView } from './styles';
import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Shadow } from 'react-native-shadow-2';
import { Book } from '../../types/Book';
import { BottomMenu } from '../../components/BottomMenu';
import { BACKGROUND_DEFAULT_IMAGE_DETAILS, DEFAULT_BOOK_COVER } from '../../constants';

type ParamList = {
  Book: {
    book: Book;
  };
};

const classes = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1,
    width: '100%',
    height: 282
  },
  imageBackgroundImageStyle: {
    resizeMode: 'stretch'
  },
  image: {
    width: 151,
    height: 234
  }
});


export const BookScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Book'>>();
  const { book } = route.params;

  return (
    <Container>
      <ImageBackground source={BACKGROUND_DEFAULT_IMAGE_DETAILS}
        style={classes.imageBackgroundStyle}
        imageStyle={classes.imageBackgroundImageStyle}
      >
        <View style={{ flex: 1 }}>
          <BackArrowView>
            <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={() => navigation.goBack()} />
          </BackArrowView>
          <View
            style={{ alignSelf: 'center' }}
          >
            <Shadow
              distance={8} startColor={'#EEE'}
            >
              <Image
                source={book.book_cover_url ? { uri: book.book_cover_url } : DEFAULT_BOOK_COVER}
                style={classes.image}
              >
              </Image>
            </Shadow>
          </View>
          <BookTitleBox>
            <Text numberOfLines={2}>
              <BookTitle bold>
                {`${book.name}`}
              </BookTitle>
              {book.caption && (
                <Fragment>
                  <BookTitle >
                    {": "}
                  </BookTitle>
                  <BookTitle >
                    {book.caption}
                  </BookTitle>
                </Fragment>
              )}
            </Text>
            <BookAuthor>
              {book.author}
            </BookAuthor>
          </BookTitleBox>
          <DescriptionView>
            <Description>
              {book.description}
            </Description>
          </DescriptionView>
        </View>
      </ImageBackground>
      <BottomMenu />
    </Container>
  );
}