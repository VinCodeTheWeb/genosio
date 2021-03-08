import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Header } from './header.component';

it('should render', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header')).toHaveTextContent(0);
});
