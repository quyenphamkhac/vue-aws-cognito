<template>
  <a-layout-sider
    v-model="collapsed"
  >
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[1]">
      <a-menu-item v-for="item in navSliders" :key="item.id" >
        <router-link :to="item.link">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  props: {
    collapsed: { type: Boolean, default: false }
  },
  data() {
    return {
      navSliders: [
        {id: 1, icon: 'pie-chart', title: 'Report', link: "/app/report"},
        {id: 2, icon: 'home', title: 'Admin Dashboard', link: "/app/admin"},
        {id: 3, icon: 'user', title: 'Profile', link: "/app/profile"},
        {id: 4, icon: 'dashboard', title: 'Worker Dashboard', link: "/app/dashboard"},
      ]
    }
  }
}
</script>
<style scoped>
.logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>


