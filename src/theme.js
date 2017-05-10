import {renderer} from 'freyja'

export default {
  color: {
    red: 'rgb(240,30,30)',
    yellow: 'rgb(238,159,56)',
    black: 'rgb(50,50,50)'
  },
  layout: {
    row: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    center: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  animation: {
    spin: renderer.renderKeyframe(() => ({
      from: {transform: 'rotate(0deg)'},
      to: {transform: 'rotate(359deg)'}
    }))
  },
  media: {
    ebook: '@media screen and (min-width: 420px)',
    tablet: '@media screen and (min-width: 580px)',
    laptop: '@media screen and (min-width: 740px)',
    desktop: '@media screen and (min-width: 980px)'
  },
  button: {
    transition: 'all 120ms ease-out',
    display: 'block',
    textAlign: 'center',
    width: '12rem',
    margin: '1rem auto',
    padding: '1rem',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '3rem',
    ':hover': {
      boxShadow: '0 0 0 5px currentColor'
    },
    ':focus': {
      boxShadow: '0 0 0 5px currentColor'
    }
  }
}