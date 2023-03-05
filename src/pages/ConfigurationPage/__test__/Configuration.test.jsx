import {fireEvent, render ,screen } from '@testing-library/react';
import ConfigurationPage from '../index';
import * as React from 'react';


describe('Configuration',()=>{

  it('should show configuration text when component is rendered',()=>{
    expect(screen.queryByText('CONFIGURATION')).toBeFalsy();
    render(<ConfigurationPage/>);
    expect(screen.getByText('CONFIGURATION')).toBeTruthy();
  }); 
  it('should render Backend configuration component when rendered with service value equal to backend',()=>{
    render(<ConfigurationPage/>);
    const BackendButton = screen.getByText('BACKEND');
    fireEvent.click(BackendButton);
    expect(screen.queryByText('BACKEND MICROSERVICES')).toBeTruthy();
  });  
  it('should render Database configuration component when rendered with service value equal to database',()=>{
    render(<ConfigurationPage/>);
    const DatabaseButton = screen.getByText('DATABASE');
    fireEvent.click(DatabaseButton);
    expect(screen.queryByText('DATABASE MICROSERVICES')).toBeTruthy();
  });  
  it('should render Frontend configuration component when rendered with service value equal to frontend',()=>{
    render(<ConfigurationPage/>);
    const FrontendButton = screen.getByText('FRONTEND');
    fireEvent.click(FrontendButton);
    expect(screen.queryByText('FRONTEND MICROSERVICES')).toBeTruthy();
  });  
  it('should render correctly and create a snapshot', () => {
    const {asFragment } =  render(<ConfigurationPage/>);
    expect(asFragment()).toMatchSnapshot();
  });
});