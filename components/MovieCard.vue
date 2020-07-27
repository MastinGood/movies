<template>
  <nuxt-link :to="'/movie/'+movie.id">
	<div class="mt-5">
		<img :src="base_path+movie.poster_path" class="rounded-sm poster">
		<p class="text-lg text-white mt-2">{{movie.title}}</p>
	</div>
  </nuxt-link>
</template>

<script>
export default {
  data(){
  	return{
  		base_path: "https://image.tmdb.org/t/p/w500/"
  	}
  },
  name: 'MovieCard',
  props: {
  	movie: Object
  }
}
</script>
