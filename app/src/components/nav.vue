<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black">
    <a class="navbar-brand" href="/home"><img  src="@/assets/logo.png" style="height:70px;width:90px;"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item " :class="{ active: currentView === 'home' }">
          <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item" :class="{ active: currentView === 'aboutUs' }">
          <router-link class="nav-link" :to="{ name: 'aboutUs' }">About Us</router-link>
        </li>
        <li class="nav-item" :class="{ active: currentView === 'contact' }">
          <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
        </li>
        <li class="nav-item" :class="{ active: currentView === 'crimes' }">
          <router-link class="nav-link" :to="{ name: 'crimes' }">Crimes</router-link>
        </li>
        <li class="nav-item" :class="{ active: currentView === 'profile' }">
          <router-link class="nav-link" :to="{ name: 'profile' }">My Profile</router-link>
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
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    currentView() {
      return this.$route.name;
    },
  },
};
</script>

</template>


<style scoped>
.navbar-nav .nav-link {
    position: relative;
    padding-bottom: 5px;
    font-family: 'Norwester', sans-serif;
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