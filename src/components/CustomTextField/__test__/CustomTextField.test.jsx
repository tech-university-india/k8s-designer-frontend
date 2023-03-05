import {fireEvent, render ,screen } from '@testing-library/react';
import CustomTextField from '..';
import * as React from 'react';

describe('Frontend Configuration',()=>{

  const mock = {
    userConfig:{
      PORT:'',
      NUMBER_OF_REPLICAS : '',
      ENVIRONMENT:'',
      DATABASE_URL:''
    },
    handleUserConfig:jest.fn(),
    setNewTextField:jest.fn()
  };

  it('should show empty textfield  when component is rendered',()=>{
    expect(screen.queryByTestId('newConfig-key')).toBeFalsy();
    render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    expect(screen.queryByTestId('newConfig-key')).toBeTruthy();
    expect(screen.queryByTestId('newConfig-key').value).toEqual(undefined);
    
  });
   
  it('should show config-value textfield when key-textfield has some value',()=>{
    expect(screen.queryByTestId('newConfig-key')).toBeFalsy();
    render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    expect(screen.queryByTestId('newConfig-key')).toBeTruthy();
    expect(screen.queryByTestId('newConfig-value')).toBeFalsy();
    const configKey = screen.getByTestId('newConfig-key').querySelector('input');
    fireEvent.change(configKey,{target:{value:'name'}});
    expect(screen.queryByTestId('newConfig-value')).toBeTruthy();
  });
  
  it('should disable config-value textfield when key-textfield is null',()=>{
    expect(screen.queryByTestId('newConfig-key')).toBeFalsy();
    render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    expect(screen.queryByTestId('newConfig-key')).toBeTruthy();
    expect(screen.queryByTestId('newConfig-value')).toBeFalsy();
    const configKey = screen.getByTestId('newConfig-key').querySelector('input');
    fireEvent.change(configKey,{target:{value:'name'}});
    expect(screen.queryByTestId('newConfig-value')).toBeTruthy();
    fireEvent.change(configKey,{target:{value:null}});
    expect(screen.queryByTestId('newConfig-value')).toBeFalsy();
  });

  it('should show add config button when value-textfield has some value',()=>{
    render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    const configKey = screen.getByTestId('newConfig-key').querySelector('input');
    fireEvent.change(configKey,{target:{value:'name'}});
    expect(screen.queryByTestId('newConfig-value')).toBeTruthy();
    const configValue = screen.queryByTestId('newConfig-value').querySelector('input');
    fireEvent.change(configValue,{target:{value:'value'}});
    expect(screen.getByTestId('add-newConfig')).toBeTruthy();
  });

  it('should disable add config button when value-textfield is null',()=>{
    render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    const configKey = screen.getByTestId('newConfig-key').querySelector('input');
    fireEvent.change(configKey,{target:{value:'name'}});
    expect(screen.queryByTestId('newConfig-value')).toBeTruthy();
    const configValue = screen.queryByTestId('newConfig-value').querySelector('input');
    fireEvent.change(configValue,{target:{value:'value'}});
    expect(screen.getByTestId('add-newConfig')).toBeTruthy();
    fireEvent.change(configValue,{target:{value:null}});
    expect(screen.queryByTestId('add-newConfig')).toBeFalsy();
  });

  it('should disable add config button when value-textfield is null',()=>{
    render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    const configKey = screen.getByTestId('newConfig-key').querySelector('input');
    fireEvent.change(configKey,{target:{value:'name'}});
    expect(screen.queryByTestId('newConfig-value')).toBeTruthy();
    const configValue = screen.queryByTestId('newConfig-value').querySelector('input');
    fireEvent.change(configValue,{target:{value:'value'}});
    expect(screen.getByTestId('add-newConfig')).toBeTruthy();
    fireEvent.change(configValue,{target:{value:null}});
    expect(screen.queryByTestId('add-newConfig')).toBeFalsy();
  });

  it('should update userConfig when add config button is clicked',()=>{
    render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    const configKey = screen.getByTestId('newConfig-key').querySelector('input');
    fireEvent.change(configKey,{target:{value:'NAME'}});
    const configValue = screen.queryByTestId('newConfig-value').querySelector('input');
    fireEvent.change(configValue,{target:{value:'value'}});
    const addButton= screen.getByTestId('add-newConfig');
    expect(mock.handleUserConfig).toHaveBeenCalledTimes(0);
    expect(mock.setNewTextField).toHaveBeenCalledTimes(0);
    fireEvent.click(addButton);
    expect(mock.handleUserConfig).toHaveBeenCalledTimes(1);
    expect(mock.setNewTextField).toHaveBeenCalledTimes(1);
  });

  it('should render correctly and create a snapshot', () => {
    const {asFragment } =  render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});