import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { PageHeaderList } from "../../components";
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
} from "./styles";

export function AddItem() {
  const navigation = useNavigation();
  const shadow =
    useTheme().CURRENT_THEME === "light" ? shadowThemeLight : shadowThemeDark;

  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");
  const [quantity, setQuantity] = useState("001");
  const [details, setDetails] = useState("");

  const handleQuantity = (type: "more" | "less") => {
    let qtd = parseInt(quantity);

    if (qtd > 0) {
      if (type === "more") qtd++;
      else qtd--;
    }

    let numberWithZeroes = String(qtd);
    let counter = numberWithZeroes.length;
    while (counter < 3) {
      numberWithZeroes = "0" + numberWithZeroes;
      counter++;
    }

    setQuantity(numberWithZeroes);
  };

  const showInfoItem = () => {
    const propsValue = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    const body = `Seu item foi adicionado a lista com sucesso!
    • Nome: ${productName};
    • Valor: R$ ${parseFloat(productValue).toLocaleString("pt-BR", propsValue)};
    • Quantidade: ${quantity};
    • Detalhes: ${details};
    `;
    Alert.alert("Informações do Item", body, [{ onPress: navigation.goBack }]);
  };

  return (
    <Container>
      <PageHeaderList title="Adicionar Produto" />
      <Form>
        {/* NOME DO PRODUTO */}
        <Field>
          <Label>Nome do Produto</Label>
          <Input
            placeholder="Digite o Nome do Produto Aqui..."
            value={productName}
            onChangeText={setProductName}
            style={shadow}
          />
        </Field>

        {/* VALOR DO PRODUTO */}
        <Field>
          <Label>Valor do Produto</Label>
          <ProductValueField>
            <MonetaryValue>R$</MonetaryValue>
            <Input
              placeholder="Digite o Valor do Produto ."
              value={productValue}
              onChangeText={setProductValue}
              style={shadow}
            />
          </ProductValueField>
        </Field>

        {/* QUANTIDADE */}
        <Field>
          <Label>Quantidade</Label>
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
          <Label>Categoria</Label>
          {/* <Input style={shadow} /> */}
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
        <BtnFooter side="right" onPress={showInfoItem}>
          <BtnBgConfirm>
            <BtnText>Adicionar</BtnText>
          </BtnBgConfirm>
        </BtnFooter>
      </Footer>
    </Container>
  );
}
