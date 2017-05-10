import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'fenris'
import withStyles from 'freyja'
import sortBy from 'lodash/sortBy'
import {resetGame} from '../actions'

const Scoreboard = ({
  scoreboard,
  resetGame,
  styles
}) => (
  <div>
    <h1>Leaderboard</h1>
    <div className={styles.leaderboard}>
      {sortBy(scoreboard, 'score').map(({name, score}, i) => (
        <div key={i} className={styles.listing}>
          <div>{name}</div>
          <div className={styles.score}>{score}</div>
        </div>
      ))}
    </div>
    <Link to='/' onClick={resetGame} className={styles.button}>Play Again</Link>
  </div>
)

const mapStateToProps = ({scoreboard}) => ({
  scoreboard
})

const styles = ({
  theme: {
    color,
    layout,
    button
  }
}) => ({
  leaderboard: {
    ...layout.column,
    padding: '2rem 0'
  },
  listing: {
    ...layout.row,
    width: '100%',
    fontWeight: 900,
    fontSize: '1.5rem',
    padding: '0.5rem 0',
    borderBottom: '5px solid rgba(5,5,5,0.15)'
  },
  score: {
    color: 'white',
    backgroundColor: color.red,
    borderRadius: '50%',
    width: '1.5em',
    lineHeight: '1.5em',
    textAlign: 'center'
  },
  button: {
    ...button,
    backgroundColor: color.red
  }
})

export default compose(
  connect(mapStateToProps, {resetGame}),
  withStyles(styles)
)(Scoreboard)
