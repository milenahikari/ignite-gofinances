import React from 'react';

import * as S from './styles';

interface Category {
  name: string;
  icon: string;
}

interface Data {
  title: string;
  amount: string;
  category : Category;
  date: string;
}

interface TransactionCardProps {
  data: Data;
}

export function TransactionCard({data} : TransactionCardProps) {
  return (
    <S.Container>
      <S.Title>{data.title}</S.Title>

      <S.Amount>{data.amount}</S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={data.category.icon}/>

          <S.CategoryName>{data.category.name}</S.CategoryName>
        </S.Category>

        <S.Date>{data.date}</S.Date>
      </S.Footer>
    </S.Container>
  );
}