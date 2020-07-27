<template>
	<div class="dark2 w-full md:mt-20 mt-16">
      <div class="md:w-10/12 w-11/12 mx-auto pt-16">
      	<img :src="base_path+movie.poster_path" class="rounded-sm poster">
      </div>
  </div>
	
</template>

<script>
export default {
head(){
		return{
			title: this.movie.title,
			meta: [
				{
				hid: 'description',
				name: 'description',
				content: this.movie.overview,
				}
			]
			}
	},
  async asyncData({$axios, error, params}){
      try{
        const movie = await $axios.get('https://api.themoviedb.org/3/movie/'+params.id+'?api_key=88d32cefcb06d0c3a2834e4897e3896c&language=en-US')
        return{
          movie: movie.data,
        }    
      } 
      catch(e){
        error({
          statusCode: 503,
          message: 'Unable to fetch Movies.'
        })
      }
    },
    data(){
  	return{
  		base_path: "https://image.tmdb.org/t/p/w500/"
  	}
  },

}
</script>

<style lang="css" scoped>
</style>