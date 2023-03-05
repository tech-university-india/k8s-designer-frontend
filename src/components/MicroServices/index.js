import React from 'react';
import './MicroServices.css';

const MicroServices = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <div className='microservices'>
      <div>
        <p className='heading'>MicroServices</p>
        <hr />
      </div>
      <div className='services'>
        <div draggable onDragStart={(event) => onDragStart(event, 'frontend')} className='service'>
          <p>FRONTEND</p>
        </div>
        <div draggable onDragStart={(event) => onDragStart(event, 'backend')} className='service'>
          <p>BACKEND</p>
        </div>
        <div draggable onDragStart={(event) => onDragStart(event, 'database')} className='service'>
          <p>DATABASE</p>
        </div>
      </div>
    </div>
  );
};

export default MicroServices;