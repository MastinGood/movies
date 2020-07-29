<template>
  <div>
    <main class="dark2 w-full md:mt-20 mt-16 pb-20">
      <div class="md:w-10/12 w-11/12 mx-auto pt-16">
        <div>
          <label class="text-lg primary font-bold uppercase tracking-wider">Popular Movies</label>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <MovieCard v-for="(now, index) in nows" :key="index" :movie="now" :data-index="index"/>
          </div>
        </div>
        <div class="relative">
          
        </div>
      </div>
    </main>
  </div>
	
</template>

<script>
  import MovieCard from '~/components/MovieCard.vue'
  export default {
    components:{
      MovieCard
    },
    head(){
    return{
      title: "Popular Movies",
      meta: [
        {
        hid: 'description',
        name: 'description',
        content: "All popular movies.",
        }
      ]
      }
  },
    async asyncData({$axios, error, params}){
      try{
        const now = await $axios.get('https://api.themoviedb.org/3/movie/popular?api_key=88d32cefcb06d0c3a2834e4897e3896c&page='+params.page)
        return{
          nows: now.data.results,
        }    
      } 
      catch(e){
        error({
          statusCode: 503,
          message: 'Unable to fetch Movies.'
        })
      }
    }
  }
</script>
