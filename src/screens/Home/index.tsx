import React, { useCallback, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { Box, Container } from "./styles";
import { Dashboard, Logo, ListsRecent } from "../../components";
import { ListDataProps } from "../../@types/data-props";
import { keyAllLists } from "../../data/";
import { useFocusEffect } from "@react-navigation/native";

export function Home() {
  const { getItem, removeItem } = useAsyncStorage(keyAllLists);

  const [data, setData] = useState<ListDataProps[]>([]);

  const fetchLists = async () => {
    const response = await getItem();    
    setData(response ? JSON.parse(response) : []);
  }

  useFocusEffect(
    useCallback(() => {
      // removeItem();
      fetchLists();
    }, [])
  );
  
  return (
    <Container>
      <Box>
        <Logo />
        <Dashboard />
      </Box>
      <ListsRecent allLists={data} />
    </Container>
  );
}
