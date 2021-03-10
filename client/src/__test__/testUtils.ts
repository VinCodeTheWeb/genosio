import React from 'react';
import { render } from '@testing-library/react';

export const findByRole = (Component: React.ReactElement, role: string): HTMLElement => {
    const { getByRole } = render(Component);
    return getByRole(role);
};
