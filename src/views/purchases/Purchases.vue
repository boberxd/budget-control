<template>
  <div class="home">
    <div class="home__title">
      <h1>Моя корзина</h1>
    </div>
    <div class="home__main">
      <div v-if="tasks.length" class="home__main-list">
        <div @click="cancel(item)" class="home__main-list-item" v-for="(item, key) in tasks" :key="key">
          <div class="list-item__img">
            <img :src="item.imgURL" alt="альтернативный текст">
          </div>
          <div class="list-item__info">
            <div class="list-item__info-upper">
              <div class="info__upper-grade">
                <div class="info__upper-grade-main">
                Оценка {{ item.grade }}
                </div>
              </div>
              <div class="info__upper-title">{{ item.title }}</div>
              <div class="info__upper-place">{{ item.place }}</div>
            </div>
            <div class="list-item__info-bottom">
              <div class="list__bottom-description">
                {{ item.description }}
              </div>
            </div>
          </div>
          <div class="list-item__order">
            <div class="list-item__order-upper">
              <div class="order__upper-description">
                {{ item.additionalInformation }}
              </div>
            </div>
            <div class="list-item__order-bottom">
              <div class="order__bottom-price">
                от {{ item.price }} руб.
              </div>
              <div class="order__bottom-additional">
                вкл. топл. сбор: {{ item.fuelSurcharge }} руб.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="home__main-list"><h3>Ваша корзина пока что пуста.</h3></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Purchases',
  computed: {
    tasks () {
      return this.$store.state.task.tasks.filter(item => item.user === this.$store.state.user.user.id)
    }
  },
  methods: {
    create () {
      const task = {
        grade: prompt('Введите оценку') || 0.00,
        title: prompt('Введите заголовок') || 'Заголовок без названия',
        imgURL: prompt('Введите URL картинки') || 'https://pngimg.com/uploads/question_mark/small/question_mark_PNG80.png',
        place: prompt('Введите местонахождение') || 'Местонахождение неизвестно',
        description: prompt('Введите описание') || 'Без описания',
        additionalInformation: prompt('Введите дополнительную информацию') || 'Без дополнительной информации',
        price: prompt('Введите цену') || 0,
        fuelSurcharge: prompt('Введите цену за топливный сбор') || 0,
        user: null,
      }
     this.$store.dispatch('newTask', task).then(() => {
      this.$store.dispatch('loadTasks')
     })
    },

    cancel (item) {
      const answer = confirm('Вы хотите отменить этот тур?')
      
      if(answer) {
        this.$store.dispatch('editTask', {
          id: item.id,
          user: null
        }).then(() => {
          this.$store.dispatch('loadTasks')
        })
      }
    }
  },
  created () {
    this.$store.dispatch('loadTasks')
  }
}

</script>

<style>
  .home {
    height: 100%;
  }
  .home__main {
    height: 95%;
    display: flex;
  }

  .home__main-filters {
    height: 100%;
    background-color: #fff;
    width: 300px;
  }
  
  .filter__item {
    border-bottom: 2px solid #fafafb;
    min-height: 70px;
    width: 100%;
  }
  
  .range {
    color: #25244e;
 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .range__main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .range__main-name {
    padding-right: 10px;
  }

  .range__values {
    text-align: center;
  }

  .home__main-list {
    height: 100%;
    background-color: #fff;
    width: 100%;
    /* margin-left: 25px; */
    padding: 25px;

    overflow: auto;
  }

  .home__main-list-item {
    height: 250px;
    /* background-color: #fafafb; */
    border: 2px solid #fafafb;
    margin-bottom: 25px;

    display: flex;
    cursor: pointer;
  }

  .home__main-list-item:last-child {
    margin-bottom: 0px;
  }

  .home__main-list-item:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .list-item__img img {
    width: 248px;
    height: 248px;
  }

  .list-item__info {}

  .list-item__info-upper {
    padding: 10px;
    height: 50%;
    border-bottom: 2px solid #fafafb;
    
    position: relative;
  }

  .list-item__info-bottom {
    padding: 10px;
  }

  .info__upper-title {
    font-weight: 700;
    font-size: 24px;
  }

  .info__upper-grade {
    display: flex;
    font-weight: 700;
    color: #25244e;
    margin-bottom: 2px;
  }

  .info__upper-place {
    position: absolute;
    bottom: 0;
    color: #059bce;
  }

  .info__upper-grade-main {
    background-color: #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 5px 3px 5px;

    border-radius: 5px 0px 0px 5px;
  }

  .info__upper-grade-counter {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;

    padding: 3px 5px 3px 5px;
    border-radius: 0 5px 5px 0px;
    font-weight: 400;
  }

  .list__bottom-description {
    height: 75px;
    width: 780px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-item__order {
    width: 500px;
    height: 250px;
    
    border-left: 2px solid #fafafb;
  }
  .list-item__order-upper {
    padding: 10px;
    height: 50%;
    border-bottom: 2px solid #fafafb;
    
    position: relative;
  }
  .order__upper-counter {
    color: #059bce;
    text-align: center;
  }

  .order__upper-description {
    text-align: center;
    color: #a4a4a4;
  }

  .list-item__order-bottom {
    background-color: #059bce;
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .order__bottom-price {
    font-weight: 700;
    font-size: 30px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  .order__bottom-additional {
    color: #ededed;
  }


</style>
