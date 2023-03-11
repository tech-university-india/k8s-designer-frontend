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
  const [newTextField, setNewTextField] = React.useState([]);

  React.useEffect(() => {
    const configCache =  localStorage.getItem(service);
    if(configCache)
    {
      setUserConfig(JSON.parse(configCache));
    }
    else{
      setUserConfig(getConfiguration(service));
    }
    return () => {
      setUserConfig(null);
      setNewTextField([]);
    };
  },[service]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(service, JSON.stringify(userConfig));
    }, 1000);
    return () => clearTimeout(timer);
  }, [userConfig]);

  const handleUserConfig = (newUserConfig)=>{
    setUserConfig(newUserConfig);
  };
   
  const onAddBtnClick = () => {
    setNewTextField(newTextField.concat(<CustomTextField userConfig = {userConfig} handleUserConfig={handleUserConfig} setNewTextField = {setNewTextField}/>));
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
          {newTextField}
        </Box>
        <div className='generate-btn-container'>
          <Button className='config-btn-color'>GENERATE NOW</Button>
        </div>
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