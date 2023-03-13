const ConfigHandler = (event,updateConfig,userFeConfig,setUserFeConfig)=>{
  setUserFeConfig({
    ...userFeConfig,
    [updateConfig]:event.target.value
  });
};

export default ConfigHandler;