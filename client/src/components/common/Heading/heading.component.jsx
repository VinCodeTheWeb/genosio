import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ text, h, fontWeight, color }) => {
  const Tag = h;

  const headingColor = (() => {
    switch (color) {
      case 'white':
        return '#FFF'
        
      case 'grey':
        return '#707070'
    
      default:
        return '#000'
    }
  })()

  const styles = {
    fontWeight,
    color: headingColor
  }

  return (
    <Tag style={styles} className='heading'>{text}</Tag>
  )
}

Heading.defaultProps = {
  text: 'Heading 1',
  h: 'h1',
  fontWeight: 300,
  color: '#000'
};

Heading.propTypes = {
  text: PropTypes.string,
  h: PropTypes.string,
  fontWeight: PropTypes.number,
  fontSize: PropTypes.string,
  color: PropTypes.string
}

export { Heading };
