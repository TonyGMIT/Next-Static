
import React from 'react';
import GaugeChart from 'react-gauge-chart'

function Gauge() 
{
  return (
    <div>  
      <GaugeChart id="gauge-chart2" 
      nrOfLevels={30} 
      arcWidth={0.2}
      colors={['#5e5e5e',]}
      textColor={['#ffffff']}
      needleColor={['#ff0000']}
      needleBaseColor={['#ff0000']}
      percent={10.1/100} 
      formatTextValue={value => value + 'hr'}
      />
    </div>
  );
}
  
  export default Gauge;