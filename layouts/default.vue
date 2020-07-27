<template>
  <div>
    <Navbar/>
    <Nuxt />
  </div>
</template>
<script>
  import Navbar from '~/components/Navbar.vue'
  import '~/assets/css/custom.css'
  export default{
    components:{
      Navbar
    }
  }
</script>
