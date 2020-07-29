<template>
	<div>
	  <nav class="custom-dark nav-shadow z-40 fixed w-full top-0">
	    <div class="md:w-10/12 w-11/12 mx-auto ">
	      <div class="flex items-center justify-between md:h-20 h-16">
	        <div class="flex items-center">
	          <div class="flex-shrink-0">
	            <nuxt-link to="/"><img class="lg:h-10 h-8 w-auto cursor-pointer" src="logo.svg" alt="Workflow logo"></nuxt-link>
	          </div>
	          <div class="hidden md:block">
	            <div class="ml-10 flex items-baseline">
	              <nuxt-link to="/" class="px-3 py-2 rounded-md text-sm font-medium text-white focus:outline-none focus:primary hover:primary">Movies</nuxt-link>
	              <nuxt-link to="/tv-series" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 focus:primary hover:primary focus:outline-none">TV Series</nuxt-link>	              
	              <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 focus:primary hover:primary focus:outline-none">Popular</a> 
	              <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 focus:primary hover:primary focus:outline-none">Top Rated</a>
	              
	            </div>
	          </div>
	        </div>
	        <div class="hidden md:block">
	          <div class="ml-4 flex items-center md:ml-6">
	            <button @click="search = !search" class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white" aria-label="Search">
	              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
					</svg>

	            </button>

	            <!-- Profile dropdown -->
	            <div class="ml-3 relative">
	              <div>
	                <button class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
	                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
	                </button>
	              </div>
	              <!--
	                Profile dropdown panel, show/hide based on dropdown state.

	                Entering: "transition ease-out duration-100"
	                  From: "transform opacity-0 scale-95"
	                  To: "transform opacity-100 scale-100"
	                Leaving: "transition ease-in duration-75"
	                  From: "transform opacity-100 scale-100"
	                  To: "transform opacity-0 scale-95"
	              -->
	            </div>
	          </div>
	        </div>
	        <div class="-mr-2 flex md:hidden">
	          <!-- Mobile menu button -->
	          <button @click="search = !search" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:text-white">
	            <!-- Menu open: "hidden", Menu closed: "block" -->
	           <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
				</svg>

	            <!-- Menu open: "block", Menu closed: "hidden" -->
	            <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
	              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
	            </svg>
	          </button>
	        </div>
	      </div>
	    </div>
	  </nav>
	  <div class="h-16 z-50  bottom-0 fixed md:hidden block w-full dark2 top-border-dark">
	  		<div class="flex items-center h-full">
			  <div class="flex-1 text-center mt-1">
			  	<nuxt-link to="/" class="text-white font-semibold tracking-wider mt-1 sm:text-sm text-xs custom-white focus:primary hover:primary">
				  	<div class="flex justify-center">
				  		<svg class="h-5 w-5" fill="#7c7c7d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 403.096 403.096" style="enable-background:new 0 0 403.096 403.096;" xml:space="preserve">
						<g>
							<g>
							<path d="M395.376,170.396h-326.2l300.36-103.52c7.292-2.517,11.174-10.46,8.68-17.76l-5.76-16.72
								c-7.397-21.327-30.641-32.662-52-25.36l-292.88,100.92c-21.327,7.397-32.663,30.641-25.36,52l5.76,16.72
								c0.718,2.094,1.924,3.986,3.52,5.52v185.04c0.006,8.228,3.288,16.116,9.12,21.92c5.792,5.826,13.665,9.107,21.88,9.12h329.52
								c8.228-0.006,16.116-3.288,21.92-9.12c5.841-5.786,9.137-13.659,9.16-21.88h0v-189.16
								C403.096,173.852,399.639,170.396,395.376,170.396z M387.696,185.956l0.04,41.76h-73.96l30.52-41.76H387.696z M325.256,185.796
								l-30.52,41.76h-55.76l30.56-41.76H325.256z M250.456,185.796l-30.52,41.76h-55.76l30.52-41.76H250.456z M175.656,185.796
								l-30.56,41.76h-55.56l30.52-41.76H175.656z M100.856,185.796l-30.56,41.76h-43.4v-41.76H100.856z M325.536,21.556
								c13.339-4.448,27.769,2.696,32.32,16l5.32,15.4l-41,13.96l-42.52-29.36L325.536,21.556z M261.536,43.596l42.52,29.52l-52.6,18.16
								l-42.52-29.72L261.536,43.596z M190.896,67.956l42.64,29.6l-52.84,18.12l-42.48-29.56L190.896,67.956z M120.176,92.356
								l42.48,29.52l-52.68,18.16l-42.48-29.52L120.176,92.356z M16.776,154.956c-4.544-13.318,2.513-27.807,15.8-32.44l16.96-5.8
								l42.4,29.56l-69.88,24L16.776,154.956z M26.896,242.996h360.76l0.08,84.72H26.896V242.996z M86.736,382.956h-44
								c-4.139,0.005-8.111-1.635-11.04-4.56c-2.943-2.92-4.599-6.894-4.6-11.04v-24h60L86.736,382.956z M102.136,382.956v-40h97.44
								l0.04,40H102.136z M215.016,382.956v-40h97.44l0.04,40H215.016z M387.736,367.316c0.005,4.139-1.635,8.111-4.56,11.04
								c-2.92,2.943-6.894,4.599-11.04,4.6h-44v-40h60L387.736,367.316z"/>
						</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
				  	</div>
				  	Movies
				  </nuxt-link>
			  </div>
			  <div class="flex-1 text-center mt-1">
			  	<nuxt-link to="/tv-series" class="text-white font-semibold tracking-wider mt-1 sm:text-sm text-xs custom-white focus:primary hover:primary">
				  	<div class="flex justify-center">
				  		<svg class="h-5 w-5" fill="#7c7c7d" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m467 120h-174.787l94.394-94.394c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-109.394 109.394-109.393-109.393c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l94.393 94.393h-174.787c-24.813 0-45 20.187-45 45v302c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-302c0-24.813-20.187-45-45-45zm15 347c0 8.271-6.729 15-15 15h-422c-8.271 0-15-6.729-15-15v-302c0-8.271 6.729-15 15-15h422c8.271 0 15 6.729 15 15z"/><path d="m437 180h-362c-8.284 0-15 6.716-15 15v242c0 8.284 6.716 15 15 15h362c8.284 0 15-6.716 15-15v-242c0-8.284-6.716-15-15-15zm-15 242h-332v-212h332z"/><path d="m218.922 389.225c2.218 1.187 4.65 1.775 7.077 1.775 2.91 0 5.812-.846 8.321-2.519l90-60c4.173-2.782 6.68-7.466 6.68-12.481s-2.506-9.699-6.68-12.481l-90-60c-4.603-3.068-10.52-3.355-15.398-.744-4.877 2.61-7.922 7.694-7.922 13.225v120c0 5.532 3.045 10.615 7.922 13.225zm22.078-105.197 47.959 31.972-47.959 31.972z"/></g></svg>
				  	</div>
				  	TV
				  </nuxt-link>
			  </div>
			  <div class="flex-1 text-center">
			  	<a href="" class="text-white font-semibold tracking-wider mt-1 sm:text-sm text-xs custom-white focus:primary hover:primary">
				  	<div class="flex justify-center mt-1">
				  		<svg class="h-5 w-5" stroke="#7c7c7d" fill="#7c7c7d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 403.096 403.096" style="enable-background:new 0 0 403.096 403.096;" xml:space="preserve">
						<g>
							<g>
							<path d="M395.376,170.396h-326.2l300.36-103.52c7.292-2.517,11.174-10.46,8.68-17.76l-5.76-16.72
								c-7.397-21.327-30.641-32.662-52-25.36l-292.88,100.92c-21.327,7.397-32.663,30.641-25.36,52l5.76,16.72
								c0.718,2.094,1.924,3.986,3.52,5.52v185.04c0.006,8.228,3.288,16.116,9.12,21.92c5.792,5.826,13.665,9.107,21.88,9.12h329.52
								c8.228-0.006,16.116-3.288,21.92-9.12c5.841-5.786,9.137-13.659,9.16-21.88h0v-189.16
								C403.096,173.852,399.639,170.396,395.376,170.396z M387.696,185.956l0.04,41.76h-73.96l30.52-41.76H387.696z M325.256,185.796
								l-30.52,41.76h-55.76l30.56-41.76H325.256z M250.456,185.796l-30.52,41.76h-55.76l30.52-41.76H250.456z M175.656,185.796
								l-30.56,41.76h-55.56l30.52-41.76H175.656z M100.856,185.796l-30.56,41.76h-43.4v-41.76H100.856z M325.536,21.556
								c13.339-4.448,27.769,2.696,32.32,16l5.32,15.4l-41,13.96l-42.52-29.36L325.536,21.556z M261.536,43.596l42.52,29.52l-52.6,18.16
								l-42.52-29.72L261.536,43.596z M190.896,67.956l42.64,29.6l-52.84,18.12l-42.48-29.56L190.896,67.956z M120.176,92.356
								l42.48,29.52l-52.68,18.16l-42.48-29.52L120.176,92.356z M16.776,154.956c-4.544-13.318,2.513-27.807,15.8-32.44l16.96-5.8
								l42.4,29.56l-69.88,24L16.776,154.956z M26.896,242.996h360.76l0.08,84.72H26.896V242.996z M86.736,382.956h-44
								c-4.139,0.005-8.111-1.635-11.04-4.56c-2.943-2.92-4.599-6.894-4.6-11.04v-24h60L86.736,382.956z M102.136,382.956v-40h97.44
								l0.04,40H102.136z M215.016,382.956v-40h97.44l0.04,40H215.016z M387.736,367.316c0.005,4.139-1.635,8.111-4.56,11.04
								c-2.92,2.943-6.894,4.599-11.04,4.6h-44v-40h60L387.736,367.316z"/>
						</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
				  	</div>
				  	Popular
				  </a>
			  </div>
			  <div class="flex-1 text-center">
			  	<a href="" class="text-white font-semibold tracking-wider mt-1 sm:text-sm text-xs custom-white focus:primary hover:primary">
				  	<div class="flex justify-center mt-1">
				  		<svg class="h-5 w-5" stroke="#7c7c7d" fill="#7c7c7d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 403.096 403.096" style="enable-background:new 0 0 403.096 403.096;" xml:space="preserve">
						<g>
							<g>
							<path d="M395.376,170.396h-326.2l300.36-103.52c7.292-2.517,11.174-10.46,8.68-17.76l-5.76-16.72
								c-7.397-21.327-30.641-32.662-52-25.36l-292.88,100.92c-21.327,7.397-32.663,30.641-25.36,52l5.76,16.72
								c0.718,2.094,1.924,3.986,3.52,5.52v185.04c0.006,8.228,3.288,16.116,9.12,21.92c5.792,5.826,13.665,9.107,21.88,9.12h329.52
								c8.228-0.006,16.116-3.288,21.92-9.12c5.841-5.786,9.137-13.659,9.16-21.88h0v-189.16
								C403.096,173.852,399.639,170.396,395.376,170.396z M387.696,185.956l0.04,41.76h-73.96l30.52-41.76H387.696z M325.256,185.796
								l-30.52,41.76h-55.76l30.56-41.76H325.256z M250.456,185.796l-30.52,41.76h-55.76l30.52-41.76H250.456z M175.656,185.796
								l-30.56,41.76h-55.56l30.52-41.76H175.656z M100.856,185.796l-30.56,41.76h-43.4v-41.76H100.856z M325.536,21.556
								c13.339-4.448,27.769,2.696,32.32,16l5.32,15.4l-41,13.96l-42.52-29.36L325.536,21.556z M261.536,43.596l42.52,29.52l-52.6,18.16
								l-42.52-29.72L261.536,43.596z M190.896,67.956l42.64,29.6l-52.84,18.12l-42.48-29.56L190.896,67.956z M120.176,92.356
								l42.48,29.52l-52.68,18.16l-42.48-29.52L120.176,92.356z M16.776,154.956c-4.544-13.318,2.513-27.807,15.8-32.44l16.96-5.8
								l42.4,29.56l-69.88,24L16.776,154.956z M26.896,242.996h360.76l0.08,84.72H26.896V242.996z M86.736,382.956h-44
								c-4.139,0.005-8.111-1.635-11.04-4.56c-2.943-2.92-4.599-6.894-4.6-11.04v-24h60L86.736,382.956z M102.136,382.956v-40h97.44
								l0.04,40H102.136z M215.016,382.956v-40h97.44l0.04,40H215.016z M387.736,367.316c0.005,4.139-1.635,8.111-4.56,11.04
								c-2.92,2.943-6.894,4.599-11.04,4.6h-44v-40h60L387.736,367.316z"/>
						</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
				  	</div>
				  	Upcoming
				  </a>
			  </div>	  
			</div>
	  	
	  </div>
	  	<transition name="slide-fade">
		  <div v-show="search" class="search z-50 top-0 h-full w-full bg-gray-700 pb-4 fixed lg:overflow-y-hidden overflow-y-scroll">
		  	<div class="relative sm:h-20 h-16 dark2">
		  		<input @keyup="searchMovies" v-model="input" type="text" class="w-full sm:h-20 h-16 dark2 border-0 md:pl-8 pl-4 md:pr-64 pr-24 focus:outline-none text-white inline-block">
		  		
		  		<div class="absolute right-0 top-0 md:mt-3 mt-4 md:pr-8 pr-6">
		  			
		  			
			  			<a v-show="showSearch" @click="searchMovies2" class="hidden md:inline-block cursor-pointer lg:ml-8 md:4 py-4 px-8 font-bold tracking-wider uppercase text-white rounded-full  btn-gradient focus:outline-none">
			  			Search
			  			</a>
			  			<a v-show="loading" class="hidden md:inline-block cursor-pointer lg:ml-8 md:4 py-4 px-8 font-bold tracking-wider uppercase text-white rounded-full  btn-gradient focus:outline-none">
			  			<img src="~/assets/images/three-dots.svg" class="h-6 w-8">
			  			</a>
			  			
			  			<a @click="searchMovies2" class="md:hidden cursor-pointer md:mr-0 mr-3">
				  			<svg class="inline-block w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
							</svg>
				  		</a>
		  			
			  		<a @click="search = false, input = '', movies = {}" class="lg:ml-4 md:ml-4 cursor-pointer" >
			  			<svg class="inline-block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
						</svg>
			  		</a>
		  		</div>
		  	</div>
		  	<div class="clearfix w-11/12 mx-auto pt-4">
            <label class="md:text-md text-sm primary font-bold uppercase tracking-wider float-left">Search Results : {{this.input}}</label>
            <nuxt-link v-if="movies.length > 0 " @click="search = false" :to="'/search/'+input" class="float-right md:text-md text-sm primary font-bold uppercase tracking-wider inline-block flex items-center">VIEW ALL
              <svg class="inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            </nuxt-link>
          </div>
		  	<div class="w-11/12 mx-auto grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:col-gap-4 col-gap-4 row-gap-2">
		  	<template v-if="movies.length > 0">
		  		<SearchCard v-for="(movie, index) in movies.slice(0,16)" :key="index" :keyword="input" :result="movie" :data-index="index"/>
		  	</template>
		  	<template v-else>
		  		
		  	</template>
            
          	</div>	
		  	
		  </div>
		</transition>
	 	
	</div>
