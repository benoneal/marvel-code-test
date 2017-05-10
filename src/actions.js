import {createAction} from 'fenris'
import uniqBy from 'lodash/uniqBy'
import {fetchResource, fetchSeries, fetchCharacters} from './api'
import config from '../config'

const mapToId = (collection) => (
  collection.reduce((acc, item) => ({
    ...acc,
    [item.id]: item
  }), {})
)

const setNewMoveHandler = (collection) => (state, {payload}) => state.gameWon ? state : ({
  ...state,
  [collection]: {
    ...state[collection],
    ...mapToId(payload)
  },
  moveOptions: [
    ...state.moveOptions,
    payload.map(({id}) => id)
  ]
})

export const getTarget = createAction('GET_TARGET', {
  async: () => fetchResource(config.targetCharURI),
  handler: (state, {payload: target}) => ({
    ...state,
    target
  }),
  initialState: {
    target: {
      name: 'Not found'
    }
  }
})

export const getStarters = createAction('GET_STARTERS', {
  async: () => Promise.all(config.startingCharURIs.map(fetchResource)),
  handler: setNewMoveHandler('characters'),
  initialState: {
    moveOptions: [],
    characters: {}
  }
})

export const makeMove = createAction('MAKE_MOVE', {
  handler: (state, {payload: id}) => ({
    ...state,
    moves: [
      ...state.moves,
      id
    ],
    moveCounter: state.moveCounter + 1,
    gameWon: id === state.target.id
  }),
  initialState: {
    moves: [],
    moveCounter: 0,
    gameWon: false
  }
})

export const getSeries = createAction('GET_SERIES', {
  async: (id, {gameWon}) => gameWon ? Promise.resolve() : fetchSeries(id),
  handler: setNewMoveHandler('series'),
  initialState: {series: {}}
})

export const getCharacters = createAction('GET_CHARACTERS', {
  async: (id, {gameWon}) => gameWon ? Promise.resolve() : fetchCharacters(id),
  handler: setNewMoveHandler('characters'),
})

export const savePlayer = createAction('SAVE_PLAYER', {
  handler: (state, {payload: name}) => ({
    ...state,
    scoreboard: uniqBy([
      ...state.scoreboard,
      {name, score: state.moveCounter}
    ], JSON.stringify)
  }),
  initialState: {scoreboard: []}
})

export const resetGame = createAction('RESET_GAME', {
  handler: (state) => ({
    ...state,
    moveCounter: 0,
    moves: [],
    moveOptions: [],
    gameWon: false
  }) 
})