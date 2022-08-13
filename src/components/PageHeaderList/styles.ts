import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  `;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

export const TitlePage = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  margin: 0 auto;
`;

export const IconBack = styled(Icon).attrs(({ theme }) => ({
  size: RFPercentage(3),
  color: theme.COLORS.FOREGROUND_COLOR,
}))``;

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.PRIMARY, theme.COLORS.PRIMARY_LIGHT],
  locations: [0, 1],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
}))`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 12% ${RFPercentage(2)}px 16px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const InputTitle = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: `${theme.COLORS.FOREGROUND_COLOR}AA`,
}))`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  background-color: #0000002d;
  border-radius: 20px;
  width: 85%;
  padding: 2px ${RFPercentage(2)}px;
`;

export const IconFilter = styled(Icon).attrs({
  size: RFPercentage(3.75),
})`
  color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  position: absolute;
  right: ${RFPercentage(1)}px;
`;
