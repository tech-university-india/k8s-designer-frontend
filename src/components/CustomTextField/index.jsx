import * as React from 'react';
import './CustomTextField.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PropTypes from 'prop-types';

export default function CustomTextField({userConfig,handleUserConfig,setNewTextField}){

  const [newConfigKey , setNewConfigKey] = React.useState();
  const [newConfigValue , setNewConfigValue] = React.useState();

  const handleAddConfig = ()=>{
    userConfig = {...userConfig,[newConfigKey]:newConfigValue};
    setNewTextField([]);
    handleUserConfig(userConfig);
  };

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
        <TextField id="outlined-basic" variant="outlined" data-testid = "newConfig-key" value={newConfigKey} onChange={(event)=>{setNewConfigKey(event.target.value);}}/>
        {newConfigKey ? (<TextField id="outlined-basic" data-testid = "newConfig-value" value={newConfigValue} variant="outlined" onChange={(event)=>{setNewConfigValue(event.target.value);}}/>):null}
      </Box>
      { newConfigValue && <div className='add-textfield-btn'>
        <AddCircleOutlineIcon data-testid = "add-newConfig" color='blue' onClick={handleAddConfig}/>
      </div>}
    </>
  );
}

CustomTextField.propTypes = {
  userConfig: PropTypes.object,
  handleUserConfig: PropTypes.func,
  setNewTextField: PropTypes.func
};