import React from 'react'
import {Link} from 'fenris'
import Rules from './pages/Rules'
import Play from './pages/Play'
import Scoreboard from './pages/Scoreboard'
import {RulesRoute, PlayRoute, ScoreboardRoute} from './routes' 
import {renderer, StyleProvider, ThemeProvider} from 'freyja'
import Layout from './pages/Layout'
import theme from './theme'

const styleSheet = (() => {
  if (typeof window === 'undefined') return
  return document.getElementById('stylesheet')
})()

const App = () => (
  <StyleProvider renderer={renderer} mountNode={styleSheet}>
    <ThemeProvider theme={theme}>
      <Layout>
        <RulesRoute><Rules /></RulesRoute>
        <PlayRoute><Play /></PlayRoute>
        <ScoreboardRoute><Scoreboard /></ScoreboardRoute>
      </Layout>
    </ThemeProvider>
  </StyleProvider>
)

export default App
