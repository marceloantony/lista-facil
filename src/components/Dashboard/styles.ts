import styled from "styled-components/native";

export const Container = styled.Text`
padding: 15px;
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 9px;
`;