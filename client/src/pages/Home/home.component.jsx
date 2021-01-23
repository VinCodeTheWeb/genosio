import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeroBackgroundImage } from 'components/HeroBackgroundImg/hero-background-image.component';
import { Header } from 'components/Header/header.component';

import { Button, Heading } from 'components/common/';

import Illustration from 'assets/images/illustration.png';

const Home = () => {
  const { t } = useTranslation('./pages/home');

  return (
    <div className='home'>
      <HeroBackgroundImage>
        <Header />
        <div className='home__headings'>
          <Heading text={t('heading1')} />
          <Heading text={t('heading2')} fontWeight={700} />
          <Heading
            h='h5'
            text={t('subheading1')}
            color='grey'
          />
          <div className='home__cta'>
           <Button primary text={t('btn1')} round />
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
