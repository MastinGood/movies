<template>
  <div>
    <main class="dark2 w-full md:mt-20 mt-16 pb-20">
      <div class="md:w-10/12 w-11/12 mx-auto pt-16">
        <div>
          <label class="text-lg primary font-bold uppercase tracking-wider">Popular TV Series</label>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <SeriesCard v-for="(popular, index) in populars" :key="index" :series="popular" :data-index="index"/>
          </div>
        </div>
        <div class="relative">
          
        </div>
      </div>
    </main>
  </div>
	
</template>

<script>
  import SeriesCard from '~/components/SeriesCard.vue'
  export default {
    components:{
      SeriesCard
    },
    head(){
    return{
      title: "Popular TV Series",
      meta: [
        {
        hid: 'description',
        name: 'description',
        content: "All popular tv series.",
        }
      ]
      }
  },
    async asyncData({$axios, error, params}){
      try{
        const popular = await $axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=88d32cefcb06d0c3a2834e4897e3896c&page=`+params.page)
        return{
          populars: popular.data.results,
        }    
      } 
      catch(e){
        error({
          statusCode: 503,
          message: 'Unable to fetch TV Series.'
        })
      }
    }
  }
</script>
