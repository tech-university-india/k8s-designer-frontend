import React, { useCallback } from 'react';
import './MainDashboard.css';
import { Header } from '../../components';
import SimpleFloatingEdge from './SimpleFloatingEdge';
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  ConnectionMode,
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode from './CustomNode';

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  floating: SimpleFloatingEdge,
};

const MainDashboard = () => {
  const [microservice, , onMicroserviceChange] = useNodesState([
    { 
      id: '1',
      label: 'frontend', 
      position: { x: 100, y: 50 },
      data: { label: 'FRONTEND' },
      type: 'custom',
    }, 
    { 
      id: '2',
      label: 'backend', 
      position: { x: 100, y: 200 },
      data: { label: 'BACKEND' },
      type: 'custom',
    }, 
    { 
      id: '3',
      label: 'database', 
      position: { x: 100, y: 350 },
      data: { label: 'DATABASE' },
      type: 'custom',
    }
  ]); 
  // const [ dashboard, setDashboard, onDashboardChange ] = useNodesState([]);

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, type: 'floating' }, eds)
      ),
    []
  );
  
  return (
    <div className='maindashboard'>
      <Header />
      <div className='dashboard_service'>
        <ReactFlow
          nodes={microservice}
          edges={edges}
          onNodesChange={onMicroserviceChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          fitViewOptions={ { padding: 4 } }
          connectionMode={ConnectionMode.Loose}
        >
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default MainDashboard;