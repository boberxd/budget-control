<template>
  <div 
    class="sidebar__item" 
    :class="{'active': isActive}"
    @click="$router.push({ name: this.sidebarItem.routeName })"
  >
    <div class="sidebar__item-icon">
      <svg class="icon">
        <use :xlink:href="`#${this.sidebarItem.icon}`" />
      </svg>
    </div>
    <div class="sidebar__item-title">
      {{ this.sidebarItem.title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      sidebarItem: Object,
    },
    computed: {
      isActive () {
        return this.$route.name === this.sidebarItem.routeName
      }
    }
  }
</script>

<style scoped>
    .sidebar__item {
      width: 100%;
      height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;
      color: #25244e;
      font-weight: normal;
      font-size: 18px;
      transition: color .1s, font-size .1s, fill .5s;
    }

    .sidebar__item-title {
      padding-top: 5px;
      min-width: 50px;
    }

    .sidebar__item:hover {
      color: #7be5dc;
      cursor: pointer;
    }

    .sidebar__item:hover .icon {
      fill: #7be5dc;
    }

    .sidebar__item.active .icon {
      fill: #7be5dc;
      width: 28px;
    }

    .active {
      color: #7be5dc;
      border-right: 5px solid;
      padding-left: 5px;
    }

    .icon {
      width: 27px;
      fill: #25244e;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .sidebar__item-icon {
      margin-right: 20px;
    }
</style>