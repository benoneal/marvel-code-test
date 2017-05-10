import {cachedGet} from 'fenris'
import config from '../config'

export const fetchResource = (uri) => cachedGet(`${config.app_url}api/resource?uri=${encodeURIComponent(uri)}`)

export const fetchSeries = (id) => cachedGet(`${config.app_url}api/series?id=${id}`)

export const fetchCharacters = (id) => cachedGet(`${config.app_url}api/characters?id=${id}`)