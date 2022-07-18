import styled from "styled-components/native";

export const Container = styled.View`
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 9px;
  overflow: hidden;
`;