</template>

<script>
import SearchCard from '~/components/SearchCard.vue'
import _ from 'lodash';
import axios from 'axios';
export default {

  name: 'Navbar',
   components:{
      SearchCard
    },
  data () {
    return {
    	search: false,
    	input: '',
    	movies: {},
    	loading: false,
    	showSearch: true,    	
    }
  },
  methods:{
   searchMovies: _.debounce(function(e)  { 
   			this.loading = true;
   			this.showSearch = false;
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=88d32cefcb06d0c3a2834e4897e3896c&query='+e.target.value)
           .then(response => {
            this.movies = response.data.results;
           });
           axios.get('https://api.themoviedb.org/3/search/tv?api_key=88d32cefcb06d0c3a2834e4897e3896c&query='+e.target.value)
           .then(tv => {
            this.movies.concat(tv.data.results);
           });
           this.showSearch = true;
           this.loading = false;

          }, 2000),
   searchMovies2(){
   	console.log("here");
   			this.loading = true;
   			this.showSearch = false;
   			axios.get('https://api.themoviedb.org/3/search/movie?api_key=88d32cefcb06d0c3a2834e4897e3896c&query='+this.input)
           .then(response => {
            this.movies = response.data.results;
           });
           axios.get('https://api.themoviedb.org/3/search/tv?api_key=88d32cefcb06d0c3a2834e4897e3896c&query='+this.input)
           .then(tv => {
            this.movies.concat(tv.data.results);
           });
           this.showSearch = true;
           this.loading = false;


   },

  }
}
</script>
<style>
	.slide-fade-enter-active {
	  transition: all .2s ease;
	}
	.slide-fade-leave-active {
	  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	 {
	  transform: translateX(10px);
	  opacity: 0;
	}
</style>
