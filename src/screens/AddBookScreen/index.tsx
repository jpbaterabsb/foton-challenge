import React,{useState, useEffect} from 'react';
import { KeyboardAvoidingView, Text, Keyboard } from 'react-native';
import { FormInput } from '../../components/FormInput';

import { Container, Title } from '../../styles';
import { PageTitle, FormView } from './styles';

export const AddBookScreen: React.FC = () => {


  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const [linesDescription, setLinesDescription] = useState<number>(5);
  const _keyboardDidShow = () => setLinesDescription(3);
  const _keyboardDidHide = () => setLinesDescription(5);

  return (
    <Container>
        <PageTitle>Add a new book</PageTitle>
        <FormView>
          <FormInput label="Name" startColor="rgba(212, 173, 134, 0.4926)" distance={45} />
          <FormInput label="Author" startColor="rgba(212, 173, 134, 0.4926)" distance={45} />
          <FormInput label="Description" startColor="rgba(212, 173, 134, 0.4926)" distance={90} numberOfLines={linesDescription} />
        </FormView>
      
    </Container>
  );
}