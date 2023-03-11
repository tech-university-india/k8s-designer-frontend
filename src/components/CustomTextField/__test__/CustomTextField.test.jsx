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

  it('should update newConfigKey when textfield is updated',()=>{
    expect(screen.queryByTestId('newConfig-key')).toBeFalsy();
    render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    expect(screen.queryByTestId('newConfig-key')).toBeTruthy();
    expect(screen.queryByLabelText('Enter Key')).toBeTruthy();
    const configKey = screen.getByTestId('newConfig-key').querySelector('input');
    fireEvent.change(configKey,{target:{value:'name'}});
    expect(screen.queryByDisplayValue('name')).toBeTruthy();
  });

  it('should show add config button when value-textfield has some value',()=>{
    expect(screen.queryByTestId('newConfig-value')).toBeFalsy();
    render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    expect(screen.queryByLabelText('Enter Value')).toBeTruthy();
    const configKey = screen.getByTestId('newConfig-key').querySelector('input');
    fireEvent.change(configKey,{target:{value:'name'}});
    expect(screen.queryByTestId('newConfig-value')).toBeTruthy();
    const configValue = screen.queryByTestId('newConfig-value').querySelector('input');
    fireEvent.change(configValue,{target:{value:'2020'}});
    expect(screen.queryByDisplayValue('2020')).toBeTruthy();

  });


  it('should render correctly and create a snapshot', () => {
    const {asFragment } =  render(<CustomTextField userConfig = {mock.userConfig} handleUserConfig={mock.handleUserConfig} setNewTextField = {mock.setNewTextField}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});