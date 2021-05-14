import React, { useEffect, useState } from 'react';
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
import { DEFAULT_BOOK_COVER, ERROR_MESSAGE } from '../../constants';
import { api } from '../../constants';
import { Loader } from '../../components/Loader';
import { Metadata } from '../../types/Metadata';
import { Alert } from 'react-native';


function configBooks(books: Book[]): Book[] {
  const number = books.length % 3;

  if (number === 2) {
    return _.concat(books, _.fill(Array(number), { id: _.uniqueId().toString(), hidden: true }))
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
              source={item.book_cover_url ? { uri: item.book_cover_url } : DEFAULT_BOOK_COVER}
            >
            </BookCover>

          </TouchableOpacity>
        </Shadow>
      )}
      <BookInfoBox>
        <Title bold size={12} color={'rgba(49, 49, 49, 0.8)'} numberOfLines={1}>{item.name}</Title>
        <AuthorText numberOfLines={1}>{item.author}</AuthorText>
      </BookInfoBox>
    </BookView>
  )
};

export type GetBooksResponse = {
  data: Book[],
  meta: Metadata
};

export const HomeScreen: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [stop, setStop] = useState<boolean>(false);
  const [page, setPage] = useState<string>('/?page=1');
  const [error, setError] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  async function load({ paramName, paramPage }: { paramName?: string, paramPage?: string }) {
    try {
      const { data } = await api.get<GetBooksResponse>(`/books?name=${paramName}&${paramPage?.substring(2)}`);
      return data;
    } catch (e) {
    }
  }

  const loadRepositories = async () => {
    try {
      if (!page) {
        return null;
      };
      const d = await load({paramName: name, paramPage: page});
      if(d) {
        setName(name);
        setPage(d.meta.next_page_url);
        setError("");
        setBooks([...books,...d.data]);
      }
    } catch(e) {
      console.log(e);
      return null;
    }
  }

  async function searchBook(name: string) {
    setLoading(true);
    const d = await load({ paramName: name, paramPage: '/?page=1' });
    setLoading(false);
    if(d) {
      setName(name);
      setPage(d.meta.next_page_url);
      setError("");
      setBooks(d.data);
    }
  }


  async function clear() {
    setLoading(true);
    const d = await load({paramName: '', paramPage: '/?page=1'});
    setLoading(false);
    if(d) {
      setName('');
      setPage(d.meta.next_page_url);
      setError("");
      setBooks(d.data);
    }
  }

  const onChangeName = _.debounce(searchBook, 300);

  const ListFooterComponent = () => {
    if (!page) {
      return null;
    };
    return <Loader />;
  };

  useEffect(() => {
    async function init() {
      try {        
        setLoading(true);
        const d = await load({ paramName: '', paramPage: '/?page=1' });
        if(d) {
          setName('');
          setPage(d.meta.next_page_url);
          setError("");
          setBooks(d.data);
        }
      } catch(e) {
        Alert.alert(ERROR_MESSAGE);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  return (
    <Container>
      <Header>
        <BookInput icon={Search}
          onChangeText={onChangeName}
          onClear={clear}
        />
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
      {isLoading ? (
        <Loader />
      ) : (
        <FlatBook
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={configBooks(books)}
          renderItem={({ item }) => Books({ item, navigation })}
          numColumns={3}
          onEndReached={loadRepositories}
          onEndReachedThreshold={0.1}
          ListFooterComponent={ListFooterComponent}
        />
      )

      }
    </Container>
  );
}