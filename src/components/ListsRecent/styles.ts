import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/AntDesign";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px ${RFPercentage(2)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_TEXT_COLOR};
`;

export const LinkContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  border-radius: 5px;
`;

export const LinkText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
  margin-right: ${RFPercentage(0.5)}px;
  margin-top: -3px;
`;

export const LinkIcon = styled(Icon).attrs(({ theme }) => ({
  size: RFPercentage(2),
  color: theme.COLORS.PRIMARY_DARK,
}))``;
