import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Box = styled.View`
  padding: 12% ${RFPercentage(3)}px 0;
`;

export const GroupButtons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
