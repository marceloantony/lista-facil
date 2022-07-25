import styled from "styled-components/native";

export const Container = styled.View`
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;
`;