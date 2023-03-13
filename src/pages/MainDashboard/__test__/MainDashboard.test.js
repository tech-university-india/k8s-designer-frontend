import React from 'react';
import { render } from '@testing-library/react';
import MainDashboard from './../index';

import * as ResizeObserverModule from 'resize-observer-polyfill';

(global).ResizeObserver = ResizeObserverModule.default;

jest.mock('reactflow/dist/style.css', () => {});
describe('MainDashboard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<MainDashboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});