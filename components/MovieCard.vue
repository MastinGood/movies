<template>
  <nuxt-link :to="'/movie/'+movie.id" prefetch>
	<div class="mt-5 movie-wrapper transform transition ease-in-out duration-500 hover:scale-105">
    
      <img v-if="movie.poster_path === null" v-lazy="no_poster" :src="no_poster" class="rounded-md poster w-full h-auto">
   
      <img v-else :src="base_path+movie.poster_path" v-lazy="base_path+movie.poster_path" class="rounded-md poster">
   
		<p class="md:text-lg sm:text-md text-sm text-white mt-2 hover:primary">{{movie.title | truncate(40, '...')}}</p>
	</div>
  </nuxt-link>
</template>

<script>
export default {
  data(){
  	return{
  		base_path: "https://image.tmdb.org/t/p/w500/",
      no_poster: "/poster.jpg",
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
  name: 'MovieCard',
  props: {
  	movie: Object
  }
}
</script>
