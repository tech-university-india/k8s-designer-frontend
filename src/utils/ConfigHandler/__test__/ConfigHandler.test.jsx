import {fireEvent, render ,screen } from '@testing-library/react';
import {Configuration} from '../../../components';
import * as React from 'react';
import {getConfiguration} from '../../makeRequest';

jest.mock('../../makeRequest');
describe('FrontendConfigHandler',()=>{
 
  const mockData = {
    PORT:'3000',
    NUMBER_OF_REPLICAS : '2',
    ENVIRONMENT:'env',
    DATABASE_URL:'dbUrl'
  };
  it('should update Port when port textfield is updated',()=>{
    getConfiguration.mockReturnValue(mockData);
    render(<Configuration service = "FRONTEND"/>);
    expect(getConfiguration).toHaveBeenCalledTimes(1);
    expect(screen.getByDisplayValue('3000')).toBeTruthy();
    const PortTextfield = screen.getByDisplayValue('3000');
    fireEvent.change( PortTextfield , {target : {value :'8000'}});
    expect(PortTextfield.value).toEqual('8000');
  });
  it('should update Replica number when Replica number textfield is updated',()=>{
    getConfiguration.mockReturnValue(mockData);
    render(<Configuration service = "FRONTEND"/>);
    expect(getConfiguration).toHaveBeenCalledTimes(1);
    expect(screen.getByDisplayValue('2')).toBeTruthy();
    const ReplicaTextfield = screen.getByDisplayValue('2');
    fireEvent.change( ReplicaTextfield , {target : {value :'3'}});
    expect(ReplicaTextfield.value).toEqual('3');
        
  });
  it('should update application environment when Environment textfield is updated',()=>{
    getConfiguration.mockReturnValue(mockData);
    render(<Configuration service = "FRONTEND"/>);
    expect(getConfiguration).toHaveBeenCalledTimes(1);
    expect(screen.getByDisplayValue('env')).toBeTruthy();
    const envTextfield = screen.getByDisplayValue('env');
    fireEvent.change( envTextfield , {target : {value :'my-env'}});
    expect(envTextfield.value).toEqual('my-env');
    
  });
  it('should update database url when database url textfield is updated',()=>{
    getConfiguration.mockReturnValue(mockData);
    render(<Configuration service = "FRONTEND"/>);
    expect(getConfiguration).toHaveBeenCalledTimes(1);
    expect(screen.getByDisplayValue('dbUrl')).toBeTruthy();
    const dbUrlTextfield = screen.getByDisplayValue('dbUrl');
    fireEvent.change( dbUrlTextfield , {target : {value :'my-dbUrl'}});
    expect(dbUrlTextfield.value).toEqual('my-dbUrl');
        
  });
});
