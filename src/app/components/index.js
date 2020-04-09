import Vue from "vue"

import vueCustomElement from "vue-custom-element"
import Sitemap from './Sitemap.vue'
import Calculator from './Calculator.vue'

Vue.use(vueCustomElement)
Vue.customElement("sitemap-component", Sitemap)
Vue.customElement("calculator-component", Calculator)