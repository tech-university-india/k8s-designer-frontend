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
      
  it('should update Server address when Server address textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('http://github.com')).toBeTruthy();
    const serverTextfield = screen.getByDisplayValue('http://github.com');
    fireEvent.change( serverTextfield , {target : {value :'http://dockerhub.com'}});
    expect(serverTextfield.value).toEqual('http://dockerhub.com');
    
  });
  it('should update Token value when Token textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('abcd')).toBeTruthy();
    const tokenTextfield = screen.getByDisplayValue('abcd');
    fireEvent.change( tokenTextfield , {target : {value :'efg'}});
    expect(tokenTextfield.value).toEqual('efg');
  });
});
