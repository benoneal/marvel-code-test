import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import withStyles from 'freyja'
import {makeMove, getSeries, getCharacters, savePlayer} from '../actions'
import CharacterCard from '../components/CharacterCard'
import SeriesCard from '../components/SeriesCard'
import WinnerModal from '../components/WinnerModal'
import LoadSpinner from '../components/LoadSpinner'

const shouldRender = (moves, index, id) => (
  !moves[index] || moves[index] === id
)

const Play = ({
  name,
  gameWon,
  moveCounter,
  characters,
  series,
  moveOptions,
  moves,
  loading,
  makeMove,
  getSeries,
  getCharacters,
  savePlayer,
  styles
}) => (
  <div className={styles.wrapper}>
    <div className={styles.moveCounter}>{moveCounter}</div>

    {moveOptions.map((options, moveIndex) => (
      <div key={moveIndex} className={styles.row}>
        {options.map((id, optionIndex) => {
          if (!shouldRender(moves, moveIndex, id)) return false
          const toggle = moveIndex % 2 
          const Component = toggle ? SeriesCard : CharacterCard
          const props = toggle ? series[id] : characters[id]
          const nextMethod = toggle ? getCharacters : getSeries
          return (
            <Component 
              {...props} 
              key={optionIndex} 
              disabled={!!moves[moveIndex]}
              onClick={(id) => {
                makeMove(id)
                nextMethod(id)
              }}
            />
          )
        })}
      </div>
    ))}
    <div className={styles.spinner}><LoadSpinner loading={loading} /></div>
    <WinnerModal
      name={name}
      show={gameWon}
      moveCounter={moveCounter}
      onChange={savePlayer}
    />
  </div>
)

const styles = ({
  moveCounter,
  theme: {
    color,
    layout
  }
}) => ({
  wrapper: {
    backgroundColor: color.yellow
  },
  moveCounter: {
    borderRadius: '50%',
    color: 'white',
    fontSize: '4rem',
    fontWeight: 900,
    textAlign: 'center',
    width: '5rem',
    lineHeight: '5rem',
    backgroundColor: 'red',
    margin: '0 auto 2rem'
  },
  row: {
    ...layout.row,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    borderRadius: 5,
    margin: '1rem 0',
    [`:nth-child(${moveCounter + 2})`]: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      boxShadow: '0 0 0 5px rgba(5,5,5,0.15)'
    }
  },
  spinner: {
    ...layout.center,
    padding: '2rem'
  }
})

const mapStateToProps = ({
  target,
  moveCounter, 
  characters,
  series,
  moveOptions,
  moves,
  gameWon,
  pending
}) => ({
  name: target.name,
  moveCounter,
  characters,
  series,
  moveOptions,
  moves,
  gameWon,
  loading: pending.GET_SERIES || pending.GET_CHARACTERS
})

export default compose(
  connect(mapStateToProps, {makeMove, getSeries, getCharacters, savePlayer}),
  withStyles(styles)
)(Play)
