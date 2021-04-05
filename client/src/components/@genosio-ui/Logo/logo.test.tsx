import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { Logo } from './logo.component';

// Test Utils Function
import { findByRole } from '__test__/testUtils';

describe('<Logo /> component', () => {
    afterEach(cleanup);

    it('renders without error', () => {
        const logo = findByRole(<Logo />, 'img');
        expect(logo).toBeInTheDocument();
    });
});
