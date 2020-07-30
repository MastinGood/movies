<template>
  <div>
    <main class="dark2 w-full md:mt-20 mt-16 pb-20">
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
    components:{
      SeriesCard,
    },
    async asyncData({$axios, error}){
      try{
       
        const airing = await $axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        const onair = await $axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        const popular = await $axios.get('https://api.themoviedb.org/3/tv/popular?api_key=88d32cefcb06d0c3a2834e4897e3896c')
        const toprated = await $axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=88d32cefcb06d0c3a2834e4897e3896c')       
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

