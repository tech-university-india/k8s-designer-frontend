import * as React from 'react';
import './CustomTextField.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function CustomTextField({Key,customConfig,handleCustomConfig}){

  const [newConfigKey , setNewConfigKey] = React.useState(customConfig[0]||'');
  const [newConfigValue , setNewConfigValue] = React.useState(customConfig[1]||'');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      customConfig = [newConfigKey,newConfigValue];
      handleCustomConfig(Key,customConfig);
    }, 1000);
    return () => clearTimeout(timer);
  }, [newConfigKey,newConfigValue]);

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
  Key: PropTypes.string,
  customConfig: PropTypes.array,
  handleCustomConfig: PropTypes.func,
};