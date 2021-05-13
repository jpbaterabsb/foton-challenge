import React from 'react';
import Search from '../../../assets/svg/search.svg';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { BookInput } from '../../components/Input';
import _ from 'lodash';

import {
  Header,
  TitleBox,
  BookCover,
  BookView,
  FlatBook,
  BookInfoBox,
  AuthorText
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Title } from '../../styles';
import { Shadow } from 'react-native-shadow-2';
import { Book } from '../../types/Book';
import { DEFAULT_BOOK_COVER } from '../../constants';

const books: Book[] = _.range(1, 8).map(key => (
  {
    id: key.toString(),
    coverBookUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847',
    name: 'legal',
    caption: 'bom',
    author: 'Jonathan',
    description: 'How do successful companies create products people can’t put down? Why do some products capture widespread attention while others flop?Why do some products capture widespread attention while others flop?Why do some products capture widespread attention while others flop?'
  }
));

function configBooks(books: Book[]): Book[] {
  const number = books.length % 3;

  if (number === 2) {
    return _.concat(books, _.fill(Array(number), { id: _.random(books.length, books.length + 3).toString(), hidden: true }))
  }

  return books;
}

type BooksParams = {
  item: Book;
  navigation: NavigationProp<ParamListBase>;
};


const Books = ({ item, navigation }: BooksParams) => {
  const goToBook = (id: string) => {
    navigation.navigate('Book', {
      screen: 'Detail',
      params: { book: item },
    });
  };

  return (
    <BookView key={item.id}>
      {!item.hidden && (
        <Shadow
          offset={[0, 2]}
          radius={5}
          startColor="rgba(229, 229, 229, 0.6)"
        >
          <TouchableOpacity onPress={() => goToBook(item.id.toString())}>
            <BookCover
              source={item.coverBookUrl ? { uri: item.coverBookUrl } : DEFAULT_BOOK_COVER}
            >
            </BookCover>

          </TouchableOpacity>
        </Shadow>
      )}
      <BookInfoBox>
        <Title bold size={12} color={'rgba(49, 49, 49, 0.8)'}>{item.name}</Title>
        <AuthorText>{item.author}</AuthorText>
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
      <FlatBook
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={configBooks(books)}
        renderItem={({ item }) => Books({ item, navigation })}
        numColumns={3}
      />
    </Container>
  );
}