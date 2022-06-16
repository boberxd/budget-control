<template>
  <div class="home">
    <div class="home__title">
      <h1>Домашняя</h1>
    </div>
    <button v-if="isAdmin" @click="create()">Создать</button>
    <div class="home__main">
      <!-- <div class="home__main-filters">
        <div class="filter__item">
          <div class="range">
            <div class="range__main">
              <div class="range__main-name">
                Бюджет
              </div>
              <div class="range__main-input">
                <input min="0" max="1000" value="50" type="range">
              </div>
            </div>
            <div class="range__values">
              0 — 0 ₽
            </div>
          </div>
        </div>
        <div class="filter__item">
          <filter-checkbox 
            title="Питание"
            :items="supplyList" 
          />
        </div>
        <div class="filter__item">
          <filter-checkbox 
            title="Удобства"
            :items="convenienceList" 
          />
        </div>
      </div> -->
      <div v-if="tasks.length" class="home__main-list">
        <div @click="order(item)" class="home__main-list-item" v-for="(item, key) in tasks" :key="key">
          <div class="list-item__img">
            <img :src="item.imgURL" alt="Неккоректный URL у картинки">
          </div>
          <div class="list-item__info">
            <div class="list-item__info-upper">
              <div class="info__upper-grade">
                <div class="info__upper-grade-main">
                Оценка {{ item.grade }}
                </div>
                <!-- <div class="info__upper-grade-counter">
                  {{ item.reviewCount }} отзывов
                </div> -->
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
              <!-- <div class="order__upper-counter">
                Забронировано {{ item.orderCount }} раза за месяц
              </div> -->
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
      <div v-else class="home__main-list"><h3>Список туров пуст.</h3></div>
    </div>
  </div>
</template>

<script>

// import filterCheckbox from '@/views/filterCheckbox/filterCheckbox.vue'

export default {
  name: 'Home',
  // components: {'filter-checkbox': filterCheckbox},
  data () {
    return {
      itemList: [
        {
          img: 'https://project-seo.net/wp-content/uploads/2019/12/URL.png',
          grade: '4.0',
          // reviewCount: 5,
          title: 'IL Mercato Hotel & Spa',
          place: 'Шарм-Эль-Шейх, Египет',
          description: 'Отель имеет 318 номеров, состоит из одного здания и отдельно стоящих двухэтажных 2 зданий, 2 лифта. Отель построен в 2010 году, последняя реновация в 2018 году. До центра города Шарм-эль-Шейх - 7,8 км. До Международного аэропорта Шарм-эль-Шейх (Sharm el-Sheikh International Airport) - 19 км.',
          orderCount: 185,
          additionalInformation: '2 взрослых c 13 марта на 8 ночей, перелет включен',
          price: 29050,
          fuelSurcharge: 53
        },
        {
          img: '../../img/eftaliya.png',
          grade: '2.3',
          reviewCount: 17,
          title: 'KAMELIYA SELIN HOTEL',
          place: 'Анталья, Турция',
          description: 'Обновленный отель цепочки Eftalia расположен в 4 км от поселка Конаклы с развитой инфраструктурой. В 150 м от отеля находится собственный песчаный пляж — один из самых больших на Анталийском побережье, с уникальным развлекательным комплексом Eftalia Island. ',
          orderCount: 56,
          additionalInformation: 'Отель включен в Sun Family Club лето 2022.',
          price: 57232,
          fuelSurcharge: 6223
        },
        {
          img: '../../img/eftaliya.png',
          grade: '3.0',
          reviewCount: 17,
          title: 'ОТЕЛЬ ПРОМЕТЕЙ КЛУБ',
          place: 'Анталья, Турция',
          description: 'Обновленный отель цепочки Eftalia расположен в 4 км от поселка Конаклы с развитой инфраструктурой. В 150 м от отеля находится собственный песчаный пляж — один из самых больших на Анталийском побережье, с уникальным развлекательным комплексом Eftalia Island. ',
          orderCount: 42,
          additionalInformation: 'Отель включен в Sun Family Club лето 2022.',
          price: 42000,
          fuelSurcharge: 512
        },
        {
          img: '../../img/eftaliya.png',
          grade: '4.2',
          reviewCount: 17,
          title: 'CHAMPION HOLIDAY VILLAGE',
          place: 'Анталья, Турция',
          description: 'Обновленный отель цепочки Eftalia расположен в 4 км от поселка Конаклы с развитой инфраструктурой. В 150 м от отеля находится собственный песчаный пляж — один из самых больших на Анталийском побережье, с уникальным развлекательным комплексом Eftalia Island. ',
          orderCount: 56,
          additionalInformation: 'Отель включен в Sun Family Club лето 2022.',
          price: 14772,
          fuelSurcharge: 500
        },
        {
          img: '../../img/eftaliya.png',
          grade: '4.0',
          reviewCount: 17,
          title: 'PALMERAS BEACH HOTEL',
          place: 'Анталья, Турция',
          description: 'Обновленный отель цепочки Eftalia расположен в 4 км от поселка Конаклы с развитой инфраструктурой. В 150 м от отеля находится собственный песчаный пляж — один из самых больших на Анталийском побережье, с уникальным развлекательным комплексом Eftalia Island. ',
          orderCount: 56,
          additionalInformation: 'Отель включен в Sun Family Club лето 2022.',
          price: 120000,
          fuelSurcharge: 124
        }
      ],
      convenienceList: [
        { title: 'Близко к центру', checked: false },
        { title: 'Отдых с детьми', checked: false },
        { title: 'Идеально для пар', checked: false },
        { title: 'Кондиционер', checked: false },
        { title: 'Интернет', checked: false },
        { title: 'Оздоровительные туры', checked: false },
      ],

      supplyList: [
        { title: 'AI — всё включено', checked: false },
        { title: 'BB — завтрак', checked: false },
        { title: 'LHB — завтрак, обед', checked: false },
        { title: 'FB — завтрак, обед, ужин', checked: false },
        { title: 'HB — завтрак, ужин', checked: false },
        { title: 'RO — без питания', checked: false },
      ]
    }
  },
  computed: {
    isAdmin () {
      return this.$store.state.user.user?.id === 'QF6HZYwCalcQid5PA8pamgNjGQY2'
    },
    tasks () {
      return this.$store.state.task.tasks.filter(item => !item.user)
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

    order (item) {
      let answer = null
      if (!this.isAdmin) {
        answer = confirm('Вы хотите заказать этот тур?')
      }
      
      if(answer) {
        this.$store.dispatch('editTask', {
          id: item.id,
          user: this.$store.state.user.user.id
        }).then(() => {
          this.$store.dispatch('loadTasks')
        })
        return;
      }

      const answer2 = confirm('Вы хотите удалить этот тур?')
      if(answer2) {
        this.$store.dispatch('deleteTask', item.id).then(() => {
          this.$store.dispatch('loadTasks')
        })
        return;
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
