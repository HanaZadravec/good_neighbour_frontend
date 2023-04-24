<template>
    <div class="boja">
        <appNav />
        <appFooter />
    </div>
</template>

<script>
import appFooter from '@/components/footer.vue'
import appNav from '@/components/nav.vue'
export default{
    name:"chat",
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
</style>