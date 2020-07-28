<template>
  <nuxt-link :to="'/tv-series/'+series.id">
	<div class="mt-5 movie-wrapper transform transition ease-in-out duration-500 hover:scale-105">
		<img :src="base_path+series.poster_path" class="rounded-md poster ">
		<p class="md:text-lg sm:text-md text-sm text-white mt-2 hover:primary">{{series.name}}</p>
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
  name: 'SeriesCard',
  props: {
  	series: Object
  }
}
</script>
