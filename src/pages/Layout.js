import React from 'react'
import Helmet from 'react-helmet'
import {compose} from 'redux' 
import {connect} from 'react-redux'
import {Link} from 'fenris'
import withStyles from 'freyja'
import LoadSpinner from '../components/LoadSpinner'

const Layout = ({
  target,
  loading,
  styles, 
  children
}) => (
  <div className={styles.page}>
    <Helmet 
      title={`Six degrees of ${target.name}`}
      meta={[
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no, shrink-to-fit=no'},
        {httpEquiv: 'x-ua-compatible', content: 'ie=edge'}
      ]}
      link={[
        {href: 'https://fonts.googleapis.com/css?family=Roboto:400,900', rel: 'stylesheet'}
      ]} 
    />
    <div className={styles.header}>
      <h1>Six degrees of {target.name}</h1>
      A silly game by Ben O'Neal
      <div className={styles.spinner}><LoadSpinner loading={loading} /></div>
    </div>
    <div className={styles.content}>{children}</div>
    <div className={styles.footer}>
      <div className={styles.portrait} />
      Data provided by Marvel. © 2014 Marvel
    </div>
  </div>
)

const styles = ({
  loading,
  target: {
    thumbnail: {
      path: imageUrl,
      extension
    } = {}
  } = {},
  theme: {
    color, 
    layout,
    animation
  }
}) => ({
  page: {
    ...layout.column,
    justifyContent: 'space-between',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: color.yellow,
    minHeight: '100vh',
  },
  content: {
    maxWidth: '40rem',
    margin: '0 auto',
    padding: '2rem 1rem',
    color: color.black
  },
  header: {
    backgroundColor: color.black,
    color: 'white',
    padding: '1rem 2rem',
    textAlign: 'center',
    lineHeight: 1.1,
    width: '100vw'
  },
  footer: {
    ...layout.column,
    color: 'black',
    padding: '1rem',
    fontSize: '0.75rem'
  },
  portrait: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    border: `4px solid ${color.red}`,
    backgroundImage: `url(${imageUrl}.${extension})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginBottom: '1rem'
  },
  spinner: {
    position: 'fixed',
    right: '1rem',
    top: '1rem'
  }
})

const includes = (obj, value) => {
  let key
  let has = false
  for (key in obj) {
    if (has) continue
    has = obj[key] === value
  }
  return has
}

const mapStateToProps = ({target, pending}) => ({
  target,
  loading: includes(pending, true)
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Layout)
