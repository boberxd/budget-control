<template>
  <div class="main__sidebar">
    <div class="sidebar__item" @click="$router.push({ name: 'Home' })">
      Домашняя
    </div>
    <div class="sidebar__item" @click="$router.push({ name: 'Statistics' })">
      Статистика
    </div>
    <div class="sidebar__item" @click="$router.push({ name: 'Categories' })">
      Категории
    </div>
  </div>
</template>