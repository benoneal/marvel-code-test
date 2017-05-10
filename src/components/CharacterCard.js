import React from 'react'
import {Link} from 'fenris'
import withStyles from 'freyja'

const CharacterCard = ({
  id,
  name,
  thumbnail: {
    path: imageUrl,
    extension
  },
  urls: [_, {url}],
  disabled,
  onClick = () => {},
  styles
}) => (
  <div className={styles.wrapper}>
    <div className={styles.image} onClick={() => !disabled && onClick(id)} />
    <div className={styles.name} onClick={() => !disabled && onClick(id)}>{name}</div>
    <Link to={url} target='_blank' className={styles.link}>More info</Link>
  </div>
)

const styles = ({
  disabled, 
  thumbnail: {
    path: imageUrl,
    extension
  } = {},
  theme: {
    color,
    layout
  }
}) => ({
  wrapper: {
    ...layout.column,
    padding: '0.5rem',
    pointerEvents: disabled ? 'none' : 'all'
  },
  image: {
    transition: 'all 120ms ease-in-out',
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundImage: `url(${imageUrl}.${extension})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    boxShadow: '0 0 0 0px white',
    ':hover': {
      boxShadow: `0 0 0 5px ${color.red}`
    }
  },
  name: {
    borderRadius: '3rem',
    minWidth: '6rem',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: '1.5rem',
    backgroundColor: 'black',
    padding: '0 1rem',
    marginTop: '-1.5rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  link: {
    transition: 'all 120ms ease-in-out',
    fontSize: 12,
    lineHeight: 1.6,
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'rgb(100,100,100)',
    padding: '0 1em',
    borderRadius: '0 0 1rem 1rem',
    ':hover': {
      backgroundColor: 'rgb(50,50,50)'
    }
  }
})

export default withStyles(styles)(CharacterCard)
