import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.primary};

    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content:  flex-end;
    padding-bottom: 19px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;

  width: 100%;
  padding: 24px;
`;

export const Fields = styled.View`

`;

export const TransactionsType = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 16px;
`;