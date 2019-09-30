import getInfo from '../../services/InfoServices'
import { pick } from '../../services/pick'

export const namespaced = true

export const state = {
  info: [],
  visibleInfo: [],
  columns: {
    'Название организации': 'business_name',
    'Адрес организации': 'business_address',
    'Город организации': 'business_city',
    'Номер организации': 'business_phone_number',
    'Дата инспекции': 'inspection_date',
    'Статус инспекции': 'inspection_description',
    'Тип проведения инспекции': 'inspection_type'
  },
  visibleColumns: {},
  searchParam: ''
}

export const mutations = {
  SET_INFO(state, info) {
    state.info = info.map(item => pick(item, Object.values(state.columns)))
  },
  SET_VISIBLE_INFO(state, dispatch) {
    state.visibleInfo = state.info.map(item => pick(item, Object.values(state.visibleColumns)))
    if (state.searchInfo) {
      commit('SEARCH_INFO', state.searchInfo)
    }
  },
  SET_COLUMNS(state) {
    state.visibleColumns = state.columns
  },
  SET_VISIBLE_COLUMNS(state, columns) {},
  TOGGLE_COLUMN(state, column) {
    if (Object.values(state.visibleColumns).includes(column)) {
      let wrong = Object.keys(state.visibleColumns).find(
        key => state.visibleColumns[key] === column
      )
      let { [wrong]: omit, ...res } = state.visibleColumns
      state.visibleColumns = res
    } else {
      let key = Object.keys(state.columns).find(key => state.columns[key] === column)
      state.visibleColumns = { ...state.visibleColumns, [key]: column }
    }
  },
  SEARCH_INFO(state, info) {
    state.searchParam = info
    state.visibleInfo = state.visibleInfo.filter(i => {
      return Object.values(i).some(item => {
        return item.toLowerCase().indexOf(info.toLowerCase()) != -1
      })
    })
    console.log(state.visibleInfo)
  }
}

export const actions = {
  fetchInfo({ commit }) {
    return getInfo().then(res => {
      commit('SET_INFO', res.data)
      commit('SET_COLUMNS')
      commit('SET_VISIBLE_INFO')
    })
  },
  toggleColumn({ commit }, { column }) {
    commit('TOGGLE_COLUMN', column)
    dispatch('SEARCH_INFO')
    commit('SET_VISIBLE_INFO')
  },
  searchInfo({ commit }, { info }) {
    commit('SEARCH_INFO', info)
  }
}
