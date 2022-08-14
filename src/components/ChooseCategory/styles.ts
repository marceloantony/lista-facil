import styled from "styled-components/native";

import AC from "react-native-vector-icons/AntDesign";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import MI from "react-native-vector-icons/MaterialIcons";
import FA from "react-native-vector-icons/FontAwesome";
import FA5 from "react-native-vector-icons/FontAwesome5";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Label = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.FOREGROUND_COLOR};
  border-radius: 50px;
  padding: 5px 8px;
  margin: 8px 6px 0 0;
`;

const propsIcon = { size: RFPercentage(3) };
export const IconAC = styled(AC).attrs(propsIcon)``;
export const IconMCI = styled(MCI).attrs(propsIcon)``;
export const IconMI = styled(MI).attrs(propsIcon)``;
export const IconFA = styled(FA).attrs(propsIcon)``;
export const IconFA5 = styled(FA5).attrs(propsIcon)``;

export const Text = styled.Text<{ active: boolean }>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme, active }) =>
    active ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY_TEXT_COLOR};
  margin-left: 8px;
`;
