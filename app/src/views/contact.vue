<template>
<div class="boja">
    <appNav />
  <section class="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <h1>Contact Us</h1>
        </div>
        <div class="col-md-6" style="margin-top:75px;">
          <p style="font-size:23px;">Phone: 555-333</p>
          <p style="font-size:23px;">E-mail: goodneighbur@gmail.com</p>
          <p style="font-size:23px;">Adress: Ul. Petra Preradovica 9, Pula</p>
        </div>
        <div class="col-md-6" style="margin-bottom:50px;">
          <h2 style="text-align:center;margin-bottom:20px;">Get in Touch</h2>
          <form>
            <div class="form-group">
              <label for="name">Name and surname:</label>
              <input type="text" id="name" v-model="name" class="form-control input-round" placeholder="First and last name" required>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="email" class="form-control input-round" placeholder="Your email address" required>
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" v-model="message" class="form-control input-round" placeholder="message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-round">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <appFooter />
  </div>
</template>

<script>
import appFooter from '@/components/footer.vue'
import appNav from '@/components/nav.vue'
export default{
    name:"contact",
    components:{
        appFooter,
        appNav
    }
}
</script>

<style scoped>
.boja{
    background-size: cover;
    background-position: center;
    background-color: black;
    height: 100%;
    }
h1 {
  font-size: 70px;
  color:white;
  margin-bottom: 30px;
  font-family: 'Norwester', sans-serif;
}
.input-round {
  background-color: #f2f2f2;
  border-radius: 20px;
  border: none;
  padding: 10px;
  font-size: 16px;
  width: 300px;
  margin-bottom: 20px;
  color: #333;
}
* {
  color: white;
  font-family: 'Norwester', sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn-round {
  border-radius: 20px;
  border: none;
  background-color: #f2f2f2;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Norwester', sans-serif;
  text-align: center;
}


</style>