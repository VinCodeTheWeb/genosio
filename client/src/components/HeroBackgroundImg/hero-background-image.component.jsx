import React from 'react';

import FigureCreamy from 'assets/images/figure-creamy.png';
import FigureAbstract from 'assets/images/figure-abstract.png';
import FigureAbstract02 from 'assets/images/figure-abstract-02.png';
import FigureCircleMedium from 'assets/images/figure-circle-medium.png';
import FigureCircleSmall from 'assets/images/figure-circle-small.png';

import './hero-background-image.styles.scss';

const HeroBackgroundImage = ({ children }) => (
  <>
    <img className='figure__creamy' src={FigureCreamy} alt='figure-creamy' />
    <img className='figure__abstract' src={FigureAbstract} alt='figure-abstract' />
    <img className='figure__abstract-2' src={FigureAbstract02} alt='figure-abstract-2' />
    <img className='figure__circle-medium' src={FigureCircleMedium} alt='figure-circle-medium' />
    <img className='figure__circle-medium' src={FigureCircleMedium} alt='figure-circle-medium' />
    <img className='figure__circle-small-1' src={FigureCircleSmall} alt='figure-circle-medium' />
    <img className='figure__circle-small-2' src={FigureCircleSmall} alt='figure-circle-medium' />
    <img className='figure__circle-small-3' src={FigureCircleSmall} alt='figure-circle-medium' />
    <img className='figure__circle-small-4' src={FigureCircleSmall} alt='figure-circle-medium' />
    <img className='figure__circle-small-5' src={FigureCircleSmall} alt='figure-circle-medium' />
    <div className="content">
      {children}
    </div>
  </>
)

export { HeroBackgroundImage };
