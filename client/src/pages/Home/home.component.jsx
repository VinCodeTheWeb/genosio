import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeroBackgroundImage } from 'components/HeroBackgroundImg/hero-background-image.component';
import { Header } from 'components/Header/header.component';
import { Heading } from 'components/Heading/heading.component';
import { Button } from 'components/Button/button.component';

import Illustration from 'assets/images/illustration.png';
import './home.styles.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <HeroBackgroundImage>
        <Header />
        <div className="home__headings">
          <Heading text='From Idea' />
          <Heading text='To Production' fontWeight={700} />
          <Heading
            h='h5'
            text={"We are a bright team of designer & developer"}
            fontSize='2.5rem'
            color='grey'
          />
          <div className='home__cta'>
          <Button primary text='Explore More' round />
          </div>

          <div className='home__illustration'>
            <img src={Illustration} alt='illustration' />
          </div>
        </div>
        
      </HeroBackgroundImage>
    </div>
  )
}

export { Home };
