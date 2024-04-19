<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref('');
const password = ref('');

const signInWithPassword = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  });
  if (error) console.log(error);
};
</script>
<template>
  <div>
    <nuxt-link to="/">Go Home!</nuxt-link>
    <h2>Sign In</h2>
    <input v-model="email" type="email" placeholder="Enter email..." />
    <input v-model="password" type="password" placeholder="Enter password..." />
    <button @click="signInWithPassword">Sign In</button>
    <p>
      Don't have an account? <nuxt-link to="/signup">Sign up here.</nuxt-link>
    </p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
input {
}
</style>
