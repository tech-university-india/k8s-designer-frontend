import React from 'react';
import './MicroServices.css';

const MicroServices = () => {
  const onDragStart = (event, nameOfNode, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('nameOfNode', nameOfNode);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <div className='microservices'>
      <div className='microservices-header'>MICROSERVICES</div>
      <div className='services'>
        <div draggable onDragStart={(event) => onDragStart(event, 'frontend', 'microservice')} className='service'>
          <p>FRONTEND</p>
        </div>
        <div draggable onDragStart={(event) => onDragStart(event, 'backend', 'microservice')} className='service'>
          <p>BACKEND</p>
        </div>
        <div draggable onDragStart={(event) => onDragStart(event, 'database', 'microservice')} className='service'>
          <p>DATABASE</p>
        </div>
      </div>
    </div>
  );
};

export default MicroServices;