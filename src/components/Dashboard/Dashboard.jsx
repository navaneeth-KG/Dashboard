import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from '../Overview/Overview.jsx';
import BarChart from '../BarChart/BarChart.jsx';
import PieChart from '../PieChart/PieChart.jsx';
import AlertTable from '../AlertTable/AlertTable.jsx';
import DoughnutChart from '../DoughnutChart/DoughnutChart.jsx';
import RechartsRadarChart from '../LineChart/LineChart.jsx';
import LineChartComponent from './../TimeSeriesChart/TimeSeriesChart';


import './style.css';


const Dashboard = () => {
  const [totalAlerts, setTotalAlerts] = useState(0);
  const [uniqueSourceIPs, setUniqueSourceIPs] = useState(0);
  const [uniqueDestinationPorts, setUniqueDestinationPorts] = useState(0);
  const [alertsBySourceIP, setAlertsBySourceIP] = useState([]);
  const [topSourceIPs, setTopSourceIPs] = useState([]);
  const [topDestinationPorts, setTopDestinationPorts] = useState([]);
  const [severityDistribution, setSeverityDistribution] = useState([]);
  const [categoryDistribution, setCategoryDistribution] = useState([]);

  const [alertDetails, setAlertDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://dashboardbk.onrender.com/dashboard'
        );
        setTotalAlerts(res.data.totalAlerts);
        setUniqueSourceIPs(res.data.uniqueSourceIPs);
        setUniqueDestinationPorts(res.data.uniqueDestinationPorts);
        setTopSourceIPs(res.data.topSourceIPs);
        setTopDestinationPorts(res.data.topDestinationPorts);
        setSeverityDistribution(res.data.severityDistribution);
        setCategoryDistribution(res.data.categoryDistribution);
        setAlertDetails(res.data.alertDetails);
        setAlertsBySourceIP(res.data.alertsBySourceIP);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1 style={{ color: 'wheat' }}>dashboard</h1>
      <div className="dashboard-header">
        <Overview data={totalAlerts} label="Total alerts" />
        <Overview data={uniqueSourceIPs} label="Unique source IPs" />
        <Overview
          data={uniqueDestinationPorts}
          label="Unique destination ports"
        />
      </div>
      <div className="dashboard-main">
        <div className="item1">
          <BarChart data={topSourceIPs} title="Top Source IPs" />
        </div>
        <div className="item-2">
          <DoughnutChart data={categoryDistribution} />
        </div>
        <div className="item-3">
          <PieChart data={severityDistribution} />
        </div>
        <div className="item-4">
          <RechartsRadarChart
            data={topDestinationPorts}
            title="Top Destination Ports"
          />
        </div>
        <div className="item-5">
          <LineChartComponent data={alertsBySourceIP} />
        </div>
      </div>

      {/* <BarChart data={topDestinationPorts} title="Top Destination Ports" /> */}

      {/* <AlertTable data={alertDetails} /> */}
    </div>
  );
};

export default Dashboard;
