<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-row>
      <a-col :span="12">
        <a-icon
          class="trigger"
          :type="isOpen ? 'menu-unfold' : 'menu-fold'"
          @click="() => this.toggleCollaped()"
        />
      </a-col>
      <a-col :span="12">
        <div class="header-user">
          <div v-if="user.name">
            <span>
              <!-- <a-avatar src="https://randomuser.me/api/portraits/women/12.jpg" @click="openProfilePopup"/> -->
              <profile-popup />
              <span class="header-user-name">{{ user.name }}</span>
            </span>
            <a-badge count="5">
              <span class="fs-24">
                <notification />
              </span>
            </a-badge>
            <span class="header-icon fs-24"><a-icon type="setting" /></span>
          </div>
          <a-icon type="loading" v-else/>
        </div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>
<script>
import Notification from '../popup/Notification';
import ProfilePopup from '../popup/ProfilePopup';

export default {
  props: {
    collapsed: { type: Boolean, default: false },
    user: { type: Object, default: {} },
    toggleCollaped: {type: Function}
  },
  data() {
    return {
      isOpen: this.collapsed
    }
  },
  components: {
    Notification, ProfilePopup
  }
}
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
.header-user {
  float: right;
  padding: 0 20px;
}
.header-user-name {
  padding: 0 15px;
  font-weight: 600;
}
.header-icon {
  padding: 0 15px;
}
.fs-24 {
  font-size: 22px;
  cursor: pointer;
}
</style>

