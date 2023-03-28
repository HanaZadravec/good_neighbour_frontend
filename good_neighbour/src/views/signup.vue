<template>
<div class="slika">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 style="font-family: 'Norwester', sans-serif;color:white;font-size:100px;margin-top:30px;">SIGN UP</h1>
            </div>
        </div>
        <button class="button">Sign up</button>
    </div>
</div>
</template>


<script>
export default{
    name:'signup'
}
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