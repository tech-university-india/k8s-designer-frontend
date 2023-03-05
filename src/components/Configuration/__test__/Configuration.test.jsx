import {fireEvent, render ,screen,waitFor } from '@testing-library/react';
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
      expect(screen.queryByLabelText('Enter DATABASE_URL')).toBeTruthy();
    });
    expect(screen.queryByLabelText('Enter PORT')).toBeTruthy();
    expect(screen.queryByLabelText('Enter ENVIRONMENT')).toBeTruthy();
    expect(screen.queryByLabelText('Enter NUMBER_OF_REPLICAS')).toBeTruthy();
  });
  it('should call FE config handler with port as parameter when port textfield is updated',async()=>{

    render(<Configuration service = "FRONTEND"/>);
    await waitFor(()=>{
      expect(screen.queryByLabelText('Enter DATABASE_URL')).toBeTruthy();
    });
    expect(screen.queryByLabelText('Enter PORT')).toBeTruthy();
    expect(ConfigHandler).toHaveBeenCalledTimes(0);
    const PortTextfield = screen.queryByLabelText('Enter PORT');
    fireEvent.change( PortTextfield , {target : {value :'8000'}});
    expect(ConfigHandler).toHaveBeenCalledTimes(1);
    expect(ConfigHandler).toHaveBeenCalledWith(expect.anything(),'PORT',expect.anything(),expect.anything());
  });

  it('it should add new textfield when plus button is clicked',async()=>{
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

  it('it should update service configuration with new textfield when plus button is clicked',async()=>{
    render(<Configuration service = "FRONTEND"/>);
    await waitFor(()=>{
      expect(screen.getByTestId('add-new-config')).toBeTruthy();
    });
    let addButton = screen.getByTestId('add-new-config');
    fireEvent.click(addButton);
    await waitFor(()=>{
      expect(screen.getByTestId('newConfig-key')).toBeTruthy();
    });
    const configKey = screen.getByTestId('newConfig-key').querySelector('input');
    fireEvent.change(configKey,{target:{value:'NAME'}});
    const configValue = screen.queryByTestId('newConfig-value').querySelector('input');
    fireEvent.change(configValue,{target:{value:'value'}});
    const addButton2= screen.getByTestId('add-newConfig');
    fireEvent.click(addButton2);
    await waitFor(()=>{
      expect(screen.getByDisplayValue('value')).toBeTruthy();
    });
  });
  it('should render correctly and create a snapshot', () => {
    const {asFragment } =  render(<Configuration service = "FRONTEND"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});