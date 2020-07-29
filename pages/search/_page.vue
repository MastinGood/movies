<template>
  <div>
    <main class="dark2 w-full md:mt-20 mt-16 pb-20">
      <div class="md:w-10/12 w-11/12 mx-auto pt-16">
        <div>
          <label class="text-lg primary font-bold uppercase tracking-wider">Search Results : {{this.$route.params.page}}</label>
          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-6 col-gap-4 row-gap-3">
            <SearchCard v-for="(movie, index) in movies" :key="index" :movie="movie" :data-index="index"/>
          </div>
        </div>
        <div class="relative">
          
        </div>
      </div>
    </main>
  </div>
	
</template>

<script>
  import SearchCard from '~/components/SearchCard.vue'
  export default {
    components:{
      SearchCard
    },
     data () {
      return {
        search: false,
        
      }
    },
    head(){
    return{
      title: "'Search Results for "+this.$route.params.page,
      meta: [
        {
        hid: 'description',
        name: 'description',
        content: "Search results",
        }
      ]
      }
  },
 
    async asyncData({$axios, error, params}){
      try{
          // await $axios.get('https://api.themoviedb.org/3/search/movie?api_key=88d32cefcb06d0c3a2834e4897e3896c&query='+params.page)
          //  .then(response => {
          //   this.movies = response.data.results;
          //  });
          // await $axios.get('https://api.themoviedb.org/3/search/tv?api_key=88d32cefcb06d0c3a2834e4897e3896c&query='+params.page)
          //  .then(tv => {
          //   this.movies.concat(tv.data.results);
          //  });

        // const movie = await $axios.get('https://api.themoviedb.org/3/search/movie?api_key=88d32cefcb06d0c3a2834e4897e3896c&query='+params.page)
        // const tv = await $axios.get('https://api.themoviedb.org/3/search/tv?api_key=88d32cefcb06d0c3a2834e4897e3896c&query='+params.page)
           
        // return{
        //   movies: movie.data.results,
        
         
        // }    
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
