import React from 'react';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import * as S from './styles';

export function Register() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>
      
      <S.Form>
        <S.Fields>
          <Input
            placeholder="Nome"
          />

          <Input
            placeholder="Preço"
          />
        </S.Fields>

        <Button
          title="Enviar"
        />
      </S.Form>
    </S.Container>
  );
}