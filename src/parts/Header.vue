<template>
  <div class="container">
  	<div class="row">
		<div class="col-md-12">
			<header id="header" class="bg-light mt-2">
				<div class="row pt-2">
					<div class="col-md-4">
						<router-link to="/">
						<img src="https://vuejs.org/images/logo.png"  alt="Vue's Blog"></router-link>
					</div>
					<div class="col-md-8">
						<h1 class="">Vue's Blog</h1>
						<p>Vue CLI Blog with Router and API</p>
					</div>
				</div>
				<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
				  <ul class="navbar-nav">
				    <li class="nav-item">
				      <router-link class="nav-item" to="/" exact>Home</router-link>
				    </li>
				    <li class="nav-item">
				      <router-link class="nav-item" to="/contact">Contact</router-link>
				    </li>
				    <li class="nav-item">
				      <router-link class="nav-item" to="/about">About</router-link>
				    </li>
				  </ul>
				</nav>
			</header><!-- /header -->
		</div>
  	</div>
  </div>
</template>

<script>

export default {
  name: "Header",
};
</script>

<style>
.nav-item{
	margin-right: 5px;
	text-decoration: none;
	color:white;
	padding:10px;
	font-size: 20px;
	font-weight: bold;
}
.nav-item a{
	text-decoration: none;
}
.nav-item a:hover{
	color: yellow;
}
.router-link-active{
	color:#FFC107;
}
header img{
	width: 100px;
	height: 100px;
	margin:10px;
	padding: 10px;
	border-radius: 50%;
	border: 2px solid orange;
}
</style>
