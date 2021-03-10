import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { Header } from './header.component';

// Test Utils Function
import { findByRole } from '__test__/testUtils';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Header /> component', () => {
    afterEach(cleanup);

    it('renders without error', () => {
        const header = findByRole(<Header />, 'heading');
        expect(header).toBeInTheDocument();
    });
});
