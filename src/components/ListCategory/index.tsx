import React from "react";
import { ScrollView } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";

import { CardItem } from "../CardItem";
import {
  Container,
  FooterEmpty,
  HearderCategory,
  ItemCategory,
  TitleCategory,
} from "./styles";
import { CategoriesProps, ItemDataProps } from "../../@types/data-props";
import { categories } from "../../data/categories";

import IconAC from "react-native-vector-icons/AntDesign";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconMI from "react-native-vector-icons/MaterialIcons";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconFA5 from "react-native-vector-icons/FontAwesome5";

type ListCategoryProps = {
  items: ItemDataProps[];
};

export function ListCategory({ items }: ListCategoryProps) {
  const renderItems = (category: CategoriesProps) => {
    const itemsByCategory = items.filter(
      (item) => item.category === category.id
    );

    if (itemsByCategory.length === 0) {
      return <></>;
    }

    return (
      <ItemCategory key={category.id}>

        <HearderCategory>
          {category.iconLib === "AntDesign" ? (
            <IconAC
              name={category.iconName}
              size={RFPercentage(3)}
              color={category.color}
            />
          ) : undefined}
          {category.iconLib === "MaterialCommunityIcons" ? (
            <IconMCI
              name={category.iconName}
              size={RFPercentage(3)}
              color={category.color}
            />
          ) : undefined}
          {category.iconLib === "MaterialIcons" ? (
            <IconMI
              name={category.iconName}
              size={RFPercentage(3)}
              color={category.color}
            />
          ) : undefined}
          {category.iconLib === "FontAwesome" ? (
            <IconFA
              name={category.iconName}
              size={RFPercentage(3)}
              color={category.color}
            />
          ) : undefined}
          {category.iconLib === "FontAwesome5" ? (
            <IconFA5
              name={category.iconName}
              size={RFPercentage(3)}
              color={category.color}
            />
          ) : undefined}
          <TitleCategory color={category.color}>{category.name}</TitleCategory>
        </HearderCategory>
        
        {itemsByCategory.map((item) => (
          <CardItem data={item} key={item.id} />
        ))}
        
      </ItemCategory>
    );
  };

  return (
    <Container>
      <ScrollView>
        {categories.map((category) => renderItems(category))}
        <FooterEmpty />
      </ScrollView>
    </Container>
  );
}
