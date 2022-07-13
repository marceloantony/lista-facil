import styled from "styled-components/native";

export const Container = styled.View`
  height: 200px;
  margin: 15px 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 9px;
`;