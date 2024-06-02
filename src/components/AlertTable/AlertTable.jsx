import React from 'react';

const AlertTable = ({ data }) => (
  <div>
    <h2>Detailed Alerts</h2>
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Source IP</th>
          <th>Source Port</th>
          <th>Destination IP</th>
          <th>Destination Port</th>
          <th>Signature</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {data.map(alert => (
          <tr key={alert._id}>
            <td>{new Date(alert.timestamp).toLocaleString()}</td>
            <td>{alert.src_ip}</td>
            <td>{alert.src_port}</td>
            <td>{alert.dest_ip}</td>
            <td>{alert.dest_port}</td>
            <td>{alert.alert.signature}</td>
            <td>{alert.alert.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AlertTable;
