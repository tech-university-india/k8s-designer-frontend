import {fireEvent, render ,screen } from '@testing-library/react';
import {FrontendConfig} from '../../../components';
import * as React from 'react';

describe('RepoConfigHandler',()=>{
  const mockProp = {
    userRepo : {
      serverAddress : 'http://github.com',
      token:'abcd'
    },
    feConfig: {
      reactVersion : '4.2',
      port:'3000',
      noOfReplica : '2',
      name:'my-app',
      env:'env',
      dbUrl:'dbUrl'
    },
    userRepoHandler: jest.fn(),
    feConfigHandler: jest.fn()
  };
      
  it('should show updated Server address when Server address textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('http://github.com')).toBeTruthy();
    const ApiTextfield = screen.getByLabelText('Enter Server address');
    fireEvent.change( ApiTextfield , {target : {value :'http://dockerhub.com'}});
    expect(screen.getByDisplayValue('http://dockerhub.com')).toBeTruthy();
    
  });
  it('should show updated Token value when Token textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('abcd')).toBeTruthy();
    const ApiTextfield = screen.getByLabelText('Enter Token');
    fireEvent.change( ApiTextfield , {target : {value :'efg'}});
    expect(screen.getByDisplayValue('efg')).toBeTruthy();
    
  });
});
