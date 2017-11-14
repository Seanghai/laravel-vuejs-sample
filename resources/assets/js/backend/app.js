import '../bootstrap';
import Vue from 'vue';
import router from './router/routes.js';
import App from './app.vue';
import Vuetify from 'vuetify'
import vuetifyCss from 'vuetify/dist/vuetify.min.css'

Vue.use( Vuetify )

new Vue({
	el: '#app-admin',
	router,
	template: '<App/>',
	components: { App }
})