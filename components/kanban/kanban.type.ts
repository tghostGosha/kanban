import type {EStatus} from "~/types/todo.types";

export interface ICard {
    id: string,
    row: string,
    text: string,
    status: string
}
export interface IColumn {
    id: EStatus
    name: string
    items: ICard[]
}
