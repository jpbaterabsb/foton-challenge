import React, { Fragment } from 'react';
import Search from '../../../assets/svg/search.svg';
import { BoxShadow } from 'react-native-shadow';
import { useNavigation } from '@react-navigation/native';
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
        <TouchableOpacity onPress={() => goToBook(item.id)}>
          <BoxShadow setting={shadowOpt}>
            <BookCover
              source={{ uri: "https://editoraflutuante.com.br/wp-content/uploads/2018/08/Quarta-Capa-Frente-1.jpg" }}
            >
            </BookCover>
          </BoxShadow>
        </TouchableOpacity>
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
        <InputBox
          style={{
            elevation: 1,
          }}
        >
          <Icon>
            <Search width={16} height={16} />
          </Icon>
          <Input />
        </InputBox>
        <TitleBox>
          <Title>
            Hi,
            </Title>
          <Title bold color='#FF6978'>
            Mehmed Al Fatih
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
        renderItem={({item}) => Books({item, navigation})}
        numColumns={3}
      />
      {/* </Body> */}
    </Container>
  );
}