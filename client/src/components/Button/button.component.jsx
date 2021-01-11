import React from 'react';
import PropTypes from 'prop-types';

import './button.styles.scss';

const Button = ({ primary, text, fontWeight, fontSize, round }) => {

  const styles = {
    fontWeight,
    fontSize,
    backgroundColor: primary && '#bd1e59',
    borderRadius: round ? '2.6rem' : '.5rem',
    width: round ? '18rem' : '15rem',
    height: round && '4.4rem',
    color: '#FFF'
  }

  return (
    <button style={styles} className='button'>
      <span className="button__text">{text}</span>
    </button>
  )
}

Button.defaultProps = {
  primary: false,
  text: 'Button',
  fontWeight: 300,
  fontSize: '1.5rem',
  round: false
}

Button.PropType = {
  primary: PropTypes.bool,
  text: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  round: PropTypes.bool,
}

export { Button };
