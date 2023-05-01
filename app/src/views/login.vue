<template>
    <div class="slika">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1>LOG IN</h1>
          </div>
          <div class="col-lg-12" style="margin-top:20px;">
            <input type="text" placeholder="YOUR EMAIL..." style="display:block; margin-bottom: 25px;" required/>
            <div class="field" style="display: flex;">
              <div class="control is-expanded" style="flex: 1;">
                <input :type="showPassword ? 'text' : 'password'" class="input" placeholder="YOUR PASSWORD..." v-model="password" required>
                <button class="button" @click="toggleShow" style="border: none; background-color: #060706;">
                  <span class="icon is-small">
                    <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </span>
                </button>
              </div>
            </div>
            <button class="button" style="display:block;margin-top:35px;">Log in</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  export default {
    name: 'login',
    data() {
      return {
        showPassword: false,
        password: null
      };
    },
    computed: {
      buttonLabel() {
        return (this.showPassword) ? "Hide" : "Show";
      }
    },
    methods: {
      toggleShow() {
        this.showPassword = !this.showPassword;
      }
    }
  };
  </script>
  
  <style scoped>
  h1{
    font-family: 'Norwester', sans-serif;
    color:white;
    font-size:120px;
    margin-top:15px;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #DD0202;
    outline: none;
    font-size: 20px;
    color: white;
    font-family: 'Norwester', sans-serif;
    padding: 5px;
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
  h1{
    font-size: 80px;
    margin-top:15px;
  }
}
  </style>