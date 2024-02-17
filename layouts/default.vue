<script setup lang="ts">
import {useAuthStore, userIsLoadingStore} from "~/store/auth.store";
import Card from "~/components/ui/card/Card.vue";

const isLoadingStore = userIsLoadingStore()
const router = useRouter()
const store = useAuthStore()




</script>

<template>
  <section class="grid" style="min-height: 100vh; background-color: var(--background)">
    <div>
      <slot/>

    </div>
  </section>

</template>

<style scoped>
  .grid {
    display: grid;
  }
</style>
