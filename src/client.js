import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'
import './plugins'

Meteor.startup(() => {
  const vuetify = new Vuetify();
  new Vue({
    el: '#app',
    vuetify,
    ...App,
  })
})

