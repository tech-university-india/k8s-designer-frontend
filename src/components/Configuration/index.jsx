import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Configuration.css';
import PropTypes from 'prop-types';
import ConfigHandler from '../../utils/ConfigHandler';
import {CustomTextField} from '../index';
import { REPOSITORY , getConfiguration } from '../../utils/makeRequest';


export default function Configuration({service}){

  

  const [userConfig , setUserConfig] = React.useState();
  const [userRepoConfig , setUserRepoConfig] = React.useState();

  const [newTextField, setNewTextField] = React.useState([]);

  React.useEffect(() => {
    setUserRepoConfig(REPOSITORY);
    setUserConfig(getConfiguration(service));
  },[service]);

  // React.useEffect(() => {
  //   return()=>{

  //     // updateConfiguration(service,userRepoConfig);
  //     // updateConfiguration(userRepoConfig);
  //   };
  // },[userConfig,userRepoConfig]);

  const handleUserConfig = (newUserConfig)=>{
    setUserConfig(newUserConfig);
  };
   
  const onAddBtnClick = () => {
    setNewTextField((<CustomTextField userConfig = {userConfig} handleUserConfig={handleUserConfig} setNewTextField = {setNewTextField}/>));
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
          {newTextField}
          {Object.keys(userRepoConfig).map((configuration,index)=>(
            <TextField id="outlined-basic" label= {`Enter ${configuration}`} key={index}  value ={userRepoConfig[configuration]||''} onChange = {(event)=>ConfigHandler(event,configuration,userRepoConfig,setUserRepoConfig)} variant="outlined" />
          ))}
        </Box>
        {newTextField.length===0 && <div className='add-textfield-container'>
          <AddCircleOutlineIcon data-testid="add-new-config" color='blue' onClick={onAddBtnClick}/>
        </div>}
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
  service : PropTypes.string,
  userRepo:  PropTypes.object,
  userRepoHandler: PropTypes.func,
  userConfige:  PropTypes.object,
  userConfigHandler: PropTypes.func
};