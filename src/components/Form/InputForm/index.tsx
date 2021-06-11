import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';

import * as S from './styles';

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
}

export function InputForm({
  control,
  name,
  ...rest
}: InputProps) {
  return(
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value }}) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
    </S.Container>
  );
}