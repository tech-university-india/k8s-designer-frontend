const FeConfigHandler = (event,updateConfig,userFeConfig,setUserFeConfig)=>{
  // setUserFeConfig({
  //   ...userFeConfig,
  //   userFeConfig[updateConfig]:event.target.value
  // })
  switch(updateConfig){
  case 'port':
    setUserFeConfig({
      ...userFeConfig,
      port:event.target.value
    });
    break;  
  case 'reactVersion':
    setUserFeConfig({
      ...userFeConfig,
      reactVersion:event.target.value
    });
    break;
  case 'noOfReplica':
    setUserFeConfig({
      ...userFeConfig,
      noOfReplica:event.target.value
    });
    break; 
  case 'name':
    setUserFeConfig({
      ...userFeConfig,
      name:event.target.value
    });
    break;
  case 'env':
    setUserFeConfig({
      ...userFeConfig,
      env:event.target.value
    });
    break;
  case 'dbUrl':
    setUserFeConfig({
      ...userFeConfig,
      dbUrl:event.target.value
    }); 
    break;
  }
};

export default FeConfigHandler;