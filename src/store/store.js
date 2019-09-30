import Vue from 'vue'
import Vuex from 'vuex'
import * as info from './modules/info'
import * as pagination from './modules/pagination'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    info,
    pagination
  },
  state: {
    info: {}
  },
  mutations: {},
  actions: {}
})
