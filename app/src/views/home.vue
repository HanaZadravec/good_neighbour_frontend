<template>
    <div class="boja">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
      <a class="navbar-brand" href="/home"><img  src="@/assets/logo.png" style="height:70px;width:90px;"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Crimes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">My Profile</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-comments"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-bell"></i></a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="home">
        <div class="map" ref="map"></div>
      </div>
    </div>
    </template>
    
    
    <script>
    export default {
      name: "home",
      data() {
        return {
          map: null
        }
      },
      mounted() {
        this.initMap();
      },
      methods: {
        initMap() {
          // Učitaj Google Maps API
          let googleMapsScript = document.createElement('script');
          googleMapsScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY');
          document.head.appendChild(googleMapsScript);
    
          // Inicijalizacija mape
          googleMapsScript.onload = () => {
            this.map = new google.maps.Map(this.$refs.map, {
              center: {lat: 45.815399, lng: 15.966568},
              zoom: 12
            });
          }
        }
      }
    }
    </script>
    
    <style>
    
    
    .boja{
        background-size: cover;
      background-position: center;
      height: 100vh;
      background-color: black;
    }
    .navbar-nav .nav-link {
      position: relative;
      padding-bottom: 5px;
    }
    
    .navbar-nav .nav-link:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: red;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
      transform-origin: center;
    }
    
    .navbar-nav .nav-link:hover:after {
      transform: scaleX(1);
    }
    
    
    </style>