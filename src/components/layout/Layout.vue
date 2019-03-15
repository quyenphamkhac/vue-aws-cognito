<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <slider :collapsed="collapsed"/>
    <a-layout>
      <header-top :collapsed="collapsed" :user="user" :toggleCollaped="toggleCollaped"/>

      <a-layout :style="{ margin: '10px 16px', padding: '24px', background: '#fff', maxHeight: '70px' }">
        <a-breadcrumb separator=">">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link to="/app/profile">Profile</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link to="/app/dashboard">Dashboard</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
      </a-layout>

      <a-layout-content :style="{ margin: '16px', padding: '24px', background: '#fff' }">
        <router-view />
        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import HeaderTop from '../header/Header';
import Slider from '../slider/Slider';

export default { 
  data() {
    return {
      collapsed: true,
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    this.getUser();
  },
  methods: {
    ...mapActions(['getUser']),
    toggleCollaped() {
      this.collapsed = !this.collapsed;
    }
  },
  components: {
    HeaderTop, Slider
  }
  
}
</script>
<style scoped>
#components-layout-demo-custom-trigger {
  min-height: 100%;
  height: auto;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

</style>
