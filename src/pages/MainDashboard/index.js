import React, { useState, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './MainDashboard.css';
import { Header, MicroServices, Configuration } from '../../components';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
} from 'reactflow';

import 'reactflow/dist/style.css';
import { CustomNode } from '../../utils';

const nodeTypes = {
  microservice: CustomNode,
};

const MainDashboard = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [service,setService] = React.useState();

  const onNodeClick = useCallback((event, node) => {
    setService(node.data.label);
  }, []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, type: 'microserice' }, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      const name = event.dataTransfer.getData('nameOfNode');
      setService(name.toUpperCase());
      console.log(type);
      console.log(name);

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: uuidv4(),
        type,
        position,
        data: { label: name.toUpperCase() },
      };
      setNodes((nds) => {return  [...nds, newNode];});
    },
    [reactFlowInstance]
  );
  return (
    <div className='main-dashboard'>
      <Header />
      <div className='dashboard-service' ref={reactFlowWrapper}>
        <MicroServices />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          fitViewOptions={ { padding: 4 } }
          connectionMode="loose"
        >
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      
        <div className='config-body'>
          <div className='config-element-border'>CONFIGURATION</div>
          {service !==undefined &&  <Configuration service = {service} />}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;