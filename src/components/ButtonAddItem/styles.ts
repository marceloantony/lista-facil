import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Octicons";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  z-index: 10;
  position: absolute;
  bottom: ${RFPercentage(5)}px;
  right: ${RFPercentage(3.5)}px;
`;

export const Background = styled(LinearGradient).attrs(
  ({ theme }) => ({
    colors: [theme.COLORS.SECONDARY, theme.COLORS.SECONDARY_DARK],
    locations: [0, 1],
    start: { x: 1, y: 0 },
    end: { x: 0, y: 1 },
  })
)`
  align-items: center;
  justify-content: center;
  width: ${RFPercentage(8)}px;
  height: ${RFPercentage(8)}px;
  border-radius: 100px;
`;

export const IconAdd = styled(Icon).attrs({
  size: RFPercentage(4),
})`
  color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
`;
