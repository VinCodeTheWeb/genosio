import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

export const findByTestId = (Component: React.ReactElement, dataTestId: string): HTMLElement => {
    const { getByTestId } = render(Component);
    return getByTestId(dataTestId);
};
