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
      
  it('should update API version  when API version textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('4.2')).toBeTruthy();
    const ApiTextfield = screen.getByLabelText('Enter API Version');
    fireEvent.change( ApiTextfield , {target : {value :'3.2'}});
    expect(ApiTextfield.value).toEqual('3.2');
  });
    
  it('should update Port when port textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('3000')).toBeTruthy();
    const PortTextfield = screen.getByDisplayValue('3000');
    fireEvent.change( PortTextfield , {target : {value :'8000'}});
    expect(PortTextfield.value).toEqual('8000');
  });
  it('should update Replica number when Replica number textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('2')).toBeTruthy();
    const ReplicaTextfield = screen.getByDisplayValue('2');
    fireEvent.change( ReplicaTextfield , {target : {value :'1'}});
    expect(ReplicaTextfield.value).toEqual('1');
        
  });
  it('should update  React app name when React app textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('my-app')).toBeTruthy();
    const ReactAppTextfield = screen.getByDisplayValue('my-app');
    fireEvent.change( ReactAppTextfield , {target : {value :'react-app'}});
    expect(ReactAppTextfield.value).toEqual('react-app');
    
  });
  it('should update application environment when Environment textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('env')).toBeTruthy();
    const EnvTextfield = screen.getByDisplayValue('env');
    fireEvent.change( EnvTextfield , {target : {value :'port=2000'}});
    expect(EnvTextfield.value).toEqual('port=2000');
    
  });
  it('should update database url when database url textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('dbUrl')).toBeTruthy();
    const dbUrlTextfield = screen.getByDisplayValue('dbUrl');
    fireEvent.change( dbUrlTextfield , {target : {value :'localhost'}});
    expect(dbUrlTextfield.value).toEqual('localhost');
        
  });
});
