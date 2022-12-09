export type Receipt = {
    items: Items[];
    userId: number;
    receiptNumber: number;
    dateTime: String;
    total: number;
}

export type Items = {
    name: string;
    amount: number;
    price: number;
}
