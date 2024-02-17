import type {IColumn} from "~/components/kanban/kanban.type";
import {EStatus} from "~/types/todo.types";

export const KANBAN_DATA:IColumn[] = [
    {
        id:EStatus["on-hold"],
        name: 'On Hold',
        items: []
    },
    {
        id:EStatus["in-progress"],
        name: 'In Progress',
        items: []
    },
    {
        id:EStatus["needs-review"],
        name: 'Needs Review',
        items: []
    },
    {
        id:EStatus["approved"],
        name: 'Approved',
        items: []
    }
]
