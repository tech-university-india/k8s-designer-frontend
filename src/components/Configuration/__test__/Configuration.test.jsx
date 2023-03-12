import {fireEvent, render ,screen,waitFor ,act} from '@testing-library/react';
import Configuration from '..';
import * as React from 'react';
import ConfigHandler from '../../../utils/ConfigHandler';


jest.mock('../../../utils/ConfigHandler');


describe('Frontend Configuration',()=>{

  it('should show  Frontend configuration  text when component is rendered',()=>{
    expect(screen.queryByText('FRONTEND MICROSERVICES')).toBeFalsy();
    render(<Configuration service = "FRONTEND"/>);
    expect(screen.queryByText('FRONTEND MICROSERVICES')).toBeTruthy();
  });

  it('should render all configuration fields when component is rendered',async()=>{
    expect(screen.queryByLabelText('Enter PORT')).toBeFalsy();
    render(<Configuration service = "FRONTEND"/>);
    await waitFor(()=>{
      expect(screen.queryByLabelText('Enter ENVIRONMENT')).toBeTruthy();
    });
    expect(screen.queryByLabelText('Enter PORT')).toBeTruthy();
    expect(screen.queryByLabelText('Enter NUMBER_OF_REPLICAS')).toBeTruthy();
  });
  it('should call FE config handler with port as parameter when port textfield is updated',async()=>{

    render(<Configuration service = "FRONTEND"/>);
    await waitFor(()=>{
      expect(screen.queryByLabelText('Enter ENVIRONMENT')).toBeTruthy();
    });
    expect(screen.queryByLabelText('Enter PORT')).toBeTruthy();
    expect(ConfigHandler).toHaveBeenCalledTimes(0);
    const PortTextfield = screen.queryByLabelText('Enter PORT');
    fireEvent.change( PortTextfield , {target : {value :'8000'}});
    expect(ConfigHandler).toHaveBeenCalledTimes(1);
    expect(ConfigHandler).toHaveBeenCalledWith(expect.anything(),'PORT',expect.anything(),expect.anything());
  });

  it('should show custom configuration text when component is rendered',async()=>{
    expect(screen.queryByText('CUSTOM CONFIGURATION')).toBeFalsy();
    render(<Configuration service = "FRONTEND"/>);
    await waitFor(()=>{
      expect(screen.queryByText('CUSTOM CONFIGURATION')).toBeTruthy();
    });
  });

  it('should add new input textfield when plus button is clicked',async()=>{
    render(<Configuration service = "FRONTEND"/>);
    await waitFor(()=>{
      expect(screen.getByTestId('add-new-config')).toBeTruthy();
    });
    const addButton = screen.getByTestId('add-new-config');
    fireEvent.click(addButton);
    await waitFor(()=>{
      expect(screen.getByTestId('newConfig-key')).toBeTruthy();
    });
  });

  it('should get user config from local storage when component is rendered',async()=>{
    const userConfigCache  = {
      'userConfig':{
        'PORT' : '8000',
        'NUMBER_OF_REPLICAS' : '2',
        'ENVIRONMENT' : 'development'
      },
      'customConfig':{}
    };
    localStorage.setItem('FRONTEND',JSON.stringify(userConfigCache));
    render(<Configuration service = "FRONTEND"/>);
    await waitFor(()=>{
      expect(screen.queryByLabelText('Enter ENVIRONMENT')).toBeTruthy();
    });
    expect(screen.queryByLabelText('Enter PORT')).toBeTruthy();
    expect(screen.queryByLabelText('Enter NUMBER_OF_REPLICAS')).toBeTruthy();
    expect(screen.queryByLabelText('Enter PORT').value).toBe('8000');
    expect(screen.queryByDisplayValue('development')).toBeTruthy();
    expect(screen.queryByDisplayValue('2')).toBeTruthy();
  });

  it('should clear the timer on unmount', () => {
    jest.useFakeTimers();
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
    const { unmount } =  render(<Configuration service = "FRONTEND"/>);
    act(() => {
      jest.runAllTimers();
    });
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(4);
  });

  it('should reset all configuration fields when reset button is clicked',async()=>{
    const userConfigCache  = {
      'userConfig':{
        'PORT' : '8000',
        'NUMBER_OF_REPLICAS' : '2',
        'ENVIRONMENT' : 'development'
      },
      'customConfig':{}
    };
    localStorage.setItem('FRONTEND',JSON.stringify(userConfigCache));
    render(<Configuration service = "FRONTEND"/>);
    await waitFor(()=>{
      expect(screen.queryByLabelText('Enter ENVIRONMENT')).toBeTruthy();
    });
    expect(screen.queryByTestId('reset-button')).toBeTruthy();
    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(resetButton);
    expect(screen.queryByLabelText('Enter PORT').value).toBe('');
    expect(screen.queryByDisplayValue('development')).toBeFalsy();
    expect(screen.queryByDisplayValue('2')).toBeFalsy();
  });
  it('should render correctly and create a snapshot', () => {
    const {asFragment } =  render(<Configuration service = "FRONTEND"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});