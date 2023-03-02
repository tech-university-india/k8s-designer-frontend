import {fireEvent, render ,screen } from '@testing-library/react';
import {FrontendConfig} from '../../../components';
import * as React from 'react';

describe('FrontendConfigHandler',()=>{
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
      
  it('should show updated API version  when API version textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('4.2')).toBeTruthy();
    const ApiTextfield = screen.getByLabelText('Enter API Version');
    fireEvent.change( ApiTextfield , {target : {value :'3.2'}});
    expect(ApiTextfield.value).toEqual('3.2');
  });
    
  it('should show updated Port  when port textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('3000')).toBeTruthy();
    const ApiTextfield = screen.getByLabelText('Enter Port number');
    fireEvent.change( ApiTextfield , {target : {value :'8000'}});
    expect(ApiTextfield.value).toEqual('8000');
  });
  it('should show updated Replica number when Replica number textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('2')).toBeTruthy();
    const ApiTextfield = screen.getByLabelText('Enter Replica required');
    fireEvent.change( ApiTextfield , {target : {value :'1'}});
    expect(screen.getByDisplayValue('1')).toBeTruthy();
        
  });
  it('should show updated  React app name when React app textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('my-app')).toBeTruthy();
    const ApiTextfield = screen.getByLabelText('Enter React app name');
    fireEvent.change( ApiTextfield , {target : {value :'react-app'}});
    expect(screen.getByDisplayValue('react-app')).toBeTruthy();
    
  });
  it('should show updated application environment when Environment textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('env')).toBeTruthy();
    const ApiTextfield = screen.getByLabelText('Enter application environment');
    fireEvent.change( ApiTextfield , {target : {value :'port=2000'}});
    expect(screen.getByDisplayValue('port=2000')).toBeTruthy();
    
  });
  it('should show updated database url when database url textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('dbUrl')).toBeTruthy();
    const ApiTextfield = screen.getByLabelText('Enter database url');
    fireEvent.change( ApiTextfield , {target : {value :'localhost'}});
    expect(screen.getByDisplayValue('localhost')).toBeTruthy();
        
  });
});
