export type ListDataProps = {
    id: string;
    title: string;
    date: Date;
    value: number;
}

export type ItemListDataProps = {
    id: string;
    title: string;
    qtd: number;
    value: number;
    obs?: string;
    category?: string;
}