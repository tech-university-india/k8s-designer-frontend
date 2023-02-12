import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home/Home';

describe('Home Page', () => {
  it('should render about page', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <MemoryRouter history={history}>
        <Home />
      </MemoryRouter>
    );
    fireEvent.click(getByTestId('about'));
    expect(history.location.pathname).toBe('/');
  });
  it('should render landing page', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <MemoryRouter history={history}>
        <Home />
      </MemoryRouter>
    );
    fireEvent.click(getByTestId('landing'));
    expect(history.location.pathname).toBe('/');
  });
});