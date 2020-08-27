<template>
  <div>
    <main class="dark2 w-full md:mt-20 mt-16 pb-20">
      <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :fade="true" :swipe="true" :touchMove="true">
        <div v-for="(airing, index) in airings.slice(0,10)" :key="index" class="slider w-full focus:outline-none relative">
          <img :src="backdrop_path+airing.backdrop_path" class="slide-img object-cover object-top h-full w-full focus:outline-none">
          <div class="xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-6/12 w-7/12 absolute bottom-0 xl:ml-40 lg:ml-24 md:ml-20 sm:ml-8 ml-6 lg:mb-24 md:mb-10 sm:mb-10 mb-8">
            <div class="relative">
              <h1 class="text-white lg:text-5xl md:text-4xl sm:text-4xl text-2xl font-semibold leading-none py-2">{{airing.name}}</h1>
              <p class="text-white inline-block lg:text-md md:text-sm text-xs font-medium lg:pr-4 md:pr-3 pr-2">
                 Rating : 
                <!-- <svg class="h-6 w-6 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg> -->
             <span class="primary">{{airing.vote_average * 10}}% </span>
              </p>
              <p class="text-white inline-block lg:text-md md:text-sm text-xs font-medium lg:pr-4 md:pr-3 pr-2">
                 Popularity : 
                <!-- <svg class="h-6 w-6 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg> -->
             <span class="primary">{{airing.popularity}} </span>
              </p>
              <p class="md:block hidden text-white pt-2">{{airing.overview | truncate(200, '...')}}</p>
            </div>
          </div>
         <div class="dark-gradient"></div>
        </div>
      </VueSlickCarousel>
      <div class="md:w-10/12 w-11/12 mx-auto md:pt-16 pt-8">
        <div>
           <div class="clearfix">
            <label class="md:text-lg text-md primary font-bold uppercase tracking-wider float-left">TV Airing Today</label>
            <nuxt-link to="/series/airing/1" class="float-right md:text-lg sm:text-md text-sm primary font-bold uppercase tracking-wider inline-block flex items-center">More
              <svg class="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            </nuxt-link>
          </div>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <SeriesCard v-for="(airing, index) in airings.slice(0,12)" :key="index" :series="airing" :data-index="index"/>
          </div>
        </div>
        <div class="mt-16">
           <div class="clearfix">
            <label class="md:text-lg text-md primary font-bold uppercase tracking-wider float-left">TV On The Air</label>
            <nuxt-link to="/series/onair/1" class="float-right md:text-lg sm:text-md text-sm primary font-bold uppercase tracking-wider inline-block flex items-center">More
              <svg class="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            </nuxt-link>
          </div>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <SeriesCard v-for="(onair, index) in onairs.slice(0,12)" :key="index" :series="onair" :data-index="index"/>
          </div>
        </div>
        <div class="mt-16">
           <div class="clearfix">
            <label class="md:text-lg sm:text-md text-sm primary font-bold uppercase tracking-wider float-left">Popular TV Series</label>
            <nuxt-link to="/series/popular/1" class="float-right md:text-lg sm:text-md text-sm primary font-bold uppercase tracking-wider inline-block flex items-center">More
              <svg class="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            </nuxt-link>
          </div>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <SeriesCard v-for="(popular, index) in populars.slice(0,12)" :key="index" :series="popular" :data-index="index"/>
          </div>
        </div>
         <div class="mt-16">
           <div class="clearfix">
            <label class="md:text-lg text-md primary font-bold uppercase tracking-wider float-left">Top Rated TV Series</label>
            <nuxt-link to="/series/top/1" class="float-right md:text-lg sm:text-md text-sm primary font-bold uppercase tracking-wider inline-block flex items-center">More
              <svg class="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            </nuxt-link>
          </div>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <SeriesCard v-for="(toprated, index) in toprateds.slice(0,12)" :key="index" :series="toprated" :data-index="index"/>
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
  import SeriesCard from '~/components/SeriesCard.vue'
  export default {
    head(){
    return{
      title: 'Find TV Shows Online',
      meta: [
        {
        hid: 'description',
        name: 'description',
        content: 'Find TV Shows Online',
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
      SeriesCard,
       VueSlickCarousel,
    },
    async asyncData({$axios, error}){
      try{
       
        const airing = await $axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}`)
        const onair = await $axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}`)
        const popular = await $axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`)
        const toprated = await $axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}`)       
        return{
          airings: airing.data.results,
          onairs: onair.data.results,
          populars: popular.data.results,
          toprateds: toprated.data.results,
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

