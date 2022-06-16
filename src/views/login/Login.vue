<template>
  <h1 v-if="user">Добро пожаловать, ваш уникальный id: {{ user.id }}</h1>
  <h1 v-if="user" @click="logout()" class="login__logout">Выйти</h1>
  <div v-if="!user" class="login"> 
    <div class="login__form">
      <div v-if="loginCondition === 'LOGIN'" class="login__form-title">Авторизация</div>
      <div v-if="loginCondition === 'REGISTRATION'" class="login__form-title">Регистрация</div>
      <div class="login__form-data">
        <div class="login__data">
          <div class="login__data-title">Почта:</div>
          <div class="login__data-input">
            <input v-model="email" type="text">
          </div>
        </div>
        <div class="login__data">
          <div class="login__data-title">Пароль: {{ user }}</div>
          <div class="login__data-input">
            <input v-model="password" type="text">
          </div>
        </div>
        <div class="login__confirm" @click="submit()">
          {{ loginCondition === 'LOGIN' ? 'Войти' : 'Зарегистрироваться'}}
        </div>
        <div @click="toggleLoginCondition()" class="login__subtitle">Нет аккаунта? Зарегистрируйтесь</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      submitStatus: null,
      loginCondition: 'LOGIN'
    }
  },
  computed: {
    user () {
      return this.$store.state.user.user
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    submit () {
      const user = {
        email: this.email,
        password: this.password
      }

      if(this.loginCondition === 'REGISTRATION') {
        this.$store.dispatch('registerUser', user).then(() => {
        this.submitStatus = 'OK'
        }).catch((err) => {
          alert(err.message)
          this.submitStatus = err.message
        })
      } else {
        this.$store.dispatch('signIn', user).then(() => {
        this.submitStatus = 'OK'
        }).catch((err) => {
          alert(err.message)
          this.submitStatus = err.message
        })
      }
    },

    toggleLoginCondition () {
      if(this.loginCondition === 'LOGIN') {
        this.loginCondition = 'REGISTRATION'
      } else {
        this.loginCondition = 'LOGIN'
      }
      console.log(this.loginCondition)
    },

    logout () {
      this.$store.dispatch('logoutUser')
    }
  }
}

</script>

<style>
  .login {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    
  }

  .login__form {
    width: 400px;
    height: 270px;
    background-color: #fff;
    /* border: 2px solid #fafafb; */
    padding: 25px;
  }

  .login__form-title {
    font-size: 24px;
    font-weight: 700;
  }

  .login__data-input input {
    width: 100%;
  }

  .login__data-input {
    border-color: red;
  }
  

  .login__confirm {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color: #fafafb;
    margin: 15px 0 5px 0;
  }

  .login__confirm:hover {
    cursor: pointer;
  }

  .login__subtitle {
    color: #059bce;
    cursor: pointer;
  }

  .login__subtitle:hover {
    color: #0186b3;
  }

  .login__logout {
    color: #fff;
    cursor: pointer;
    background-color: #0186b3;
    width: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login__logout:hover {
    color: #e4e4e4;
  }
  </style>
