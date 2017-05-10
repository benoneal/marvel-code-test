import launchServer, {getEndpoint} from 'fenris/dist/server'
import {get} from 'fenris'
import {renderer} from 'freyja'
import md5 from 'md5'
import AppComponent from './App'

const toQuery = (o) => Object.keys(o).reduce((acc, key) => (
  acc + (acc ? '&' : '?') + `${key}=${o[key]}`
), '')

const auth = (options = {}) => {
  const ts = Date.now()
  const apikey = process.env.MARVEL_PUBLIC_KEY
  const hash = md5(ts + process.env.MARVEL_PRIVATE_KEY + apikey)
  return toQuery({...options, ts, apikey, hash})
}

const getData = ({data}) => (
  data.results.length === 1 ? data.results[0] : data.results
)

getEndpoint('/api/resource', ({uri}) => 
  get(`${decodeURIComponent(uri)}${auth()}`).then(getData)
)

getEndpoint('/api/series', ({id}) => 
  get(`https://gateway.marvel.com:443/v1/public/characters/${id}/series${auth({orderBy: '-startYear', limit: 5})}`).then(getData)
)

getEndpoint('/api/characters', ({id}) => 
  get(`https://gateway.marvel.com:443/v1/public/series/${id}/characters${auth({orderBy: '-modified', limit: 5})}`).then(getData)
)

export default (port, config) => {
  launchServer({
    AppComponent, 
    port, 
    config,
    baseCss,
    cssToString: renderer.renderToString
  })
}

const baseCss = `
  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: inherit;
    vertical-align: baseline;
  }
  html, body {
    min-height: 100vh;
    font-family: 'Proxima Nova', 'Roboto', sans-serif;
  }
  html {
    font-size: 16px;
    line-height: 1.33em;
  }
  @media screen and (min-width: 320px) {
    html {
      font-size: calc(16px + 4 * ((100vw - 320px) / 760));
      line-height: calc(1.33em + (0.3) * ((100vw - 20em) / 34));
    }
  }
  @media screen and (min-width: 1080px) {
    html {
      font-size: 20px;
      line-height: 1.63em;
    }
  }
  body {
    overflow-x: hidden;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style-type: disc;
    padding-left: 1em;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    font: inherit;
  }
  input:focus,
  textarea:focus,
  button:focus,
  div:focus,
  a:focus {
    outline: none;
    outline: 0;
  }
  ::selection {
    background: rgb(20, 26, 40);
    color: rgb(150, 185, 175);
  }
  input[type=range] {
    -webkit-appearance: none; 
    appearance: none; 
    width: 100%; 
    background: transparent;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none; 
  }
  input[type=range]:focus {
    outline: none; 
    outline: 0;
  }
  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
`