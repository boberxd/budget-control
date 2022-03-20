<template>
  <div class="filter__checkbox">
      <div class="filter__checkbox-name">{{ this.title }}</div>
      <div class="filter__checkbox-items">
        <div v-for="(item, key) in items" :key="key" class="filter__checkbox-item">
          <div class="filter__checkbox-item-input">
            <input @click="changeValue(item)" type="checkbox" :checked="item.checked">
          </div>
          <div class="filter__checkbox-item-name">{{ item.title }}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'filterCheckbox',
  data () {
    return {
      interalItems: null
    }
  },
  props: {
    title: {
      type: String
    },
    items: {
      type: Array
    }
  },
  methods: {
    changeValue (item) {
      const itemIndex = this.interalItems.indexOf(item)
      this.interalItems[itemIndex].checked = !item.checked
    }
  },
  
  watch: {
    items: {
      handler: function () {
        this.interalItems = this.items
      },
      immediate: true
    }
  }
}
</script>

<style>
  .filter__checkbox {
    padding: 5px;
  }

  .filter__checkbox-item-name {
    width: 100%;
  }
  .filter__checkbox-name {
    padding-left: 4px;
  }
  .filter__checkbox-item {
    display: flex;
  }

  .filter__checkbox-name {
    font-weight: 700;
    
    margin: 5px 0 5px 0;
  }
  
  .filter__checkbox-item-name {
    margin-left: 5px;
  }
</style>