
export  let REPOSITORY ={
  SERVER_ADDRESS : '',
  TOKEN:''
};

let FRONTEND = {
  PORT:'',
  NUMBER_OF_REPLICAS : '',
  ENVIRONMENT:'',
  // DATABASE_URL:''
};

let BACKEND = {
  PORT:'',
  NUMBER_OF_REPLICAS:'',
  NAME:''
};


let DATABASE={

  PORT:'',
  NUMBER_OF_REPLICAS:'',
  DEFAULT_USER:'',
  DEFAULT_USER_PASSWORD:'',
  ROOT_USER_PASSWORD:'',
  NAME_OF_THE_DATABASE_TO_BE_CREATED:'',
  SCHEMA_NAME :''

};

export function getConfiguration(service){
  switch(service){
  case 'FRONTEND':
    return FRONTEND;
  case 'BACKEND':
    return BACKEND;
  case 'DATABASE':
    return DATABASE;
  }
}

export function updateConfiguration(service,configuration){
  if(!service){
    REPOSITORY=configuration;
  }
  switch(service){
  case 'FRONTEND':
    FRONTEND=configuration;
    break;
  case 'BACKEND':
    BACKEND=configuration;
    break;
  case 'DATABASE':
    DATABASE=configuration;
  }
}


