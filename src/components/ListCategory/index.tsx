import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

import { CardItem } from "../CardItem";
import {
  Container,
  FooterEmpty,
  HearderCategory,
  ItemCategory,
  ListCategories,
  ListItems,
  TitleCategory,
} from "./styles";

import { CategoryDataProps, ItemDataProps } from "../../@types/data-props";
import { categories } from "../../data/categories";

import IconAC from "react-native-vector-icons/AntDesign";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconMI from "react-native-vector-icons/MaterialIcons";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconFA5 from "react-native-vector-icons/FontAwesome5";

type Props = {
  items: ItemDataProps[];
};

export function ListCategory({ items }: Props) {
  const renderItems = (category: CategoryDataProps) => {
    const itemsByCategory = items.filter(
      (item) => item.category === category.id
    );

    if (itemsByCategory.length === 0) {
      return <></>;
    }

    return (
      <ItemCategory>
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

        <ListItems
          data={itemsByCategory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardItem data={item} />}
          scrollEnabled={false}
        />
      </ItemCategory>
    );
  };

  return (
    <Container>
      <ListCategories
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItems(item)}
        ListFooterComponent={<FooterEmpty />}
      />
      <FooterEmpty />
    </Container>
  );
}
