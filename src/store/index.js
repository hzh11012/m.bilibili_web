import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeVideoId: 0
  },
  mutations: {
    //点击选中的视频id
    activeVideoId(state, id) {
      state.activeVideoId = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
