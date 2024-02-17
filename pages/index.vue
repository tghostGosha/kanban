<script setup lang="ts">
import type {ICard, IColumn} from '~/components/kanban/kanban.type'
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";

import {useRequestHeader} from "#app/composables/ssr";
import {useRequestHeaders} from "#imports";

useHead({
  title: 'Kanban'
})


// Vue.use(vueKanban)
const dataCol = [
  {
    id: 1,
    title: 'on-hold'
  },
  {
    id: 2,
    title: 'in-progress'
  },
  {
    id: 3,
    title: 'needs-review'
  },
  {
    id: 4,
    title: 'approved'
  },
]

// const dragCardRef = ref<ICard | null>(null)
// const sourceColumnRef = ref<IColumn|null>(null)

const authorization = useRequestHeader('Bearer')
const headers = useRequestHeaders(['cookie'])
const token = '9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b'
try {
  const data:any  = await $fetch('https://trello.backend.tests.nekidaem.ru/api/v1/cards/',
      {
        method: 'GET',
        headers: {'Authorization': `Token ${token}`},

      })
} catch (e) {
  console.log(e)
}




</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">Kanban Board</h1>
  </div>
  <div class="grid grid-cols-4 gap-16" >
    <div v-for="(column, index) in dataCol" :key="column.id" class="gap-6 grid">
      <h2>{{column.title}}</h2>
      <Card draggable="true">
        <CardHeader role="button"></CardHeader>
        <CardTitle>id</CardTitle>
        <CardContent>content</CardContent>
      </Card>
      <Card draggable="true">
        <CardHeader role="button"></CardHeader>
        <CardTitle>id</CardTitle>
        <CardContent>content</CardContent>
      </Card>
    </div>

  </div>

</template>

<style scoped>

</style>
