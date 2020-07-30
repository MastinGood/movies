<template>
  <div>
    <main class="dark2 w-full md:mt-20 mt-16 pb-20">
      <div class="md:w-10/12 w-11/12 mx-auto md:pt-16 pt-8">
        <div>
          <label class="md:text-lg text-md primary font-bold uppercase tracking-wider">Trending Movies</label>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <MovieCard v-for="(trending, index) in trendings.slice(0,12)" :key="index" :movie="trending" :data-index="index"/>
          </div>
        </div>
        <div class="mt-16">
          <div class="clearfix">
            <label class="md:text-lg text-md primary font-bold uppercase tracking-wider float-left">Now Playing</label>
            <nuxt-link prefetch to="/movie/now/1" class="float-right md:text-lg sm:text-md text-sm primary font-bold uppercase tracking-wider inline-block flex items-center">More
              <svg class="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            </nuxt-link>
          </div>
          
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <MovieCard v-for="(now, index) in nows.slice(0,12)" :key="index" :movie="now" :data-index="index"/>
          </div>
        </div>
        <div class="mt-16">
           <div class="clearfix">
            <label class="md:text-lg text-md primary font-bold uppercase tracking-wider float-left">Upcoming Movies</label>
            <nuxt-link prefetch to="/movie/upcoming/1" class="float-right md:text-lg sm:text-md text-sm primary font-bold uppercase tracking-wider inline-block flex items-center">More
              <svg class="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            </nuxt-link>
          </div>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <MovieCard v-for="(upcoming, index) in upcomings.slice(0,12)" :key="index" :movie="upcoming" :data-index="index"/>
          </div>
        </div>
        <div class="mt-16">
          <div class="clearfix">
            <label class="md:text-lg text-md primary font-bold uppercase tracking-wider float-left">Popular Movies</label>
            <nuxt-link prefetch to="/movie/popular/1" class="float-right md:text-lg sm:text-md text-sm primary font-bold uppercase tracking-wider inline-block flex items-center">More
              <svg class="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            </nuxt-link>
          </div>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <MovieCard v-for="(popular, index) in populars.slice(0,12)" :key="index" :movie="popular" :data-index="index"/>
          </div>
        </div>
        <div class="mt-16">
          <div class="clearfix">
            <label class="md:text-lg text-md primary font-bold uppercase tracking-wider float-left">Top Rated Movies</label>
            <nuxt-link prefetch to="/movie/top-rated/1" class="float-right md:text-lg sm:text-md text-sm primary font-bold uppercase tracking-wider inline-block flex items-center">More
              <svg class="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            </nuxt-link>
          </div>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <MovieCard v-for="(top, index) in tops.slice(0,12)" :key="index" :movie="top" :data-index="index"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import MovieCard from '~/components/MovieCard.vue'
  export default {
    head(){
    return{
      title: 'Find Movies Online',
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
      MovieCard
    },
    async asyncData({$axios, error}){
      try{
        const popular = await $axios.get('https://api.themoviedb.org/3/movie/popular?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        const top = await $axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        const now = await $axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=88d32cefcb06d0c3a2834e4897e3896c&language=en-US&page=1')
        const upcoming = await $axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        const trending = await $axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        
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

