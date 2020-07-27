<template>
  <div>
    <main class="dark2 w-full md:mt-20 mt-16">
      <div class="md:w-10/12 w-11/12 mx-auto pt-16">
        <div>
          <label class="text-lg primary font-bold uppercase tracking-wider">Trending</label>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            <MovieCard v-for="(trending, index) in trendings.slice(0,18)" :key="index" :movie="trending" :data-index="index"/>
          </div>
        </div>
        <div>
          <label class="text-lg primary font-bold uppercase tracking-wider">Now Playing</label>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            <MovieCard v-for="(now, index) in nows.slice(0,18)" :key="index" :movie="now" :data-index="index"/>
          </div>
        </div>
        <div class="mt-16">
          <label class="text-lg primary font-bold uppercase tracking-wider">Upcoming Movies</label>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            <MovieCard v-for="(upcoming, index) in upcomings.slice(0,18)" :key="index" :movie="upcoming" :data-index="index"/>
          </div>
        </div>
        <div class="mt-16">
          <label class="text-lg primary font-bold uppercase tracking-wider">Popular Movies</label>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            <MovieCard v-for="(popular, index) in populars.slice(0,18)" :key="index" :movie="popular" :data-index="index"/>
          </div>
        </div>
        <div class="mt-16">
          <label class="text-lg primary font-bold uppercase tracking-wider">Top Rated</label>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            <MovieCard v-for="(top, index) in tops.slice(0,18)" :key="index" :movie="top" :data-index="index"/>
          </div>
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
    async asyncData({$axios, error}){
      try{
        const popular = await $axios.get('https://api.themoviedb.org/3/movie/popular?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        const top = await $axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        const now = await $axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=88d32cefcb06d0c3a2834e4897e3896c&language=en-US&page=1')
        const upcoming = await $axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        const trending = await $axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        
        return{
          populars: popular.data.results,
          tops: top.data.results,
          nows: now.data.results,
          upcomings: upcoming.data.results,
          trendings: trending.data.results,
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

