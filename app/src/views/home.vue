<template>
    <div class="boja">
     <appNav />
     <div class="container mt-2" >
      <div class="row">
    <div class="col-md-12">
      <div class="welcome-message">
  <h1>Welcome to Good Neighbourgh!</h1>
  <p>The app that connects you with your community to help keep your neighbourhood safe.</p>
  <p>Are you worried about crime in your area? Good Neighbourgh is here to help.</p>
</div>
<div class="row justify-content-center">
<div class="col-md-6">
          <h1 style="margin-top:50px;">Report a crime</h1>
          <form @submit.prevent="reportCrime" class="card">
            <div class="card-body">
              <div class="form-group">
                <input type="text" class="form-control" v-model="crimeTitle" placeholder="Enter crime title">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" v-model="crimeAddress" placeholder="Enter crime address">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" v-model="crimeCity" placeholder="Enter crime city">
              </div>
              <div class="form-group">
                <textarea class="form-control" v-model="crimeDesc" placeholder="Enter crime description" rows="5"></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-danger">Submit</button>
              </div>
            </div>
          </form>
        </div>
    </div>
  </div>
  </div>
    <div class="row justify-content-center" style="margin-top:70px;">
      <div class="col-md-6" >
        <form class="card">
          <div class="card-body">
            <div class="form-group">
              <div class="alert alert-danger" role="alert" v-show="error">{{ error }}</div>
              <div class="input-group">
                <input type="text" id="autocomplete" class="form-control form-control-lg" placeholder="Enter your address"  v-model="address"/>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="getLocation()">
                    <i class="fas fa-map-marker-alt text-danger" v-if="!loading"></i>
                    <i class="fas fa-spinner fa-spin text-danger" v-if="loading"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row" style="margin-top:30px;">
    <div id="map" class="col-md-12" style="margin-bottom:30px;"></div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <h1 style="font-family: 'Norwester', sans-serif;color:white;margin-top:30px;margin-bottom:30px;">RECENT CRIMES</h1>
    <div class="card" style="margin:20px;" v-for="crime in crimes" :key="crime._id">
    <div class="card-body">
      <h5 class="card-title">Reported by: {{ crime.reporterEmail }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Title: {{ crime.crimeTitle }}</h6>
      <p class="card-text">Address: {{ crime.crimeAddress }}, {{ crime.crimeCity }}</p>
      <p class="card-text">Description: {{ crime.crimeDesc }}</p>
    </div>
    </div>
    </div>
  </div>
  </div>
  <appFooter />
</div>
</template>
    
<script>
import axios from 'axios';
import appFooter from '@/components/footer.vue'
import appNav from '@/components/nav.vue'
export default {
  name:"home",
  components:{
    appFooter,
    appNav,
  },
  data() {
    return {
      crimeTitle:'',
      crimeAddress:'',
      crimeCity:'',
      crimeDesc:'',
      address: "",
      error: "",
      loading:false,
      email:'',
      crimes: []
    };
  },
  mounted() {
  const scriptId = 'google-maps-script';

  // Check if script element already exists
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAay79GKowxtYgqzeHPLNaD4YuxOn_SndY&libraries=places&callback=initMap';
    script.defer = true;
    script.async = true;
    window.initMap = this.initMap;
    document.head.appendChild(script);
  }
  
   axios.get("http://localhost:4000/user", {headers:{token: localStorage.getItem('token')}}).then(res =>{
     this.email=res.data.user.email;
    });
    axios.get("http://localhost:4000/crimes")
    .then(response => {
      // Sortiranje zločina prema crimeDate polju
      response.data.sort((a, b) => new Date(b.crimeDate) - new Date(a.crimeDate));
      // Ograničavanje na prvih 5 najnovijih zločina
      this.crimes = response.data.slice(0, 5);
    })
    .catch(error => {
      console.error("Failed to fetch crimes:", error);
    });
    
},
  methods: {
    reportCrime(){
      const currentDate = new Date();
      let newCrime ={
        reporterEmail:this.email,
        crimeTitle:this.crimeTitle,
        crimeAddress:this.crimeAddress,
        crimeCity:this.crimeCity,
        crimeDesc:this.crimeDesc,
        crimeDate: currentDate
      }
      console.log(newCrime);
      axios.post("http://localhost:4000/createCrime", newCrime).then(res=>{
        alert("successfully reported crime!");
        this.crimeTitle = '';
        this.crimeAddress = '';
        this.crimeCity = '';
        this.crimeDesc = '';
        this.fetchCrimes();
      }, err =>{
        alert("Failed to report a crime!");
      });
    },
    fetchCrimes() {
  axios.get("http://localhost:4000/crimes")
    .then(response => {
      // Sortiranje zločina prema crimeDate polju
      response.data.sort((a, b) => new Date(b.crimeDate) - new Date(a.crimeDate));
      // Ograničavanje na prvih 5 najnovijih zločina
      this.crimes = response.data.slice(0, 5);
    })
    .catch(error => {
      console.error("Failed to fetch crimes:", error);
    });
},
    initMap() {
      let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));

      autocomplete.addListener("place_changed", () =>{
        let place = autocomplete.getPlace();
        this.showUserLocationOnTheMap(place.geometry.location.lat(), place.geometry.location.lng())
      });
    }
  ,
    getLocation() {
  if (navigator.geolocation) {
    this.loading = true;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.showUserLocationOnTheMap(position.coords.latitude, position.coords.longitude);
        this.getAddressFrom(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        this.loading = false;
        this.error = "Locator is unable to find the address. Please type your location manually.";
      }
    );
  } else {
    this.loading = false;
    this.error = "Geolocation is not supported by this browser.";
  }
},
    getAddressFrom(lat, long) {
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyAay79GKowxtYgqzeHPLNaD4YuxOn_SndY"
        )
        .then((response) => {
          if (response.data.error_message) {
            this.loading = false; 
            this.error = response.data.error_message;
          } else {
            this.address = response.data.results[0].formatted_address;
          }
        })
        .catch((error) => {
          this.loading = false;
          this.error = error.message;
        })
        .finally(() => {
          this.loading = false; 
        });
    },
   showUserLocationOnTheMap(latitude, longitude){
      let map = new google.maps.Map(document.getElementById("map"), {
        zoom:15,
        center: new google.maps.LatLng(latitude,longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      })

      // dodajemo marker za lokaciju
      new google.maps.Marker({
        position: new google.maps.LatLng(latitude,longitude),
        map:map
      })
    }
  },
}
</script>
    
    <style>
    .welcome-message {
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
}

.welcome-message h1 {
  color: red;
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-family: 'Norwester', sans-serif;
}

h1{
  color: white;
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-family: 'Norwester', sans-serif;
}

.welcome-message p {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-family: 'Norwester', sans-serif;
}  
    .boja{
        background-size: cover;
      background-position: center;
      background-color: black;
      height: 100%;
    }
    
    
    .alert {
  border-color: #b71c1c;
  color: black;
}
#map {
  height: 480px;
 position: relative;
}
</style>