import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px ${RFPercentage(2)}px 8px;
`;
