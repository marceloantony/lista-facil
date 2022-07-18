import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { CategoriesProps, ItemListDataProps } from "../../@types/data-props";
import { categories } from "../../data/categories";
import { ItemList } from "../ItemList";
import { Container, ItemCategory, TitleCategory } from "./styles";

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
        {/* <FlatList
          data={itemsByCategory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemList data={item} />}
        /> */}
      </ItemCategory>
    );
  };

  return (
    <Container>
      <ScrollView>
        {categories.map((category) => renderItems(category))}
        <View style={{marginTop: 250}} />
      </ScrollView>
      {/* <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItems(item)}
      /> */}
    </Container>
  );
}
