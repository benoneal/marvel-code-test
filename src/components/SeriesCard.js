import React from 'react'
import {Link} from 'fenris'
import withStyles from 'freyja'

const SeriesCard = ({
  id,
  title,
  thumbnail: {
    path: imageUrl,
    extension
  },
  urls: [{url}],
  disabled,
  onClick,
  styles
}) => (
  <div className={styles.wrapper}>
    <div className={styles.image} onClick={() => !disabled && onClick(id)} />
    <div className={styles.title} onClick={() => !disabled && onClick(id)}>{title}</div>
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
    layout,
    media
  }
}) => ({
  wrapper: {
    ...layout.column,
    padding: '0.5rem',
    pointerEvents: disabled ? 'none' : 'all',
    borderBottom: '5px solid rgba(5,5,5,0.15)',
    width: '100%',
    [media.ebook]: layout.row
  },
  image: {
    transition: 'all 120ms ease-in-out',
    width: 80,
    height: 80,
    flexShrink: 0,
    backgroundImage: `url(${imageUrl}.${extension})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: 5,
    cursor: 'pointer',
    boxShadow: '0 0 0 0px white',
    ':hover': {
      boxShadow: `0 0 0 5px ${color.red}`
    }
  },
  title: {
    width: '100%',
    borderRadius: '3rem',
    minWidth: '6rem',
    color: color.black,
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'center',
    lineHeight: 1.2,
    padding: '1rem',
    cursor: 'pointer'
  },
  link: {
    flexShrink: 0,
    transition: 'all 120ms ease-in-out',
    fontSize: 12,
    lineHeight: 2,
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'rgb(100,100,100)',
    padding: '0 1em',
    borderRadius: '1rem',
    margin: '0 auto',
    ':hover': {
      backgroundColor: 'rgb(50,50,50)'
    }
  }
})

export default withStyles(styles)(SeriesCard)
