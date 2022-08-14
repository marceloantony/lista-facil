import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "styled-components";
import { CategoryDataProps } from "../../@types/data-props";
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

const catVoid: CategoryDataProps = {
  id: "",
  name: "",
  iconName: "",
  iconLib: "",
  color: "",
};

export function AddItem() {
  const navigation = useNavigation();
  const shadow: StyleProp<ViewStyle> =
    useTheme().CURRENT_THEME === "light" ? shadowThemeLight : shadowThemeDark;

  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState(0);
  const [quantity, setQuantity] = useState("001");
  const [category, setCategory] = useState<CategoryDataProps>();
  const [details, setDetails] = useState("");

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
    if (
      productName === "" ||
      productValue === 0 ||
      parseInt(quantity) === 0 ||
      !category
    ) {
      let body = "Os seguintes items precisam ser preenchidos:\n\n";
      body += productName === "" ? "\t• Nome do Produto;\n" : "";
      body += productValue === 0 ? "\t• Valor do Produto;\n" : "";
      body += parseInt(quantity) === 0 ? "\t• Quantidade;\n" : "";
      body += !category ? "\t• Categoria;\n" : "";
      Alert.alert("Campos pendentes!", body);
    } else {
      const prodValue = productValue.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      const body = `Seu item foi adicionado a lista com sucesso!
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
            <ProductValueInput
              placeholder="0,00"
              keyboardType="numeric"
              value={productValue > 0 ? productValue.toString() : ""}
              onChangeText={(masked, unmasked) =>
                setProductValue(parseFloat(unmasked) / 100)
              }
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
