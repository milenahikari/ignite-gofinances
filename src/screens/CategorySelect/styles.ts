import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${theme.colors.primary};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.shape};
    font-size: ${RFValue(18)}px;
  `}
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  ${({ theme, isActive }) => css`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${isActive ? theme.colors.secondary_light : theme.colors.background};
  `}
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${({ theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;

export const Separator = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.text};
  `}
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;