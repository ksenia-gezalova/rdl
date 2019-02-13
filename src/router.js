import Vue from "vue";
import Router from "vue-router";
import Main from "./components/Main";
import Vacant from "./components/Vacant.vue";
import Company from "./components/Company.vue";
import Contacts from "./components/Contacts.vue";
import Error from "./components/Error.vue";

Vue.use(Router);

const router = new Router({
	routes: [{
			path: "/",
			name: "main",
			component: Main
		},
		{
			path: "/vacant",
			name: "vacant",
			component: Vacant
		},
		{
			path: "/company",
			name: "company",
			component: Company
		},
		{
			path: "/contacts",
			name: "contacts",
			component: Contacts
		},
		{
			path: '/error',
			name: 'error',
			component: Error,
		},
		{
			path: '*',
			redirect: '/error'
		}
	]
});

router.beforeEach(function (to, from, next) {
	window.scrollTo(0, 0);
	next();
});

export default router;