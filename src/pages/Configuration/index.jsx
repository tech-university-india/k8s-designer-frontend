import './Configuration.css';
import * as React from 'react';
import {Header,FrontendConfig} from '../../components';

export default function configuration() {

  const userRepoId ={
    serverAddress : '',
    token:''
  };
  //this state should be in microservices drag and drop  component
  // const [service,setService] = React.useState('frontend');
  const [userRepo , setUserRepo] = React.useState(userRepoId);
  const [feConfig,setFeConfig] = React.useState();
  // const [beConfig,setBeConfig] = React.useState();
  // const [dbConfig,setDbConfig] = React.useState();

  React.useEffect(() => {
    const feConfigCache = JSON.parse(localStorage.getItem('feConfig'));
    const userRepoCache = JSON.parse(localStorage.getItem('userRepo'));
    if (feConfigCache) {
      setFeConfig(feConfigCache);
      // setService('backend');
    }
    if (userRepoCache) {
      setUserRepo(userRepoCache);
    }
  }, []);

  const userRepoHandler = (userRepo)=>{
    setUserRepo(userRepo);
  };

  const feConfigHandler = (feConfig)=>{
    setFeConfig(feConfig);
  };
  

  return (
    <div>
      <Header /> 
      <div className='config-body'>
        <div className='config-element-border'>CONFIGURATION</div>
        <FrontendConfig userRepo = {userRepo} userRepoHandler = {userRepoHandler} feConfig = {feConfig} feConfigHandler = {feConfigHandler} />
      </div>
    </div>
    
  );
}