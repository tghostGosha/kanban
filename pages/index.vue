<script setup lang="ts">
import type {ICard, IColumn} from '~/components/kanban/kanban.type'
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";
useHead({
  title: 'Kanban'
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn|null>(null)
useKanbanQuery()
</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">Kanban Board</h1>
  </div>
  <div>
    <Card draggable="true">
      <CardHeader role="button"></CardHeader>
      <CardTitle>id</CardTitle>
      <CardContent>content</CardContent>
    </Card>
  </div>

</template>

<style scoped>

</style>
