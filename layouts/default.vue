<template>
  <div>
    <Navbar/>
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
    <!-- <Footer/> -->
  </div>
</template>
<script>
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
  import '~/assets/css/custom.css'
  export default{
    head(){
    return{
      titleTemplate: 'Moviehub - %s',
      meta: [
        {
        hid: 'description',
        name: 'description',
        content: 'Find TV Show Online, Find Movies Online',
        }
      ]
      }
    },
    components:{
      Navbar,
      Footer,
    },
  }
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
</style>
