import React from 'react'
import withStyles from 'freyja'

const LoadSpinner = ({
  styles
}) => (
  <div className={styles.spinner} />
)

const spinnerBorder = {
  borderRadius: '50%',
  borderWidth: 5,
  borderStyle: 'solid',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent'
}

const styles = ({
  loading,
  theme: {
    animation,
    color
  }
}) => ({
  spinner: {
    ...spinnerBorder,
    opacity: loading ? 1 : 0,
    animation: loading ? `${animation.spin} 800ms reverse infinite` : 'none',
    position: 'relative',
    width: '3rem',
    height: '3rem',
    borderTopColor: 'white',
    borderBottomColor: 'white',
    ':before': {
      ...spinnerBorder,
      animation: loading ? `${animation.spin} 2400ms linear infinite` : 'none',
      content: '',
      borderTopColor: color.red,
      borderBottomColor: color.red,
      position: 'absolute',
      left: 5,
      right: 5, 
      top: 5,
      bottom: 5,
      borderRadius: '50%',
    }
  }
})

export default withStyles(styles)(LoadSpinner)