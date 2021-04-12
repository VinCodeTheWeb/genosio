import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../home.component';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Home />', () => {
    it('renders <Home /> component wihtout crashing', () => {
        render(<Home />);
    });

    it('renders correct text content', () => {
        render(<Home />);
        ['From Idea', 'To Production', 'We are a bright team of designer & developer'].forEach((text) =>
            screen.getByText(text),
        );
    });
});
