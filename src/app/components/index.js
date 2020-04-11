import Vue from "vue"

import vueCustomElement from "vue-custom-element"
import Sitemap from './Sitemap.vue'
import Calculator from './Calculator.vue'
import Blogposts from './Blogposts.vue'
import TravelApp from './Component.vue'
import './travelSplit.js'

Vue.use(vueCustomElement)
Vue.customElement("sitemap-component", Sitemap)
Vue.customElement("calculator-component", Calculator)
Vue.customElement("blogposts-component", Blogposts)
Vue.customElement("travel-component", TravelApp)