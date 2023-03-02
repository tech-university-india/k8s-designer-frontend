const RepoConfigHandler = (event,updateConfig,userRepoConfig,setUserRepoConfig)=>{
  switch(updateConfig){
  case 'serverAddress':
    setUserRepoConfig({
      ...userRepoConfig,
      serverAddress:event.target.value
    });
    break;
  case 'token':
    setUserRepoConfig({
      ...userRepoConfig,
      token:event.target.value
    });
    break;
  }
};

export default RepoConfigHandler;