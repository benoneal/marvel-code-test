import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'fenris'
import withStyles from 'freyja'

const rulesDescriptions = (name) => [
  'Choose a character',
  `Choose a series you think might lead towards ${name}`,
  `Repeat until you find ${name}, then select ${name} to win`,
  'The best possible score is 3 moves'
]

const Rules = ({
  name,
  styles
}) => (
  <div>
    <h1 className={styles.title}>Rules</h1>
    <h3>Reach {name} in the fewest possible moves</h3>
    {rulesDescriptions(name).map((rule, i) => <p key={i}>{rule}</p>)}
    <Link to='/play' className={styles.button}>Start Game</Link>
  </div>
)

const styles = ({
  theme: {
    color,
    button
  }
}) => ({
  title: {
    textAlign: 'center',
    marginBottom: '1rem'
  },
  button: {
    ...button,
    backgroundColor: color.red
  }
})

const mapStateToProps = ({target}) => ({
  name: target.name
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Rules)
