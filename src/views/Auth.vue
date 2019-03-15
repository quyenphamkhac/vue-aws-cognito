<template>
  <a-layout id="authorize">
    <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
  </a-layout>
</template>

<script>
import { components } from 'aws-amplify-vue';
export default {
  name: "auth",
  components: {
    ...components
  },
  data() {
    return {
      authConfig: {
        signUpConfig: {
          hideAllDefaults: false,
          hiddenDefaults: ["phone_number"]
        }
      }
    };
  },
  created() {
    console.log(components)
  }
};
</script>

<style scoped>
#authorize {
  min-height: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
