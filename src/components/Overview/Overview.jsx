// import React from 'react';
// import Gauge from './Guage';

// const Overview = ({ totalAlerts, uniqueSourceIPs, uniqueDestinationPorts }) => (
//   <div>
//     <h2>Overview</h2>
//     <p>Total Alerts: <Gauge value={totalAlerts} /></p>
//     <p>Unique Source IPs: <Gauge value={uniqueSourceIPs} /></p>
//     <p>Unique Destination Ports: <Gauge value={uniqueDestinationPorts} /></p>
//   </div>
// );

// export default Overview;

import React from 'react';
import Gauge from './Guage';
import './style.css'

const Overview = ({ data,label}) => (
  <div className='overview-card'>
    <h3>{label}</h3>
    <p> <Gauge value={data} /></p>  
  </div>
);

export default Overview;



