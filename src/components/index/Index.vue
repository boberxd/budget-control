<template>
  <div class="main">
    <sidebar />
    <div class="main__content">
      <router-view />
    </div>
  </div>
</template>

<script>

import Sidebar from '@/views/sidebar/Sidebar.vue'

export default {
  name: 'Index',
  components: {
    Sidebar
  },
  props: {
    msg: String
  },
  
}
</script>

<style>
  .main {
    display: flex;
    height: 100vh;
  }

  .main__content {
      background-color: #fafafb;
      width: 100%;
      padding: 25px;
  }
</style>
