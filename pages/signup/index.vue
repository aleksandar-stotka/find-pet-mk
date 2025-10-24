


<template>
  <form @submit.prevent="onSubmit" class="login-form">
    <div>
      <label for="name">Your Name</label>
      <input id="name" type="text" v-model="displayName" required />
    </div>
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email" required />
    </div>

    <div>
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" required minlength="6" />
    </div>

    <button type="submit">Sign in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useSignup} from '#imports';

export default {
  setup () {
    const { signup , error } = useSignup()

    const email = ref('')
    const password = ref('')
    const displayName = ref('')

    
    

    const onSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value)
       console.log(res)
  
     
      // TODO: replace with real auth / navigation~
    }

    return { email, password, onSubmit }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 420px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
label { display: block; font-weight: 600; margin-bottom: 4px; }
input { width: 100%; padding: 8px; box-sizing: border-box; }
button { padding: 8px 12px; }
</style>
// ...existing code...

<style lang="scss" scoped>

</style>