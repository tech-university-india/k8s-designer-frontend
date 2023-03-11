import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

// eslint-disable-next-line react/display-name, react/prop-types
export default memo(({ data }) => {
  return (
    <div style={{'height': '100px', 'width': '300px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'border': '5px solid rgb(79, 33, 198)', 'borderRadius': '10px', 'backgroundColor':'white', 'fontSize': '30px', 'color': 'rgb(79, 33, 198)'}}>
      <Handle type="source" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
      {
        // eslint-disable-next-line react/prop-types
        data.label
      }
      <Handle type="source" position={Position.Bottom} id="c" />
      <Handle type="source" position={Position.Left} id="d" />
    </div>
  );
});
