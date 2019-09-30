export const namespaced = true

export const state = {
  pageNumber: 0,
  size: 10,
  totalPage: null,
  start: null,
  end: null
}

export const mutations = {
  SET_TOTAL_PAGE(state, length) {
    state.totalPage = Math.ceil(length / state.size)
  },
  SET_PAGES(state) {
    state.start = state.pageNumber * state.size
    state.end = state.start + state.size
  },
  NEXT_PAGE(state) {
    state.pageNumber++
  },
  PREV_PAGE(state) {
    state.pageNumber--
  },
  RESET_PAGE(state) {
    state.pageNumber = 0
    state.start = state.pageNumber * state.size
    state.end = state.start + state.size
  }
}

export const actions = {
  pagination({ commit }, totalLength) {
    commit('SET_TOTAL_PAGE', totalLength)
    commit('SET_PAGES')
    commit('RESET_PAGE')
  },
  next({ commit }) {
    commit('NEXT_PAGE')
    commit('SET_PAGES')
  },
  prev({ commit }) {
    commit('PREV_PAGE')
    commit('SET_PAGES')
  }
}
