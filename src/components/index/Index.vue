<template>
  <div class="main">
    <sidebar />
    <div class="main__content">
      <router-view />
    </div>
  </div>
</template>

<script>

import Sidebar from '@/views/Sidebar.vue'

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
        background-color: #F8F8F8;
        width: 100%;
        padding: 25px;
    }


    /* SIDEBAR*/
    .main__sidebar {
        background-color: #F0F0F0;
        min-width: 10%;
    }

    .sidebar__item {
      width: 100%;
      height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;
      color: #696969;
      font-family: "Gill Sans", sans-serif;
      font-weight: bold;
    }

    .sidebar__item:hover {
      background-color:	#D3D3D3;
      cursor: pointer;
    }

</style>
