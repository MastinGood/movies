<template>
  <div>
    <main class="dark2 w-full md:mt-20 mt-16 pb-20">
      <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :fade="true" :swipe="true" :touchMove="true">
        <div v-for="(trending, index) in trendings.slice(0,10)" :key="index" class="slider w-full focus:outline-none relative">
          <img :src="backdrop_path+trending.backdrop_path" class="slide-img object-cover object-top h-full w-full focus:outline-none">
          <div class="xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-6/12 w-7/12 absolute bottom-0 xl:ml-40 lg:ml-24 md:ml-20 sm:ml-8 ml-6 lg:mb-24 md:mb-10 sm:mb-10 mb-8">
            <div class="relative">
              <h1 class="text-white lg:text-5xl md:text-4xl sm:text-4xl text-2xl font-semibold leading-none py-2">{{trending.title}}</h1>
              <p class="text-white inline-block lg:text-md md:text-sm text-xs font-medium lg:pr-4 md:pr-3 pr-2">
                 Rating : 
                <!-- <svg class="h-6 w-6 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg> -->
             <span class="primary">{{trending.vote_average * 10}}% </span>
              </p>
              <p class="text-white inline-block lg:text-md md:text-sm text-xs font-medium lg:pr-4 md:pr-3 pr-2">
                 Popularity : 
                <!-- <svg class="h-6 w-6 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg> -->
             <span class="primary">{{trending.popularity}} </span>
              </p>
              <p class="md:block hidden text-white pt-2">{{trending.overview | truncate(200, '...')}}</p>
            </div>
          </div>
         <div class="dark-gradient"></div>
        </div>
      </VueSlickCarousel>
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
        <!-- <div class="mt-16">
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
        </div> -->
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
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
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
     filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },
    data(){
    return{
      backdrop_path: "https://image.tmdb.org/t/p/original/",
      }
    },
    components:{
      MovieCard,
      VueSlickCarousel,
    },
    async asyncData({$axios, error}){
      try{
        const popular = await $axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
        const top = await $axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`)
        const now = await $axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`)
        // const upcoming = await $axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`)
        const trending = await $axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`)
        
        return{
          populars: popular.data.results,
          tops: top.data.results,
          nows: now.data.results,
          // upcomings: upcoming.data.results,
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

