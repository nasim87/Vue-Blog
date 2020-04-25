<template>
	<div>
		<app-header></app-header>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="card">
					<div class="card-header">
						<h3>Contact us At your Time</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
						</div>
						<div class="row mt-2">
							<div class="col-md-4">
								<div class="card">
									<div class="card-body">
										<h4>Email-contact@nasim.com</h4>
										<h4>Phone: 8801515555555</h4> 
										<p>Block-B, Road-8, Chandgaon Rasidentioal Area, Chittagong.</p>
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="card">
									<div class="card-header">
										<h3 class="text-center">Locate US</h3>
									</div>
									<div class="card-body">
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118103.46961036022!2d91.74982712111134!3d22.325919306546204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1587822279034!5m2!1sen!2sbd" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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

export default {
  name: "HomePage",
  components:{
  	'app-header':Header,
  	'app-footer':Footer,
  }
};
</script>
<style scoped>	
</style>