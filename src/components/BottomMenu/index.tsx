import React from 'react';
import {BottomView, BottomMenuTitle, BottomViewBox, Divider } from './styles';
import { Feather } from '@expo/vector-icons';

export const BottomMenu: React.FC = () => {
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