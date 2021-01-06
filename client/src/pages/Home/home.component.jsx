import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeroBackgroundImage } from 'components/HeroBackgroundImg/hero-background-image.component';
import './home.styles.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <HeroBackgroundImage>
        <h1>{t('test')}</h1>
      </HeroBackgroundImage>
    </div>
  )
}

export { Home };
