<template>
  <div class="slika">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>SIGN UP</h1>
        </div>
        <form @submit.prevent="saveData">
          <div class="col-lg-6">
            <input type="text" v-model="user.firstname" name="firstName" placeholder="YOUR FIRST NAME..." required autocomplete="off">
          </div>
          <div class="col-lg-6">
            <input type="text" v-model="user.lastname" name="lastName" placeholder="YOUR LAST NAME..." required autocomplete="off">
          </div>
          <div class="col-lg-6 d-flex">
            <input :type="showPassword ? 'text' : 'password'" name="pass" class="input" placeholder="ENTER PASSWORD..." v-model="user.password" required autocomplete="off">
            <button class="button" @click="toggleShowPassword" style="border: none; background-color: #060706;">
              <span class="icon is-small">
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </span>
            </button>
          </div>
          <div class="col-lg-6 d-flex">
            <input :type="showConfirmPassword ? 'text' : 'password'" class="input" name="confirmPass" placeholder="CONFIRM PASSWORD..." v-model="user.confirmPassword" required autocomplete="off">
            <button class="button" @click="toggleShowConfirmPassword" style="border: none; background-color: #060706;">
              <span class="icon is-small">
                <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </span>
            </button>
          </div>
          <div class="col-lg-6">
            <input v-model="user.email" type="email" name="email" placeholder="YOUR EMAIL..." required autocomplete="off">
          </div>
          <div class="col-lg-6">
            <input v-model="user.address" type="text" name="address" placeholder="YOUR ADDRESS..." required autocomplete="off">
          </div>
          <div class="col-lg-9 text-center">
            <button class="submit button" style="margin-top:80px;">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;
export default {
  name: 'signup',
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      result: {},
      user: {
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        address: ''
      }
    };
  },
  computed: {
    passwordButtonLabel() {
      return this.showPassword ? 'Hide' : 'Show';
    },
    confirmPasswordButtonLabel() {
      return this.showConfirmPassword ? 'Hide' : 'Show';
    }
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    toggleShowConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    saveData() {
      if (this.user.password !== this.user.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      axios.post('http://localhost:5000/user/create', this.user).then(({ data }) => {
        alert('Saved');
      });
    }
  }
};
</script>

<style scoped>
input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #DD0202;
  outline: none;
  font-size: 20px;
  color: white;
  font-family: 'Norwester', sans-serif;
  padding: 5px;
  display: block;
  margin-bottom: 25px;
}

h1 {
  font-family: 'Norwester', sans-serif;
  color: white;
  font-size: 120px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.slika {
  background-image: url("@/assets/pocetna.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.button {
  background-color: #111010;
  border: 2px solid #98938a;
  border-radius: 25px;
  color: #fff;
  font-size: 1rem;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all 0.2s;
  margin-right: 10px;
  height: 50px;
  text-decoration: none;
}

.button:hover {
  background-color: #f6f7f7;
  color: #98938a;
}

@media only screen and (max-width: 992px) {
  .slika {
    height: 140vh;
  }

  h1 {
    font-size: 80px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
</style>
