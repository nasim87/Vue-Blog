import Vue from "vue";
import Router from "vue-router";

import HomePage from "../home/HomePage.vue";
import About from "../page/AboutPage.vue";
import Contact from "../page/ContactPage.vue";
 
 Vue.use(Router)

export default new Router({
mode:'history',
routes:[
	{
	path:'/',
	name:'Home',
	component: HomePage,
},	
{
	path:'/about',
	name:'About',
	component: About,
},	
{
	path:'/contact',
	name:'Cotnact',
	component: Contact,
},
],
		
});