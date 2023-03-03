import {render ,screen } from '@testing-library/react';
import Configuration from '../index';
import * as React from 'react';


describe('Configuration',()=>{

  it('should show configuration text when component is rendered',()=>{
    expect(screen.queryByText('CONFIGURATION')).toBeFalsy();
    render(<Configuration/>);
    expect(screen.getByText('CONFIGURATION')).toBeTruthy();
  }); 
  it('should render Frontend configuration component when rendered with service value equal to frontend',()=>{
    render(<Configuration/>);
    expect(screen.queryByText('FRONTEND MICROSERVICES')).toBeTruthy();
  });  
});