<template>
    <div class="slika">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 style="font-family: 'Norwester', sans-serif;color:white;font-size:120px;margin-top:30px;margin-bottom:30px;">SIGN UP</h1>
                </div>
                  <div class="col-lg-6">
              <input type="text" name="firstName" placeholder="YOUR FIRST NAME..." required>
            </div>
            <div class="col-lg-6">
              <input type="text" name="lastName" placeholder="YOUR LAST NAME..." required>
            </div>
            <div class="col-lg-6 d-flex">
                  <input :type="showPassword ? 'text' : 'password'" name="pass" class="input" placeholder="ENTER PASSWORD..." v-model="password" required>
                  <button class="button" @click="toggleShowPassword" style="border: none; background-color: #060706;">
                    <span class="icon is-small">
                      <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                    </span>
                  </button>
            </div>
            <div class="col-lg-6 d-flex">
              <input :type="showConfirmPassword ? 'text' : 'password'" class="input" name="confirmPass" placeholder="CONFIRM PASSWORD..." v-model="confirmPassword" required>
                  <button class="button" @click="toggleShowConfirmPassword" style="border: none; background-color: #060706;">
                    <span class="icon is-small">
                      <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                    </span>
                  </button>
            </div>
            <div class="col-lg-6">
              <input type="email" name="email" placeholder="YOUR EMAIL..." required>
            </div>
            <div class="col-lg-6">
              <input type="text" name="address" placeholder="YOUR ADDRESS..." required>
            </div>
            <div class="col-lg-9 text-center">
              <button class="button" style="margin-top:80px;">Sign up</button>
            </div>
            </div>
        </div>
    </div>
    </template>
    <script>
    export default {
      name: 'signup',
      data() {
        return {
          showPassword: false,
          showConfirmPassword: false,
          password: null,
          confirmPassword : null,
        };
      },
      computed: {
        passwordButtonLabel() {
          return (this.showPassword) ? "Hide" : "Show";
        },
        confirmPasswordButtonLabel() {
          return (this.showConfirmPassword) ? "Hide" : "Show";
        },
      },
      methods: {
        toggleShowPassword() {
          this.showPassword = !this.showPassword;
        },
        toggleShowConfirmPassword() {
          this.showConfirmPassword = !this.showConfirmPassword;
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
    display:block;
    margin-bottom:25px;
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
    </style>