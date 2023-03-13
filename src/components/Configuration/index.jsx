import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Configuration.css';
import PropTypes from 'prop-types';
import ConfigHandler from '../../utils/ConfigHandler';
import {CustomTextField} from '../index';
import { getConfiguration } from '../../utils/makeRequest';
export default function Configuration({service}){

  const [userConfig , setUserConfig] = React.useState();
  const [customConfig,setCustomConfig] = React.useState({});

  React.useEffect(() => {
    const configCache =  localStorage.getItem(service);
    if(configCache)
    {
      setUserConfig(JSON.parse(configCache).userConfig);
      setCustomConfig(JSON.parse(configCache).customConfig);
    }
    else{
      setUserConfig(getConfiguration(service));
    }
    return () => {
      setUserConfig(null);
      setCustomConfig({});
    };
  },[service]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const userConfigCache  = {
        'userConfig':userConfig,
        'customConfig':customConfig
      };
      localStorage.setItem(service, JSON.stringify(userConfigCache));
    }, 1000);
    return () => clearTimeout(timer);
  }, [userConfig,customConfig]);

  const handleCustomConfig = (key,newConfig)=>{
    setCustomConfig({...customConfig,[key]:newConfig});
  };
   
  const onAddBtnClick = () => {
    setCustomConfig({...customConfig,[Object.keys(customConfig).length]:['','']});
  };

  const handleReset = ()=>{
    localStorage.removeItem(service);
    setUserConfig(getConfiguration(service));
    setCustomConfig({});
  };

  return userConfig ?(
    <div>
      <div className='service-element-border'>{service} MICROSERVICES</div>
      <div  className='config-layout-container'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '18.2vw' },
          }}
          noValidate
          autoComplete="off"
          className='config-layout'
          style = {
            { fontFamily :  'Open Sans'}
          }
        >
          {Object.keys(userConfig).map((configuration,index)=>(
            <TextField id="outlined-basic" label= {`Enter ${configuration}`} value = {userConfig[configuration] || ''} key={index} onChange = {(event)=>ConfigHandler(event,configuration,userConfig,setUserConfig)} variant="outlined" />
          ))}
          <div className='add-textfield-container'>
            <p>CUSTOM CONFIGURATION</p>
            <AddCircleOutlineIcon data-testid="add-new-config" color='blue' onClick={onAddBtnClick}/>
          </div>
          {Object.keys(customConfig).map((configuration,index)=>(
            <CustomTextField Key = {configuration} customConfig={customConfig[configuration]} handleCustomConfig={handleCustomConfig}  key={index}/>
          ))}
        </Box>
        <Button  data-testid="reset-button" className='config-btn-color' onClick={()=>{handleReset();}}>RESET</Button>
        <Button className='config-btn-color'>GENERATE NOW</Button>
      </div>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}

Configuration.propTypes = {
  service : PropTypes.string
};