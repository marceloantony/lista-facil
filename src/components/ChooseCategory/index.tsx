import {
  Container,
  IconAC,
  IconFA,
  IconFA5,
  IconMCI,
  IconMI,
  Label,
  Text,
} from "./styles";
import { categories } from "../../data/categories";
import { useTheme } from "styled-components/native";
import { shadowThemeDark, shadowThemeLight } from "../../themes/shadow";
import { useState } from "react";
import { CategoryDataProps } from "../../@types/data-props";

type Props = {
  category?: CategoryDataProps;
  setCategory: any;
};

export function ChooseCategory({ category, setCategory }: Props) {
  const shadow =
    useTheme().CURRENT_THEME === "light" ? shadowThemeLight : shadowThemeDark;
  const colorActive = useTheme().COLORS.SECONDARY;

  return (
    <Container>
      {categories.map((cat) => {
        const active = cat.id === category?.id;

        return (
          <Label key={cat.id} style={shadow} onPress={() => setCategory(cat)}>
            {cat.iconLib === "AntDesign" ? (
              <IconAC
                name={cat.iconName}
                color={active ? colorActive : cat.color}
              />
            ) : undefined}
            {cat.iconLib === "MaterialCommunityIcons" ? (
              <IconMCI
                name={cat.iconName}
                color={active ? colorActive : cat.color}
              />
            ) : undefined}
            {cat.iconLib === "MaterialIcons" ? (
              <IconMI
                name={cat.iconName}
                color={active ? colorActive : cat.color}
              />
            ) : undefined}
            {cat.iconLib === "FontAwesome" ? (
              <IconFA
                name={cat.iconName}
                color={active ? colorActive : cat.color}
              />
            ) : undefined}
            {cat.iconLib === "FontAwesome5" ? (
              <IconFA5
                name={cat.iconName}
                color={active ? colorActive : cat.color}
              />
            ) : undefined}
            <Text active={active}>{cat.name}</Text>
          </Label>
        );
      })}
    </Container>
  );
}
