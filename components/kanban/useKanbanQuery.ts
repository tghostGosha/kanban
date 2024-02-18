import {useQuery} from "@tanstack/vue-query";
import {KANBAN_DATA} from "~/components/kanban/kanban.data";
import type {ICard} from "~/components/kanban/kanban.type";
import type {ITodo} from "~/types/todo.types";
import {COLLECTION_TODOS, DB_ID} from "~/app.constans";

// export function useKanbanQuery() {
//     return useQuery({
//         queryKey: ['todos'],
//         queryFn: () => {
//             DB.listDocuments(DB_ID, COLLECTION_TODOS)
//         },
//         select(data) {
//             const newBoard = [...KANBAN_DATA]
//             const tasks = data.documents as unknown as ITodo[]
//             console.log(newBoard, tasks)
//         }
//     })
// }
