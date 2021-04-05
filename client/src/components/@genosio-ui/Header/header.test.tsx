import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { Header } from './header.component';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Header /> component', () => {
    beforeEach(() => {
        render(<Header />);
    });

    afterEach(cleanup);

    it('renders without error', () => {
        render(<Header />);
    });

    it('should select header by its role', () => {
        screen.getByRole('heading');
    });
});
