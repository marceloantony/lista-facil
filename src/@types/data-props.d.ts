export type ListDataProps = {
  id: string;
  title: string;
  date: string;
  total: number;
  items: ItemDataProps[];
};

export type ItemDataProps = {
  id: string;
  name: string;
  qtd: number;
  value?: number;
  category: string;
  obs?: string;
};

export type CategoryDataProps = {
  id: string;
  name: string;
  iconName: string;
  iconLib: string;
  color: string;
};

export type ValidationProps = {
  name: boolean;
  value: boolean;
  qtd: boolean;
  category: boolean;
};

export type InfoListPageProps = {
  idList: string;
  idItem?: string;
};
