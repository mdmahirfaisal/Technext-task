import { render, screen, logRoles } from '@testing-library/react';
import Home from './Home';

test('this is test 1', () => {
    render(<Home />);
    logRoles(screen.getByTestId("myhomediv"))
    const buttonElement = screen.getByRole("button", { name: 'test button', exact: false })
    expect(buttonElement).toBeInTheDocument();
});