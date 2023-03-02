import {render ,screen } from '@testing-library/react';
import Configuration from '../index';

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

  // it('should fetch data from local storage and set to state when rendered for 1st time',()=>{
  //   const stateFunction = jest.fn((feConfigCache)=>{
  //     console.log(feConfigCache);
  //   });
  //   render(<Configuration/>);
  //   expect(stateFunction).toHaveBeenCalled();
  // });
  
});