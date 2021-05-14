import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, Button, View } from 'react-native';
import { FormInput } from '../../components/FormInput';

import { Container } from '../../styles';
import { PageTitle, FormView, ScrollFormView, ButtonView } from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton } from '../../components/PrimaryButton';



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
  const { setValue, handleSubmit, formState: { errors, } } = useForm({ resolver: yupResolver(fieldValidationSchema) });
  const onSubmit = (data: any) => {
    console.log(data);
  };

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
      <ScrollFormView>
        <FormView>
          <FormInput
            error={errors.name}
            onChangeText={v => setValue('name', v)}
            label="Name"
            startColor="rgba(212, 173, 134, 0.4926)"
            distance={45}
          />

          <FormInput
            error={errors.caption}
            onChangeText={v => setValue('caption', v)}
            label="Caption"
            startColor="rgba(212, 173, 134, 0.4926)"
            distance={45}
          />

          <FormInput
            error={errors.author}
            onChangeText={v => setValue('author', v)}
            label="Author"
            startColor="rgba(212, 173, 134, 0.4926)"
            distance={45}
          />

          <FormInput
            error={errors.description}
            onChangeText={v => setValue('description', v)}
            label="Description"
            startColor="rgba(212, 173, 134, 0.4926)"
            distance={90}
            numberOfLines={linesDescription}
          />

          <FormInput
            error={errors.book_cover_url}
            onChangeText={v => setValue('book_cover_url', v)}
            label="Cover Book URL"
            startColor="rgba(212, 173, 134, 0.4926)"
            distance={45}
          />
        </FormView>
      </ScrollFormView>
      <ButtonView>
        <PrimaryButton title="Add new book" onPress={handleSubmit(onSubmit)} />
      </ButtonView>
    </Container>
  );
}