<script setup lang="ts">
  // import {userIsLoadingStore} from "~/store/auth.store";

  import {userIsLoadingStore} from "~/store/auth.store";

  useHead({
    title: 'login'
  })
  // const supabase = useSupabaseClient()
  const emailRef = ref('')
  const passwordRef = ref('')
  const nameRef = ref('')
  const isLoadingStore = userIsLoadingStore()
  const router = useRouter()

  const login = async () => {
    isLoadingStore.set(true)
    await router.push('/')
  }
  // const signInWithOtp = async () => {
  //   const { error } = await supabase.auth.signInWithOtp({
  //     email: emailRef.value,
  //     username: emailRef.value,
  //     password: emailRef.value,
  //     options: {
  //       emailRedirectTo: 'http://localhost:3000/',
  //     }
  //   })
  //   if (error) console.log(error)
  // }
</script>

<template>
  <div class="flex justify-center items-center min-h-screen w-full">
    <div class="p-10 rounded bg-slate-100 flex justify-center items-center flex-col w-1/5" >
      <h1 class="font-bold text-2xl mb-5">Авторизация</h1>
      <form class="w-full">
        <Input v-model="nameRef" placeholder="Имя" type="text" class="mb-3"/>
        <Input v-model="emailRef" placeholder="Почта" type="email" class="mb-3"/>
        <Input v-model="passwordRef" placeholder="Пароль" type="password" class="mb-3"/>
        <div class="flex items-center gap-5 justify-center">
            <button class="button" @click.prevent="login">Войти</button>
            <button class="button">Регистрация</button>
        </div>
      </form>
    </div>
  </div>

</template>

<style scoped>
.button {
   padding: 5px;
   border-radius: 5px;
   border: 1px solid #94a3b8;
   flex: 0 0 46%;
    transition: all 0.3s ease-in-out 0s;
  color: #334155;
 }
.button:hover {
  color: white;
  background-color: #94a3b8;
}
</style>

<!--{"refresh":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwODMzMjk3NCwianRpIjoiNDBlZThhZTg2ZjQ4NDcxZGI4MDg4ZDQxYjlmMTBhZDIiLCJ1c2VyX2lkIjoxMTYyfQ.rpusUx8_Ep13JBhrD6e7JjgMffKI_opGIBXy6j3fiAg",
"access":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MjQ2ODc0LCJqdGkiOiIyYThkMWYwM2M1Nzk0MWZjYjY1N2JlODYxNGFmYzU1MiIsInVzZXJfaWQiOjExNjJ9.KCcBrQtUcJhfE5EQDv6eX2JuHSnjOPWLrolOTNHQJQI"}-->
