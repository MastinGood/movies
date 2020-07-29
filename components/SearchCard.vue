<template>
  <a>
	<div class="mt-5 movie-wrapper transform transition ease-in-out duration-500 hover:scale-105">
    
      <img v-if="result.poster_path === null" v-lazy-load src="~/assets/images/poster.jpg" class="rounded-md poster w-auto h-auto">
   
      <img v-else :src="base_path+result.poster_path" v-lazy-load class="rounded-md poster">
   
		<p class="md:text-lg sm:text-md text-sm text-white mt-2 hover:primary">{{result.title | truncate(40, '...')}}</p>
	</div>
  </a>
</template>

<script>
export default {
  data(){
  	return{
  		base_path: "https://image.tmdb.org/t/p/w500/"
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
  name: 'ResultCard',
  props: {
  	result: Object,
    keyword: String,
  }
}
</script>
