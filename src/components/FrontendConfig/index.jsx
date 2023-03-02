import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './FrontendConfig.css';
import PropTypes from 'prop-types';
import FeConfigHandler from '../../utils/FeConfigHandler';
import RepoConfigHandler from '../../utils/RepoConfigHandler';

export default function FrontendConfig(props){

  const config = {
    reactVersion : '',
    port:'',
    noOfReplica : '',
    name:'',
    env:'',
    dbUrl:''
  };
  const [userFeConfig , setUserFeConfig] = React.useState(config);
  const [userRepoConfig , setUserRepoConfig] = React.useState(props.userRepo);

  React.useEffect(()=>{
    if(props.feConfig){
      setUserFeConfig(props.feConfig);
    }
  },[]);

  React.useEffect(()=>{
    return()=>{
      props.feConfigHandler(userFeConfig);
      props.userRepoHandler(userRepoConfig);

    };
  },[userFeConfig,userRepoConfig]); 

  return(
    <div>
      <div className='service-element-border'>FRONTEND MICROSERVICES</div>
      <div  className='config-layout'>
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
          <TextField id="outlined-basic" label= 'Enter API Version' value ={userFeConfig.reactVersion} onChange = {(event)=>FeConfigHandler(event,'reactVersion',userFeConfig,setUserFeConfig)} variant="outlined" />
          <TextField id="outlined-basic" label= 'Enter Port number'  value ={userFeConfig.port} onChange = {(event)=>FeConfigHandler(event,'port',userFeConfig,setUserFeConfig)} variant="outlined" />
          <TextField id="outlined-basic" label= 'Enter Replica required' value ={userFeConfig.noOfReplica}  onChange = {(event)=>FeConfigHandler(event,'noOfReplica',userFeConfig,setUserFeConfig)} variant="outlined" />
          <TextField id="outlined-basic" label= 'Enter React app name' value ={userFeConfig.name} onChange = {(event)=>FeConfigHandler(event,'name',userFeConfig,setUserFeConfig)} variant="outlined" />
          <TextField id="outlined-basic" label= 'Enter application environment'  value ={userFeConfig.env} onChange = {(event)=>FeConfigHandler(event,'env',userFeConfig,setUserFeConfig)} variant="outlined" />
          <TextField id="outlined-basic" label= 'Enter database url' value ={userFeConfig.dbUrl}  onChange = {(event)=>FeConfigHandler(event,'dbUrl',userFeConfig,setUserFeConfig)} variant="outlined" />
          <TextField id="outlined-basic" label= 'Enter Server address' value ={userRepoConfig.serverAddress} onChange = {(event)=>RepoConfigHandler(event,'serverAddress',userRepoConfig,setUserRepoConfig)} variant="outlined" />
          <TextField id="outlined-basic" label= 'Enter Token' value ={userRepoConfig.token} onChange = {(event)=>RepoConfigHandler(event,'token',userRepoConfig,setUserRepoConfig)} variant="outlined" /> 
        </Box>
        <Button className='config-btn-color'>GENERATE NOW</Button>
      </div>
    </div>
  );
}

FrontendConfig.propTypes = {
  userRepo:  PropTypes.object,
  userRepoHandler: PropTypes.func,
  feConfig:  PropTypes.object,
  feConfigHandler: PropTypes.func
};

FrontendConfig.propHandler = {
  FeConfigHandler:PropTypes.func,
  handleRepoConfig:PropTypes.func
};