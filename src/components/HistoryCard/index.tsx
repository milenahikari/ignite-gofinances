import React from 'react';

import * as S from './styles';

interface Props {
  title: string;
  color: string;
  amount: string;
}

export function HistoryCard({
  title,
  color,
  amount
}: Props) {
  return(
    <S.Container color={color}>
      <S.Title>{title}</S.Title>
      <S.Amount>{amount}</S.Amount>
    </S.Container>
  );
}