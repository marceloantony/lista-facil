import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import IconInput from "react-native-vector-icons/MaterialCommunityIcons";
import IconButton from "react-native-vector-icons/Octicons";

export const Conteiner = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  position: relative;
`;

export const TituloLista = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 0 ${RFPercentage(2)}px 12px;
`;

export const TituloInput = styled.TextInput`
  width: 100%;
  padding: 4px ${RFPercentage(2)}px;
  padding-left: ${RFPercentage(7)}px;
  border-radius: 100px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT_ALT};
  background-color: #0000001a;
`;

export const IconMarket = styled(IconInput).attrs({
  size: RFPercentage(3.75),
})`
  color: ${({ theme }) => theme.COLORS.TEXT_ALT};
  position: absolute;
  top: 6px;
  left: ${RFPercentage(4.5)}px;
`;

export const ButtonAddItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: ${RFPercentage(8)}px;
  height: ${RFPercentage(8)}px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  position: absolute;
  bottom: 90px;
  right: ${RFPercentage(3)}px;
  align-items: center;
  justify-content: center;
`;

export const IconButtonAdd = styled(IconButton).attrs({
  size: RFPercentage(4),
})`
  color: ${({ theme }) => theme.COLORS.TEXT_ALT};
`;