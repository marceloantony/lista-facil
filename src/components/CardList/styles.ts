import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  margin: 8px 0;
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
  font-size: ${RFPercentage(2.8)}px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFPercentage(2)}px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFPercentage(2.7)}px;
`;
