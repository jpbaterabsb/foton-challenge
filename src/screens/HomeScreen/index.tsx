import React, { Fragment } from 'react';
import Search from '../../../assets/svg/search.svg';
import { useNavigation } from '@react-navigation/native';
import { BookInput } from '../../components/Input';
import _ from 'lodash';

import {
  Header,
  Icon,
  Input,
  InputBox,
  TitleBox,
  Body,
  BookCover,
  BookView,
  FlatBook,
  BookInfoBox,
  AuthorText
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Title } from '../../styles';
import { Shadow } from 'react-native-shadow-2';

const shadowOpt = {
  width: 105,
  height: 153,
  color: "#000",
  border: 5,
  radius: 5,
  opacity: 0.1,
  x: 0,
  y: 2,
  style: { marginVertical: 5 }
};


const books = _.range(1, 8).map(key => (
  {
    id: key
  }
));

const configBooks = (books: any[]) => {
  const number = books.length % 3;

  if (number === 2) {
    return _.concat(books, _.fill(Array(number), { id: _.random(books.length, books.length + 3), hidden: true }))
  }

  return books;
}



const Books = ({ item, navigation }: { item: { id: string, hidden?: boolean }, navigation: any }) => {
  const goToBook = (id: string) => {
    navigation.navigate('Book', {
      id
    });
  };

  return (
    <BookView key={item.id}>
      {!item.hidden && (
        <Shadow
          // distance={1}
          offset={[0, 2]}
          radius={5}
          startColor="rgba(229, 229, 229, 0.6)"
        >
          <TouchableOpacity onPress={() => goToBook(item.id)}>

            <BookCover
              source={{ uri: "https://editoraflutuante.com.br/wp-content/uploads/2018/08/Quarta-Capa-Frente-1.jpg" }}
            >
            </BookCover>

          </TouchableOpacity>
        </Shadow>
      )}
      <BookInfoBox>
        <Title bold size={12} color={'rgba(49, 49, 49, 0.8)'}>The One Thing</Title>
        <AuthorText>by Gary Keller</AuthorText>
      </BookInfoBox>
    </BookView>
  )
};


export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <BookInput icon={Search} />
        <TitleBox>
          <Title>
            Hi,
            </Title>
          <Title bold color='#FF6978'>
            Mehmed Al Fatihr
            </Title>
          <Title>
            👋
            </Title>
        </TitleBox>
      </Header>
      {/* <Body> */}
      <FlatBook
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={configBooks(books)}
        renderItem={({ item }) => Books({ item, navigation })}
        numColumns={3}
      />
      {/* </Body> */}
    </Container>
  );
}