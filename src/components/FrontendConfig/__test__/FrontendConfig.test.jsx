import {fireEvent, render ,screen,waitFor } from '@testing-library/react';
import FrontendConfig from '..';
import * as React from 'react';
import FeConfigHandler from '../../../utils/FeConfigHandler';
import RepoConfigHandler from '../../../utils/RepoConfigHandler/index';


jest.mock('../../../utils/RepoConfigHandler/index');
jest.mock('../../../utils/FeConfigHandler');


describe('Frontend Configuration',()=>{
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
  afterEach(()=>{
    jest.clearAllMocks();
  });
  it('should show  Frontend configuration  text when component is rendered',()=>{
    expect(screen.queryByText('FRONTEND MICROSERVICES')).toBeFalsy();
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.queryByText('FRONTEND MICROSERVICES')).toBeTruthy();
  });
   
  

  it('should render all configuration buttons when component is rendered',async()=>{
    expect(screen.queryByText('4.2')).toBeFalsy();
    expect(screen.queryByText('3000')).toBeFalsy();
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    await waitFor(()=>{
      expect(screen.getByDisplayValue('4.2')).toBeTruthy();
    });
    expect(screen.getByDisplayValue('3000')).toBeTruthy();
    expect(screen.getByDisplayValue('my-app')).toBeTruthy();
    expect(screen.getByDisplayValue('env')).toBeTruthy();
    expect(screen.getByDisplayValue('dbUrl')).toBeTruthy();
    expect(screen.getByDisplayValue('2')).toBeTruthy();
  });
  it('should call FE config handler with port as parameter when port textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('3000')).toBeTruthy();
    expect(FeConfigHandler).toHaveBeenCalledTimes(0);
    const PortTextfield = screen.getByDisplayValue('3000');
    fireEvent.change( PortTextfield , {target : {value :'8000'}});
    expect(FeConfigHandler).toHaveBeenCalledTimes(1);
    expect(FeConfigHandler).toHaveBeenCalledWith(expect.anything(),'port',expect.anything(),expect.anything());
  });
  it('should call FE config handler with reactVersion as parameter when API version textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('4.2')).toBeTruthy();
    expect(FeConfigHandler).toHaveBeenCalledTimes(0);
    const ApiTextfield = screen.getByLabelText('Enter API Version');
    fireEvent.change( ApiTextfield , {target : {value :'3.2'}});
    expect(FeConfigHandler).toHaveBeenCalledTimes(1);
    expect(FeConfigHandler).toHaveBeenCalledWith(expect.anything(),'reactVersion',expect.anything(),expect.anything());

  });
 
  it('should call FE config handler with noOfReplica as parameter when Replica number textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('2')).toBeTruthy();
    expect(FeConfigHandler).toHaveBeenCalledTimes(0);
    const ReplicaTextfield = screen.getByDisplayValue('2');
    fireEvent.change( ReplicaTextfield , {target : {value :'1'}});
    expect(FeConfigHandler).toHaveBeenCalledTimes(1);    
    expect(FeConfigHandler).toHaveBeenCalledWith(expect.anything(),'noOfReplica',expect.anything(),expect.anything());

  });
  
  it('should call FE config handler with my-app as parameter when React app textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('my-app')).toBeTruthy();
    expect(FeConfigHandler).toHaveBeenCalledTimes(0);
    const AppNameTextfield = screen.getByDisplayValue('my-app');
    fireEvent.change( AppNameTextfield , {target : {value :'react-app'}});
    expect(FeConfigHandler).toHaveBeenCalledTimes(1);
    expect(FeConfigHandler).toHaveBeenCalledWith(expect.anything(),'name',expect.anything(),expect.anything());

  });
  it('should call FE config handler with env as parameter when Environment textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('env')).toBeTruthy();
    expect(FeConfigHandler).toHaveBeenCalledTimes(0);
    const EnvTextfield = screen.getByDisplayValue('env');
    fireEvent.change( EnvTextfield , {target : {value :'port=2000'}});
    expect(FeConfigHandler).toHaveBeenCalledTimes(1);
    expect(FeConfigHandler).toHaveBeenCalledWith(expect.anything(),'env',expect.anything(),expect.anything());

  });
  it('should call FE config handler with dbUrl as parameter when database url textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('dbUrl')).toBeTruthy();
    expect(FeConfigHandler).toHaveBeenCalledTimes(0);
    const dbUrlTextfield = screen.getByDisplayValue('dbUrl');
    fireEvent.change( dbUrlTextfield , {target : {value :'localhost'}});
    expect(FeConfigHandler).toHaveBeenCalledTimes(1);
    expect(FeConfigHandler).toHaveBeenCalledWith(expect.anything(),'dbUrl',expect.anything(),expect.anything());
    
  });
  it('shouldcall FE config handler with serverAddress as parameter when Server address textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('http://github.com')).toBeTruthy();
    expect(RepoConfigHandler).toHaveBeenCalledTimes(0);
    const ServerTextfield = screen.getByDisplayValue('http://github.com');
    fireEvent.change( ServerTextfield , {target : {value :'http://dockerhub.com'}});
    expect(RepoConfigHandler).toHaveBeenCalledTimes(1);
    expect(RepoConfigHandler).toHaveBeenCalledWith(expect.anything(),'serverAddress',expect.anything(),expect.anything());
    
  });
  it('should call FE config handler with token as parameter when Token textfield is updated',()=>{
    render(<FrontendConfig userRepo = {mockProp.userRepo} userRepoHandler = {mockProp.userRepoHandler} feConfig = {mockProp.feConfig} feConfigHandler = {mockProp.feConfigHandler} />);
    expect(screen.getByDisplayValue('abcd')).toBeTruthy();
    expect(RepoConfigHandler).toHaveBeenCalledTimes(0);
    const TokenTextfield = screen.getByDisplayValue('abcd');
    fireEvent.change( TokenTextfield , {target : {value :'efg'}});
    expect(RepoConfigHandler).toHaveBeenCalledTimes(1);
    expect(RepoConfigHandler).toHaveBeenCalledWith(expect.anything(),'token',expect.anything(),expect.anything());

    
  });

});