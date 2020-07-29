<template>
	<div class="dark2 w-full h-auto md:mt-20 mt-16">
		<div v-for="(video, index) in videos.slice(0,1)" v-show="play" @click="play = !play" class="inset-0 fixed w-full h-screen video-bg z-40">
			<iframe v-show="play" class="fixed m-auto inset-0 z-50 video-youtube" :src="youtube_url+video.key" frameborder="0" allowfullscreen></iframe>
		</div>
		
	
      <div class="md:w-10/12 w-11/12 mx-auto md:py-16 py-3 bottom-border-dark">
      	<div class="flex flex-wrap">
      		<div class="lg:w-4/12 md:w-5/12 sm:w-4/12 w-full inline-block">
      		<img v-if="movie.poster_path == null" v-lazy-load src="~/assets/images/poster.jpg" class="rounded-sm shadow-lg">
      		<img v-else :src="base_path+movie.poster_path" v-lazy-load class="rounded-sm poster">
	      	</div>
	      	<div class="lg:w-8/12 md:w-7/12 sm:w-8/12 w-full inline-block lg:pl-24 md:pl-16 sm:pl-12 md:pb-0 pb-4">
	      		<h2 class="font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-white tracking-wide sm:pt-0 pt-4">{{movie.title}}</h2>
	      		<div class="relative block mt-2 md:mb-8 mb-6">
	      			<p class="primary inline-block lg:text-md md:text-sm text-sm font-medium lg:pr-4 md:pr-3 pr-2">
	      			<svg class="h-6 w-6 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
					</svg>
					{{movie.vote_average * 10}}% 
		      		</p>
		      		<p class="divider text-white inline-block">|</p>
		      		<p class="text-white inline-block font-medium lg:text-md md:text-sm text-sm lg:px-4 md:px-3 px-2">
						{{movie.release_date }} 
		      		</p>
		      		<p class="divider text-white inline-block">|</p>
		      		<p v-for="(genre, index) in movie.genres" :key="index" class="lg:text-md md:text-sm text-sm primary inline-block font-medium px-1">
						{{genre.name}}<span v-if="index+1 < movie.genres.length">, </span>
		      		</p>
		      		<p class="text-white lg:text-md md:text-sm text-sm mt-4">Runtime : <span class="primary">{{movie.runtime}} minutes</span></p>
		      		<p class="text-white lg:text-md md:text-sm text-sm mt-1">Status : <span class="py-1 px-3 bg-primary text-sm text-white rounded-full">{{movie.status}}</span> </p>
		      		<p class="text-white lg:text-md md:text-sm text-sm mt-1">Rating : <span class="primary">{{movie.vote_average}} / {{movie.vote_count}} times</span></p>
		      		<p class="text-white lg:text-md md:text-sm text-sm mt-1">Language : <span v-for="(spoken, index) in movie.spoken_languages" class="primary">{{spoken.name}} <span v-if="index+1 < movie.spoken_languages.length">, </span></span> </p>
		      		<p class="text-white lg:text-md md:text-sm text-sm mt-1">Production Countries : <span v-for="(country, index) in movie.production_countries" class="primary">{{country.name}} <span v-if="index+1 < movie.production_countries.length">, </span></span> </p>
		      		<p class="text-white lg:text-md md:text-sm text-sm mt-1">Production Companies : <span v-for="(company, index) in movie.production_companies" class="primary">{{company.name}} <span v-if="index+1 < movie.production_companies.length">, </span></span> </p>
		      		
	      		</div>
	      		<label class="primary font-semibold tracking-wide lg:text-2xl text-xl">Tagline</label>
	      		<p class="text-white font-normal lg:text-md md:text-sm text-sm leading-normal md:pb-4 pb-3 pt-1">{{movie.tagline}}</p>
	      		<template v-if="movie.overview != null">
	      		<label class="primary font-semibold tracking-wide lg:text-2xl text-xl">Overview</label>
	      		<p class="text-white font-normal lg:text-md md:text-sm text-sm leading-normal pt-1">{{movie.overview}}</p>
	      		</template>
	      		<button @click="play = !play" class="bg-primary text-white md:py-3 py-2 md:px-6 px-5 rounded-md font-semibold md:text-lg text-md tracking-wide mt-10">
	      		<svg class="h-6 w-6 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
				</svg>

	      		Play Trailer</button>
	      	</div>
      	</div>
      </div>   
      <div class="md:w-10/12 w-11/12 mx-auto">
      	<div class="md:py-8 py-4 bottom-border-dark">
  			<div @click="cast = !cast" class="w-full clearfix block">
  				<label class="text-white font-semibold lg:text-2xl lg:text-xl sm:text-lg text-md uppercase tracking-wide float-left">Cast</label>
  				<a v-show="cast == true" class="float-right text-white">
  					<svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
					</svg>
  				</a>
  				<a v-show="cast == false" class="float-right text-white">
  					<svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					  <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
					</svg>
  				</a>
  			</div>
  			<transition name="fade">
	  			<div v-show="cast" class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-5 mt-5">
  					<div v-for="(cast, index) in casts" :key="index">
	  					<template v-if="cast.profile_path == null">
	  						<img src="~/assets/images/avatar3.png" v-lazy-load class="rounded-md h-auto">
	  					</template>
	  					<template v-else>
	  						<img :src="profile_size+cast.profile_path" v-lazy-load class="rounded-md">
	  					</template>
	  					<p class="text-white text-md primary cursor-pointer pt-2">{{cast.name}}</p>
	  					<p class="text-white text-md">{{cast.character}}</p>
	  				</div>
	  			</div>
	  		</transition>
  		</div>
      </div>
      <div class="md:w-10/12 w-11/12 mx-auto">
      	<div class="md:py-8 py-4 bottom-border-dark">
  			<div @click="gallery = !gallery" class="w-full clearfix block">
  				<label class="text-white font-semibold lg:text-2xl lg:text-xl sm:text-lg text-md uppercase tracking-wide float-left">Gallery</label>
  				<a v-show="gallery == true" class="float-right text-white">
  					<svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
					</svg>
  				</a>
  				<a v-show="gallery == false" class="float-right text-white">
  					<svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					  <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
					</svg>
  				</a>
  			</div>
  			<transition name="fade">
	  			<div v-show="gallery" class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 mt-6">
  					<div v-for="(gallery, index) in images" :key="index">
	  					<img :src="backdrop+gallery.file_path" v-lazy-load class="rounded-md poster">
	  					
	  				</div>
	  			</div>
	  		</transition>
  		</div>
      </div>
      <template v-if="similars.length > 0">
      	 <div class="md:w-10/12 w-11/12 mx-auto pt-16">
	       	<div>
	          <label class="md:text-lg text-md primary font-bold uppercase tracking-wider">You may also like</label>
	          <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
	            <MovieCard v-for="(similar, index) in similars.slice(0,12)" :key="index" :movie="similar" :data-index="index"/>
	          </div>
	        </div>
	       </div>
      </template>
      
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
         const credit = await $axios.get('https://api.themoviedb.org/3/movie/'+params.id+'/credits?api_key=88d32cefcb06d0c3a2834e4897e3896c')
         const image = await $axios.get('https://api.themoviedb.org/3/movie/'+params.id+'/images?api_key=88d32cefcb06d0c3a2834e4897e3896c')
         const video = await $axios.get('https://api.themoviedb.org/3/movie/'+params.id+'/videos?api_key=88d32cefcb06d0c3a2834e4897e3896c')
         const similar = await $axios.get('https://api.themoviedb.org/3/movie/'+params.id+'/similar?api_key=88d32cefcb06d0c3a2834e4897e3896c')
         
        return{
          movie: movie.data,
          casts: credit.data.cast,
          images: image.data.backdrops,
          videos: video.data.results,
          similars: similar.data.results,
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
  		youtube_url: "https://www.youtube.com/embed/",
  		base_path: "https://image.tmdb.org/t/p/w500/",
  		profile_size: "https://image.tmdb.org/t/p/w300/",
  		backdrop: "https://image.tmdb.org/t/p/w780/",
  		cast: false,
  		gallery: true,
  		play: false,
  	}
  },

}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>