import React from 'react'
import {Link} from 'fenris'
import withStyles from 'freyja'

const WinnerModal = ({
  name,
  moveCounter,
  onChange,
  styles
}) => (
  <div className={styles.modal}>
    <h1 className={styles.title}>Winner!</h1>
    <h4>You found {name} in {moveCounter} moves!</h4>
    <p>Enter your name below to save your score:</p>
    <input
      type='text'
      className={styles.input}
      onBlur={({target}) => onChange(target.value)}
    />
    <Link to='/scoreboard' className={styles.button}>Save Score</Link>
  </div>
)

const styles = ({
  show,
  theme: {
    color,
    layout,
    button
  }
}) => ({
  modal: {
    ...layout.center,
    transition: 'all 240ms ease-out',
    position: 'fixed',
    left: 0,
    right: 0, 
    top: 0, 
    bottom: 0,
    backgroundColor: 'rgba(240,30,30,0.95)',
    color: 'white',
    textAlign: 'center',
    transform: show ? 'none' : 'translateY(-100%)'
  },
  title: {
    fontSize: '5rem',
    lineHeight: 1, 
    fontWeight: 900,
  },
  input: {
    transition: 'all 120ms ease-out',
    borderRadius: 5,
    border: 'none',
    boxShadow: `0 0 0 5px ${color.black}`,
    margin: '1rem',
    padding: '0.25rem 1rem',
    ':focus': {
      boxShadow: `0 0 0 10px ${color.black}`,
    }
  },
  button: {
    ...button,
    backgroundColor: color.black
  }
})

export default withStyles(styles)(WinnerModal)