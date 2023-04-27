import React from 'react';
import { Container, Table } from 'react-bootstrap';
import reportData from '../../json/reportData.json';
import './Reports.css';

function Reports() {
  const report = reportData.report[0];

  return (
    <Container>
      <h2 className="mb-4">{report.reportName}</h2>
      <p>Report Date: {report.reportDate}</p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Sales</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {report.salesData.map((product) => (
            <tr key={product.productName}>
              <td>{product.productName}</td>
              <td>{product.sales}</td>
              <td>${product.revenue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total:</td>
            <td>{report.totalSales}</td>
            <td>${report.totalRevenue.toFixed(2)}</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
}

export default Reports;
