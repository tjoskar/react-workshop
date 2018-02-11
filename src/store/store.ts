import { createStore, applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { showReducer, updateEpisodesEpic } from './shows'

export const rootEpic = combineEpics<any>(updateEpisodesEpic)

const epicMiddleware = createEpicMiddleware(rootEpic)

function reducer(state: any = {}, action) {
  return {
    shows: showReducer(state.shows, action)
  }
}

export function configureStore() {
  return createStore(reducer, applyMiddleware(epicMiddleware))
}
