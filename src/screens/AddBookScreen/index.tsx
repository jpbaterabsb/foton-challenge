import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Alert } from 'react-native';
import { FormInput } from '../../components/FormInput';

import { Container } from '../../styles';
import { PageTitle, FormView, ScrollFormView, ButtonView } from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton } from '../../components/PrimaryButton';
import { api } from '../../constants';
import { Book } from '../../types/Book';
import {ERROR_MESSAGE, SUCCESS_BOOK_SAVED} from '../../constants';
import { Loader } from '../../components/Loader';



const fieldValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required(),
  author: yup
    .string()
    .required(),
  description: yup
    .string()
    .required(),
  caption: yup
    .string()
    .required(),
})


export const AddBookScreen: React.FC = () => {
  const {
     setValue, 
     handleSubmit, 
     reset,
     control,
     formState: { errors } 
    } = useForm({ resolver: yupResolver(fieldValidationSchema) });
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const response = await api.post<Book>('/books', data);
      if(response.status === 201) {
        reset({
          name: '',
          caption: '',
          description: '',
          author: '',
          book_cover_url: ''
        });
        Alert.alert(SUCCESS_BOOK_SAVED);
      }
    } catch(e) {
      console.log(e.message)
      Alert.alert(ERROR_MESSAGE);
    }
    finally {
      setLoading(false);
    }
  };

  if(isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <PageTitle>Add a new book</PageTitle>
      <ScrollFormView>
        <FormView>
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field:  {onChange, value} }) => (
              <FormInput
                error={errors.name}
                onChangeText={v => onChange(v)}
                label="Name"
                value={value}
                startColor="rgba(212, 173, 134, 0.4926)"
                distance={45}
              />
            )}
          />

          <Controller
            name="caption"
            defaultValue=""
            control={control}
            render={({ field:  {onChange, value} }) => (
              <FormInput
                error={errors.caption}
                onChangeText={v => onChange(v)}
                label="Caption"
                value={value}
                startColor="rgba(212, 173, 134, 0.4926)"
                distance={45}
              />
            )}
          />

          <Controller
            name="author"
            defaultValue=""
            control={control}
            render={({ field:  {onChange, value} }) => (
              <FormInput
                error={errors.author}
                onChangeText={v => onChange(v)}
                label="Author"
                value={value}
                startColor="rgba(212, 173, 134, 0.4926)"
                distance={45}
              />
            )}
          />

          <Controller
            name="description"
            defaultValue=""
            control={control}
            render={({ field:  {onChange, value} }) => (
              <FormInput
                error={errors.description}
                onChangeText={v => onChange(v)}
                label="Description"
                startColor="rgba(212, 173, 134, 0.4926)"
                distance={90}
                value={value}
                numberOfLines={5}
                multiline={true}
              />
            )}
          />


          <Controller
            name="book_cover_url"
            defaultValue=""
            control={control}
            render={({ field:  {onChange, value} }) => (
              <FormInput
                error={errors.book_cover_url}
                onChangeText={v => onChange(v)}
                value={value}
                label="Cover Book URL"
                startColor="rgba(212, 173, 134, 0.4926)"
                distance={45}
              />
            )}
          />
        </FormView>
      </ScrollFormView>
      <ButtonView>
        <PrimaryButton title="Add new book" onPress={handleSubmit(onSubmit)} />
      </ButtonView>
    </Container>
  );
}