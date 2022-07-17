import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

export const IconBox = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: ${RFPercentage(2.5)}px;
`;

export const TitleBox = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(17)}px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(18)}px;
`;

export const Diviser = styled.Text`
  height: 1px;
  width: 85%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;
