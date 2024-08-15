export interface ICostumer{
    id: number;
    name: string;
    email: string;
    phone: string;
}

export type TCreateCostumerData = Pick<ICostumer, "name" | "email" | "phone">;

export interface ICostumerSearchParams{
    name?: string;
}