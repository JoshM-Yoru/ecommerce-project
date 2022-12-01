export type Receipt = {
    items: Items[];
    userId: number;
    receiptId: number;
    date: String;
}

export type Items = {
    title: string;
    amount: number;
    price: number;
}
