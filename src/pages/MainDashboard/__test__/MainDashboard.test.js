import React from 'react';
import Konva from 'konva-node';
import { render } from '@testing-library/react';
import MainDashboard from './../index';
Konva.isBrowser = false;

describe('MainDashboard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<MainDashboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});