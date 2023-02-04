// export type TCountryCurrency = keyof typeof COUNTRY_CURRENCY;

export type TNavTab = {
    path: string;
    name: string;
    current: boolean;
    count?: number;
};

export type TableData<T> = Array<T>;

export type TableColumn<T> = Array<T>;

export type TColumn = {
    name: string;
    accessor: string | { (arg?: any): string };
    render?: any;
    [other: string]: any;
};