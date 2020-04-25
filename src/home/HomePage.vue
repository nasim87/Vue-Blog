<template>
  <div>
<!--   	<Header/> -->
<app-header></app-header>
<div class="container mt-2">
    <h2 class="text-center bg-warning p-2">Post from News API</h2>
    <div class="row">
    	<div class="col-md-12">
    		<div class="row">
				<div class="col-md-4" v-for="(post,index) in articles" :Key="index">
			    	 <div class="card">
				    	<div class="card-header">
				    		<a :href="post.url"><h3>{{post.title}}</h3></a>
				    	</div>
				    	<div class="card-body">
				    		<p class="text-info">PublishedAt: {{post.publishedAt}}</p>
				    		<!-- <p>{{post.content}}</p> -->
				    		<p>{{post.description}}</p>
				    		<a :href="post.url" class="btn btn-success">Read More</a>
				    	</div>
			    	</div>
				</div>
    		</div>
    	</div>
    </div>
</div>
<app-footer></app-footer>
  </div>
</template>

<script>

import Header from '../parts/Header.vue'
import Footer from '../parts/Footer.vue'
import axios from 'axios'


export default {
  name: "HomePage",
  components:{
  	'app-header':Header,
  	'app-footer':Footer,
  },

//props:['cars'],  
data(){
  	
  	return {
  		articles:[],
  	}
  },
  created(){
  	axios.get("http://newsapi.org/v2/everything?q=apple&from=2020-04-24&to=2020-04-24&sortBy=popularity&apiKey=bccdb4a34b47442ab8c5a36545c47920").then(response =>{
  		this.articles=response.data.articles.splice(0,9)
  	})
  },

}
</script>

<style>
.card a{
	text-decoration:none;
}
</style>
