import Vue from 'vue';
import Router from 'vue-router';

// Components
import testComponent from '../components/testComponent.vue';
import page2 from '../components/page2.vue';

// Coding
Vue.use(Router);

export function createRouter(){
	return new Router({
		
		routes: [
		    {
				path: '/',
				name: 'testComponent',
				component: testComponent
		    },
		    {
		    	path: '/page2',
				name: 'page2',
				component: page2
		    }
		    
		    
		]	   
	});
}
 