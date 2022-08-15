import React, { useCallback, useState } from "react";
import { Alert, StyleProp, ViewStyle } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useTheme } from "styled-components";
import uuid from "react-native-uuid";

import {
  CategoryDataProps,
  InfoListPageProps,
  ItemDataProps,
  ListDataProps,
  ValidationProps,
} from "../../@types/data-props";
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
import { formatStringQuantity } from "../../hooks";

const validationVoid: ValidationProps = {
  name: false,
  value: false,
  qtd: false,
  category: false,
};

export function AddItem() {
  const navigation = useNavigation();
  const { getItem, setItem } = useAsyncStorage(keyAllLists);

  const shadow: StyleProp<ViewStyle> =
    useTheme().CURRENT_THEME === "light" ? shadowThemeLight : shadowThemeDark;

  const { idList, idItem = "" } = useRoute().params as InfoListPageProps;

  const [allItems, setAllItems] = useState<ItemDataProps[]>([]);
  const [indexItem, setIndexItem] = useState(0);
  const [allLists, setAllLists] = useState<ListDataProps[]>([]);
  const [indexList, setIndexList] = useState(0);

  const [name, setName] = useState("");
  const [productValue, setProductValue] = useState("");
  const [quantity, setQuantity] = useState("001");
  const [category, setCategory] = useState<CategoryDataProps>();
  const [obs, setObs] = useState("");

  const [validation, setValidation] = useState(validationVoid);

  const fetchInfoList = async () => {
    const response = await getItem();
    const data: ListDataProps[] = response ? JSON.parse(response) : [];
    const list = data.filter((d, iList) => {
      if (d.id === idList) {
        setIndexList(iList);
        d.items.forEach((item, iItem) => {
          if (item.id === idItem) {
            setIndexItem(iItem);
          }
        });
        return true;
      }
    })[0];

    setAllLists(data);
    setAllItems(list.items);
  };

  const createItem = async (item: ItemDataProps) => {
    const newItems = [...allItems, item];
    allLists[indexList] = {
      ...allLists[indexList],
      items: newItems,
    };
    await setItem(JSON.stringify(allLists));
  };

  const handleQuantity = (type: "more" | "less") => {
    let qtd = parseInt(quantity);

    if (type === "more") qtd++;
    else if (qtd > 0) qtd--;

    setQuantity(formatStringQuantity(qtd));
  };

  const submitItem = () => {
    const value = parseFloat(productValue) / 100;
    const qtd = parseInt(quantity);

    setValidation({
      name: name === "",
      value: productValue === "",
      qtd: qtd === 0,
      category: !category,
    });

    if (name === "" || productValue === "" || qtd === 0 || !category) {
      let body = "Os seguintes items precisam ser preenchidos:\n\n";
      body += name === "" ? "\t• Nome do Produto;\n" : "";
      body += productValue === "" ? "\t• Valor do Produto;\n" : "";
      body += qtd === 0 ? "\t• Quantidade;\n" : "";
      body += !category ? "\t• Categoria;\n" : "";
      Alert.alert("Campos pendentes!", body);
    } else {
      const prodValue = value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      createItem({
        id: uuid.v4().toString(),
        category: category?.id ?? "",
        name,
        qtd,
        value,
        obs,
      });
      Alert.alert("Sucesso!", "Seu item foi adicionado a lista com sucesso.", [
        { onPress: navigation.goBack },
      ]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchInfoList();
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
            placeholder="Digite o nome do produto aqui..."
            value={name}
            onChangeText={setName}
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

        {/* OBSERVAÇÕES DO PRODUTO */}
        <Field>
          <Label>Observações do Produto</Label>
          <Input
            multiline
            numberOfLines={3}
            placeholder="Digite alguma observações do produto..."
            value={obs}
            onChangeText={setObs}
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
