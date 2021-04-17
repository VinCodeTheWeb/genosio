import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { Header } from '../header.component';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Header /> component', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = render(<Header />);
    });

    afterEach(cleanup);

    it('renders without error', () => {
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
    });
});
