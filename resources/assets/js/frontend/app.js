import '../bootstrap';
import Vue from 'vue';
import router from './router/routes.js';
import App from './app.vue';
import Vuetify from 'vuetify'
import vuetifyCss from 'vuetify/dist/vuetify.min.css'
import vuetifyJs from 'vuetify/dist/vuetify.min.js'

Vue.use( Vuetify )

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})