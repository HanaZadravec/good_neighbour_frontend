<template>
  <div class="boja">
    <appNav />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Crimes</h1>
        </div>
        <div class="col-md-12 filter-inputs" style="margin-bottom:30px;">
          <div>
            <label for="location" style="font-size:20px;">Location:</label>
            <input type="text" id="location" v-model="locationFilter" class="input-round"/>
          </div>
          <div>
            <label for="date" style="font-size:20px;">Date:</label>
            <input type="date" id="date" v-model="dateFilter" class="input-round"/>
          </div>
          <div>
            <button @click="applyFilters" class="btn btn-round">Filter</button>
          </div>
        </div>
      </div>
    </div>
    <appFooter />
  </div>
</template>

<script>
import appFooter from '@/components/footer.vue'
import appNav from '@/components/nav.vue'
export default{
    name:"crimes",
    components:{
        appFooter,
        appNav
    },
     data() {
    return {
      locationFilter: "",
      dateFilter: "",
    };
  },
  methods: {
    applyFilters() {
      // ovdje se može pozvati API za dohvaćanje podataka o zločinima s filterima
      console.log(`Filtriraj zločine za mjesto ${this.locationFilter} i datum ${this.dateFilter}`);
    },
  },
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
.input-round {
  background-color: #f2f2f2;
  border-radius: 20px;
  border: none;
  padding: 10px;
  margin:10px;
  font-size: 16px;
  width: 200px;
  margin-bottom: 20px;
  color: #333;
}
*{
    color:white;
    font-family: 'Norwester', sans-serif;
}
</style>