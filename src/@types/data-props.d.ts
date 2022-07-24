export type ListDataProps = {
    id: string;
    title: string;
    date: Date;
    value: number;
}

export type CardItemDataProps = {
    id: string;
    title: string;
    qtd: number;
    value: number;
    category: string;
    obs?: string;
}

export type CategoriesProps = {
    id: string;
    name: string;
    iconName: string;
    iconLib: string;
    color: string;
}