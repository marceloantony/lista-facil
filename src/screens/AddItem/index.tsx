import React, { useCallback, useState } from "react";
import { Alert, StyleProp, ViewStyle } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import uuid from "react-native-uuid";

import { CategoryDataProps, InfoListPageProps, ItemDataProps, ListDataProps, ValidationProps } from "../../@types/data-props";
import { ChooseCategory, PageHeaderList } from "../../components";
import { shadowThemeDark, shadowThemeLight } from "../../themes/shadow";
import {
  Container,
  Field,
  Form,
  Input,
  ProductValueField,
  Label,
  MonetaryValue,
  QuantityField,
  Btn,
  BtnIcon,
  Footer,
  BtnFooter,
  BtnBgConfirm,
  BtnBgCancel,
  BtnText,
  ProductValueInput,
} from "./styles";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { keyAllLists } from "../../data";

const validationVoid: ValidationProps = {
  name: false,
  value: false,
  qtd: false,
  category: false,
};

export function AddItem() {
  const navigation = useNavigation();
  const { getItem } = useAsyncStorage(keyAllLists);
  const shadow: StyleProp<ViewStyle> =
    useTheme().CURRENT_THEME === "light" ? shadowThemeLight : shadowThemeDark;
    
    const { idList } = useRoute().params as InfoListPageProps;
  const [items, setItems] = useState<ItemDataProps[]>([]);
  
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");
  const [quantity, setQuantity] = useState("001");
  const [category, setCategory] = useState<CategoryDataProps>();
  const [details, setDetails] = useState("");
  const [validation, setValidation] = useState(validationVoid);

  const fetchItems = async () => {
    const response = await getItem();
    const data: ListDataProps[] = response ? JSON.parse(response) : [];
    const thisList = data.filter((list) => list.id === idList)[0];
    setItems(thisList.items);
  };

  const handleQuantity = (type: "more" | "less") => {
    let qtd = parseInt(quantity);

    if (type === "more") qtd++;
    else if (qtd > 0) qtd--;

    let numberWithZeroes = String(qtd);
    let counter = numberWithZeroes.length;
    while (counter < 3) {
      numberWithZeroes = "0" + numberWithZeroes;
      counter++;
    }

    setQuantity(numberWithZeroes);
  };

  const submitItem = () => {
    const value = parseFloat(productValue) / 100;
    const qtd = parseInt(quantity);
    if (productName === "" || productValue === "" || qtd === 0 || !category) {
      setValidation({
        name: productName === "",
        value: productValue === "",
        qtd: qtd === 0,
        category: !category,
      });

      let body = "Os seguintes items precisam ser preenchidos:\n\n";
      body += productName === "" ? "\t• Nome do Produto;\n" : "";
      body += productValue === "" ? "\t• Valor do Produto;\n" : "";
      body += qtd === 0 ? "\t• Quantidade;\n" : "";
      body += !category ? "\t• Categoria;\n" : "";
      Alert.alert("Campos pendentes!", body);
    } else {
      const prodValue = value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      const body = `Seu item foi adicionado a lista com sucesso!
      • ID: ${uuid.v4()};
      • Nome: ${productName};
      • Valor: R$ ${prodValue};
      • Quantidade: ${quantity};
      • Categoria: ${category?.name};
      • Detalhes: ${details === "" ? "Nenhuma" : details};
      `;
      Alert.alert("Informações do Item", body, [
        { onPress: navigation.goBack },
      ]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchItems();
    }, [])
  );

  return (
    <Container>
      <PageHeaderList titlePage="Adicionar Produto" />
      <Form>
        {/* NOME DO PRODUTO */}
        <Field>
          <Label required={validation.name}>Nome do Produto *</Label>
          <Input
            placeholder="Digite o Nome do Produto Aqui..."
            value={productName}
            onChangeText={setProductName}
            style={shadow}
          />
        </Field>

        {/* VALOR DO PRODUTO */}
        <Field>
          <Label required={validation.value}>Valor do Produto *</Label>
          <ProductValueField>
            <MonetaryValue>R$</MonetaryValue>
            <ProductValueInput
              placeholder="0,00"
              keyboardType="numeric"
              value={productValue}
              onChangeText={(masked, unmasked) => setProductValue(unmasked)}
              style={shadow}
            />
          </ProductValueField>
        </Field>

        {/* QUANTIDADE */}
        <Field>
          <Label required={validation.qtd}>Quantidade *</Label>
          <QuantityField>
            <Btn onPress={() => handleQuantity("less")} style={shadow}>
              <BtnIcon name="minus" />
            </Btn>
            <Input
              textAlign="center"
              keyboardType="numeric"
              maxLength={3}
              value={quantity}
              onChangeText={setQuantity}
              style={shadow}
            />
            <Btn onPress={() => handleQuantity("more")} style={shadow}>
              <BtnIcon name="plus" />
            </Btn>
          </QuantityField>
        </Field>

        {/* CATEGORIAS */}
        <Field>
          <Label required={validation.category}>Categoria *</Label>
          <ChooseCategory
            category={category}
            setCategory={(cat: CategoryDataProps) => setCategory(cat)}
          />
        </Field>

        {/* DETALHES DO PRODUTO */}
        <Field>
          <Label>Detalhes do Produto</Label>
          <Input
            multiline
            numberOfLines={3}
            placeholder="Digite os Detalhes do Produto..."
            value={details}
            onChangeText={setDetails}
            style={shadow}
          />
        </Field>
      </Form>
      <Footer>
        <BtnFooter side="left" onPress={navigation.goBack}>
          <BtnBgCancel>
            <BtnText>Cancelar</BtnText>
          </BtnBgCancel>
        </BtnFooter>
        <BtnFooter side="right" onPress={submitItem}>
          <BtnBgConfirm>
            <BtnText>Adicionar</BtnText>
          </BtnBgConfirm>
        </BtnFooter>
      </Footer>
    </Container>
  );
}
