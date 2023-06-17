<template>
    <div class="boja">
        <appNav />
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>My profile</h1>
                </div>
                <div class="col-md-12" style="margin-top:20px;margin-bottom:40px;">
                    <div class="row">
                        <div class="col-md-12 col-sm-4" style="margin-bottom:20px;">
                            <i class="fas fa-user" style="color:red; font-size:24px;"></i>
                            <span style="margin-left:10px;font-size:20px;">username</span>
                        </div>
                        <div class="col-md-12 col-sm-4" style="margin-bottom:20px;">
                            <i class="fas fa-address-card" style="color:red; font-size:24px;"></i>
                            <span style="margin-left:10px;font-size:20px;">NAME</span>
                        </div>
                        <div class="col-md-12 col-sm-4" style="margin-bottom:20px;">
                            <i class="fas fa-home" style="color:red; font-size:24px;"></i>
                            <span style="margin-left:10px;font-size:20px;">address</span>
                        </div>
                        <div class="col-md-12 col-sm-4" style="margin-bottom:20px;">
                            <i class="fas fa-envelope" style="color:red; font-size:24px;"></i>
                            <span style="margin-left:10px;font-size:20px;">email</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12" style="margin-bottom:40px;">
                    <h2 style="font-family: 'Norwester', sans-serif;">My reported crimes</h2>    
                </div>    
            </div>    
        </div> 
        <appFooter />
    </div>
</template>

<script>
import appFooter from '@/components/footer.vue'
import appNav from '@/components/nav.vue'
import axios from 'axios';
export default{
    name:"profile",
    components:{
        appFooter,
        appNav
    },
    mounted(){
        
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

*{
    color:white;
}

</style>
