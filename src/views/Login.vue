<template>
  <div class="login-view">
    <h1>Login</h1>
    <user-login />
  </div>
</template>

<script>
import UserLogin from "@/components/authorize/UserLogin.vue";

export default {
  name: "login",
  components: {
    UserLogin
  }
};
</script>
