import {routeFragment} from 'fenris'
import {
  getTarget,
  getStarters
} from './actions'

export const RulesRoute = routeFragment('/', getTarget)
export const PlayRoute = routeFragment('/play', getStarters)
export const ScoreboardRoute = routeFragment('/scoreboard')
