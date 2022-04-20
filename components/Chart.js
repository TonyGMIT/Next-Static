import React from 'react';
import Plot from 'react-plotly.js';

function Chart() 
{
  return (
    <div className="chartBox">
    <Plot 
      data={[
        {
          x: ['Pycharm', 'Chrome', 'VS Code', 'File Navigation', 'Games', 'Discord', 'Teams'],
          y: [2.2, 1.4, 2.5, 0.2, 2.5, 0.8, 0.5],
          marker: {color: 'red'}
        }
      ]}
      layout={ { width: 635, height: 510, title: 'Mouse Tracker Activity Graph'}}
    />
    </div>
  );
}
  
  export default Chart;