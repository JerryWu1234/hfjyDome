
import * as types from './types'
export const mutations = {
  [types.UP_COMBODY] (state, {upcomBody}) {
    state.upcomBody = upcomBody || {}
  },
  [types.ADD_PAGE] (state) {
    state.upcomBody.start = + 1
  },
  [types.MOVING_DETAIL] (state, {movieDetail}) {
    state.movieDetail = movieDetail || {}
  },
  [types.EXIT_LOGIN] (state) {
    state.login = {}
  }
}
