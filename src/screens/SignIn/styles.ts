import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 70%;

    background-color: ${theme.colors.primary};

    justify-content: flex-end;
    align-items: center;
  `}
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.shape};
    font-size: ${RFValue(30)}px;
    text-align: center;
    margin-top: 45px;
  `}
`;

export const SignInTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.shape};
    font-size: ${RFValue(16)}px;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 67px;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 30%;
    background-color: ${theme.colors.secondary};
  `}
`;
