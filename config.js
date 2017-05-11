const PRODUCTION = process.env.NODE_ENV === 'production'

const MARVEL_API_URL = 'https://gateway.marvel.com:443/v1/public/'

module.exports = {
  app_url: PRODUCTION ? 'https://sixdegreesofironman.herokuapp.com/' : 'http://localhost:3000/',
  api_base_url: MARVEL_API_URL,
  targetCharURI: MARVEL_API_URL + 'characters/1009368',
  startingCharURIs: [
    MARVEL_API_URL + 'characters/1009629',
    MARVEL_API_URL + 'characters/1010743',
    MARVEL_API_URL + 'characters/1009268',
    MARVEL_API_URL + 'characters/1009282',
    MARVEL_API_URL + 'characters/1009356'
  ]
}