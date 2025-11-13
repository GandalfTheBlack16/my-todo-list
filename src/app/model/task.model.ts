export interface Task {
    id: number;
    title: string;
    categories?: Category[];
    checked: boolean
}

export interface Category {
    id: number;
    value: string;
}