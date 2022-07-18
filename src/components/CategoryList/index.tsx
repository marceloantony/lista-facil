import React from "react";
import { ScrollView } from "react-native";
import { ItemList } from "../ItemList";
import { Container, FooterEmpty, ItemCategory, TitleCategory } from "./styles";
import { CategoriesProps, ItemListDataProps } from "../../@types/data-props";
import { categories } from "../../data/categories";

type CategoryListProps = {
  items: ItemListDataProps[];
};

export function CategoryList({ items }: CategoryListProps) {
  const renderItems = (category: CategoriesProps) => {
    const itemsByCategory = items.filter(
      (item) => item.category === category.id
    );

    if (itemsByCategory.length === 0) {
      return <></>;
    }

    return (
      <ItemCategory key={category.id}>
        <TitleCategory color={category.color}>{category.name}</TitleCategory>
        {itemsByCategory.map((item) => (
          <ItemList data={item} key={item.id} />
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
