<template>
	<div>
		<app-header></app-header>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="about-image">
					<img src="https://indiansolution.com/wp-content/uploads/2020/01/about-us.png" width="100%" height="auto" alt="">
				</div>
					<div class="card mt-2 mb-5">
						<div class="card-header">
							<h3>About Us</h3>
						</div>
						<div class="card-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

export default {
  name: "HomePage",
  components:{
  	'app-header':Header,
  	'app-footer':Footer,
  }
};
</script>
<style scoped>
.about-image{
	width:100%;
	height: auto;
}	
</style>