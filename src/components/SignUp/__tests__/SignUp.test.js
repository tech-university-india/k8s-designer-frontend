import React from 'react';
import { render } from '@testing-library/react';
import SignUp from '../index';

describe('Sign up', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SignUp/>);
    expect(asFragment()).toMatchSnapshot();
  });
});