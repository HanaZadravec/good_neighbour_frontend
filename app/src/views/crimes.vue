<template>
  <div class="boja">
    <appNav />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Crimes</h1>
        </div>
        <div class="col-md-12 filter-inputs" style="margin-bottom: 30px;">
          <div>
            <label for="location" style="font-size: 20px;">Location:</label>
            <input type="text" id="location" v-model="locationFilter" class="input-round" />
          </div>
          <div>
            <label for="date" style="font-size: 20px;">Date:</label>
            <input type="date" id="date" v-model="dateFilter" class="input-round" />
          </div>
          <div>
            <button @click.prevent="applyFilters" class="btn btn-round">Filter</button>
          </div>
        </div>

        <div class="col-md-12">
          <div
            class="card text-center"
            style="margin: 20px;"
            v-for="crime in filteredCrimes"
            :key="crime._id"
          >
            <div class="card-header">
              Reported by: {{ crime.reporterEmail }}
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ crime.crimeTitle }}</h5>
              <p class="card-text">Address: {{ crime.crimeAddress }}, {{ crime.crimeCity }}</p>
              <p class="card-text">Description: {{ crime.crimeDesc }}</p>
            </div>
            <div class="card-footer text-muted">
              {{ formatDate(crime.crimeDate) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <appFooter />
  </div>
</template>

<script>
import appFooter from "@/components/footer.vue";
import appNav from "@/components/nav.vue";
import axios from "axios";
export default {
  name: "crimes",
  components: {
    appFooter,
    appNav,
  },
  data() {
    return {
      locationFilter: "",
      dateFilter: "",
      crimes: [],
      filteredCrimes: [],
    };
  },
  mounted() {
    this.fetchCrimes();
  },
  methods: {
    fetchCrimes() {
      axios
        .get("http://localhost:4000/crimes")
        .then((response) => {
          // Sortiranje zločina prema crimeDate polju
          response.data.sort((a, b) => new Date(b.crimeDate) - new Date(a.crimeDate));
          this.crimes = response.data;
          this.filteredCrimes = response.data;
        })
        .catch((error) => {
          console.error("Failed to fetch crimes:", error);
        });
    },
    applyFilters() {
      let filteredCrimes = this.crimes;
      
      if (this.dateFilter && this.locationFilter) {
        filteredCrimes = this.crimes.filter(
          (crime) =>
            new Date(crime.crimeDate).toISOString().substr(0, 10) === this.dateFilter &&
            crime.crimeCity.toLowerCase().includes(this.locationFilter.toLowerCase())
        );
      } else if (this.dateFilter) {
        filteredCrimes = this.crimes.filter(
          (crime) =>
            new Date(crime.crimeDate).toISOString().substr(0, 10) === this.dateFilter
        );
      } else if (this.locationFilter) {
        filteredCrimes = this.crimes.filter((crime) =>
          crime.crimeCity.toLowerCase().includes(this.locationFilter.toLowerCase())
        );
      }
      
      this.filteredCrimes = filteredCrimes;
    },
    formatDate(date) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.boja {
  background-size: cover;
  background-position: center;
  background-color: black;
  height: 100%;
}
label {
  color: white;
}
h1 {
  font-size: 70px;
  color: white;
  margin-bottom: 30px;
  font-family: "Norwester", sans-serif;
}
.btn-round {
  border-radius: 20px;
  border: none;
  background-color: #f2f2f2;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  font-family: "Norwester", sans-serif;
  text-align: center;
}
.input-round {
  background-color: #f2f2f2;
  border-radius: 20px;
  border: none;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  width: 200px;
  margin-bottom: 20px;
  color: #333;
}
* {
  font-family: "Norwester", sans-serif;
}
.card {
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  color: black;
}
</style>
