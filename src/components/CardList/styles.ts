import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Feather";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  border-radius: 10px;
  margin: 6px ${RFPercentage(2)}px;
  padding: 8px ${RFPercentage(2)}px;
`;

export const IconBox = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: ${RFPercentage(2)}px;
`;

export const TitleBox = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_TEXT_COLOR};
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_TEXT_COLOR};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_TEXT_COLOR};
`;

export const IconCard = styled(Icon).attrs({
  size: RFPercentage(3.75),
})`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
