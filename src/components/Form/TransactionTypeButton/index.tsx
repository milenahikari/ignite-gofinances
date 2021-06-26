import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}

interface Props extends RectButtonProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({
  type, 
  title,
  isActive,
  ...rest
}: Props) {
  return (
    <S.Container 
      isActive={isActive}
      type={type}
    >
      <S.Button
        {...rest}
      >
        <S.Icon 
          name={icons[type]} 
          type={type}
        />

        <S.Title>{title}</S.Title>
      </S.Button>
    </S.Container>
  );
}