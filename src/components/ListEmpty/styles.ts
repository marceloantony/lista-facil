import styled from "styled-components/native";
import IconF from "react-native-vector-icons/Feather";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  opacity: 0.3;
  align-items: center;
  justify-content: center;
  padding: ${RFPercentage(3)}px;
`;

export const Icon = styled(IconF).attrs({
  name: "inbox",
  size: RFPercentage(10),
})`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Text = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-align: center;
  margin-top: 10px;
`;
