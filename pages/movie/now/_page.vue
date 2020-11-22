<template>
  <div>
    <main class="dark2 w-full md:mt-20 mt-16 pb-20">
      <div class="md:w-10/12 w-11/12 mx-auto pt-16">
        <div>
          <label class="text-lg primary font-bold uppercase tracking-wider">Now Playing Movies</label>
          <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <MovieCard v-for="(now, index) in nows" :key="index" :movie="now" :data-index="index"/>
          </div>
        </div>
        <div class="relative mt-8 inline-block">
          <nuxt-link prefetch :to="'/movie/now/'+prev" class="relative inline-block bg-primary text-white uppercase text-md font-semibold tracking-wide py-2 rounded-md pr-4 pl-2"><svg class="-mr-2 -mt-1 h-6 w-6 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          PREV</nuxt-link>
          <nuxt-link :to="'/movie/now/'+first" prefetch class="rounded-md py-2 px-4 bg-primary text-white text-md uppercase text-lg font-semibold">{{first}}</nuxt-link>
          <nuxt-link :to="'/movie/now/'+second" prefetch class="rounded-md py-2 px-4 bg-primary text-white text-md uppercase text-lg font-semibold">{{second}}</nuxt-link>
          <nuxt-link :to="'/movie/now/'+third" prefetch class="rounded-md py-2 px-4 bg-primary text-white text-md uppercase text-lg font-semibold">{{third}}</nuxt-link>
          <nuxt-link :to="'/movie/now/'+forth" prefetch class="rounded-md py-2 px-4 bg-primary text-white text-md uppercase text-lg font-semibold">{{forth}}</nuxt-link>
          <nuxt-link :to="'/movie/now/'+fifth" prefetch class="rounded-md py-2 px-4 bg-primary text-white text-md uppercase text-lg font-semibold">{{fifth}}</nuxt-link>
          <nuxt-link prefetch :to="'/movie/now/'+next" class="inline-block bg-primary text-white uppercase text-md font-semibold tracking-wide py-2 pl-5 pr-2 rounded-md">next
            <svg class="h-6 w-6 inline-block -ml-2 -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>

          </nuxt-link>
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
      title: "Now Playing Movies",
      meta: [
        {
        hid: 'description',
        name: 'description',
        content: "All movies that are now playing.",
        }
      ]
      }
  },
    async asyncData({$axios, error, params}){
      try{
        const now = await $axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=88d32cefcb06d0c3a2834e4897e3896c&page=`+params.page)
        const one = 1
        const current = parseInt(params.page)
        const prev = parseInt(params.page) - parseInt(one)
        const next = parseInt(params.page) + parseInt(one)
        const first = 1 + current
        const second = 2 + current
        const third = 3 + current
        const forth = 4 + current
        const fifth = 5 + current
        return{
          first: first,
          second: second,
          third: third,
          forth: forth,
          fifth: fifth,
          prev: prev,
          next: next,
          nows: now.data.results,
        }    
      } 
      catch(e){
        error({
          statusCode: 503,
          message: 'Unable to fetch Movies.'
        })
      }
    },

  }
</script>
