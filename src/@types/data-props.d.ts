export type ListDataProps = {
    id: string;
    title: string;
    date: Date;
    value: number;
}

export type ItemDataProps = {
    id: string;
    title: string;
    qtd: number;
    value?: number;
    category: string;
    obs?: string;
}

export type CategoryDataProps = {
    id: string;
    name: string;
    iconName: string;
    iconLib: string;
    color: string;
}

export type ValidationProps = {
    name: boolean;
    value: boolean;
    qtd: boolean;
    category: boolean;
  };