<script setup lang="ts">

import {userTokenStore} from '~/store/userTokenStore'
import CreateTask from "~/components/kanban/CreateTask.vue";
useHead({
  title: 'Kanban'
})


// Vue.use(vueKanban)
const dataCol = [
  {
    id: 1,
    title: 'on-hold',
    row: 0,
    // color: 'yellow'
  },
  {
    id: 2,
    title: 'in-progress',
    row: 1
  },
  {
    id: 3,
    title: 'needs-review',
    row: 2
  },
  {
    id: 4,
    title: 'approved',
    row: 3
  },
]

// const dragCardRef = ref<ICard | null>(null)
// const sourceColumnRef = ref<IColumn|null>(null)


let userToken = userTokenStore()
const newToken:any = await $fetch('https://trello.backend.tests.nekidaem.ru/api/v1/users/token/refresh/',
    {
      method: "POST",
      body: {"refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwODMzMjk3NCwianRpIjoiNDBlZThhZTg2ZjQ4NDcxZGI4MDg4ZDQxYjlmMTBhZDIiLCJ1c2VyX2lkIjoxMTYyfQ.rpusUx8_Ep13JBhrD6e7JjgMffKI_opGIBXy6j3fiAg"}
    },

)

userToken.set(newToken.access)


console.log(userToken.$state.token, 'token')

async function createTodo() {
  await $fetch('https://trello.backend.tests.nekidaem.ru/api/v1/cards/',
      {
        method: 'POST',
        headers: {'Authorization': `JWT ${userToken.$state.token}`},
        body: {
          "row": "0",
          "text": "string"
        }
      })
}
let cards: unknown[] = []
// async function getCards () {
  const data = await $fetch('https://trello.backend.tests.nekidaem.ru/api/v1/cards/',
      {
        method: 'GET',
        headers: {'Authorization': `JWT ${userToken.$state.token}`},

      })
//   console.log(data, 'data')
//   cards = [data]
// }
console.log(data, 'data')



</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">Kanban Board</h1>
  </div>
  <div class="grid grid-cols-4 gap-16" >
    <div v-for="(column, index) in dataCol" :key="column.id" class="gap-6 grid">
      <div class="columnHeader" >
        <h2>{{column.title}}</h2>
      </div>

      <Card draggable="true" v-for="card in data" :key="card.id">
        <CardHeader role="button"></CardHeader>
        <CardTitle>{{card.id}}</CardTitle>
        <CardContent>{{card.text}}</CardContent>
      </Card>
      <Card draggable="true">
        <CardHeader role="button"></CardHeader>
        <CardTitle>id</CardTitle>
        <CardContent>content</CardContent>
      </Card>
<!--      <button @click.prevent="createTodo" >создать</button>-->
      <button @click.prevent="getCards" >обновить</button>
      <CreateTask/>
    </div>


  </div>

</template>

<style scoped>
.columnHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  padding: 5px 15px;
}
</style>
