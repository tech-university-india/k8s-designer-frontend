import React from 'react';
import { render } from '@testing-library/react';
import MicroServices from '../index';

describe('MicroServices', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<MicroServices />);
    expect(asFragment()).toMatchSnapshot();
  });
});