import React from 'react';

import { HeroBackgroundImage } from 'components/HeroBackgroundImg/hero-background-image.component';
import './home.styles.scss';

const Home = () => (
  <div className="home">
    <HeroBackgroundImage>
      <h1>Test</h1>
    </HeroBackgroundImage>
  </div>
)

export { Home };
