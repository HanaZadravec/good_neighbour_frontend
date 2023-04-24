<<template>
    <div class="boja">
        <appNav />
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>My profile</h1>
                </div>
                <div class="col-md-2" style="margin-bottom:60px;margin-top:20px;">
                    <i class="fas fa-user fa-8x" style="color:red;"></i>    
                </div>
                <div class="col-md-10" style="margin-top:20px;margin-bottom:40px;">
                    <p>username</p>
                    <p>NAME</p>
                    <p>address</p>
                    <p>email</p>
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
export default{
    name:"profile",
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
*{
    color:white;
}
</style>