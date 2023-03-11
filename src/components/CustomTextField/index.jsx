import * as React from 'react';
import './CustomTextField.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function CustomTextField({userConfig,handleUserConfig,setNewTextField}){

  const [newConfigKey , setNewConfigKey] = React.useState();
  const [newConfigValue , setNewConfigValue] = React.useState();

  React.useEffect(() => {
    return ()=>{
      console.log('new config added');

      if(newConfigKey && newConfigValue)
      {
        console.log('new config added');
        userConfig = {...userConfig,[newConfigKey]:newConfigValue};
        handleUserConfig(userConfig);
        setNewTextField([]);
      }
    };
  }, []);

  return(
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '9.1vw' },
        }}
        noValidate
        autoComplete="off"
        className='custom-textfield-container config-layout'
        style = {
          { fontFamily :  'Open Sans'}
        }
      >
        <TextField id="outlined-basic" label = "Enter Key" variant="outlined" data-testid = "newConfig-key" value={newConfigKey} onChange={(event)=>{setNewConfigKey(event.target.value);}}/>
        <TextField id="outlined-basic" label = "Enter Value" data-testid = "newConfig-value" value={newConfigValue} variant="outlined" onChange={(event)=>{setNewConfigValue(event.target.value);}}/>
      </Box>
    </>
  );
}

CustomTextField.propTypes = {
  userConfig: PropTypes.object,
  handleUserConfig: PropTypes.func,
  setNewTextField: PropTypes.func
};