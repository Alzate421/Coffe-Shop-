import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import { manageEmployees } from '../../data/manageEmployees';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const saveEmployees = () => {
    const newEmployee = {
      id: Math.floor(Math.random() * 1000),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      age: faker.datatype.number({ min: 18, max: 65 }),
      phone: faker.phone.number('3##-####-###')
    };
    manageEmployees.save(newEmployee);
    setEmployees(manageEmployees.getAll());
  };

  const deleteEmployee = (id) => {
    manageEmployees.deleteById(id);
    setEmployees(manageEmployees.getAll());
  };

  useEffect(() => {
    setEmployees(manageEmployees.getAll());
  }, []);

  return (
    <Container><br />
      <h5 className="mb-3">Welcome! In this section you will see the list of employees of our cafeteria.
        Here you will find information about each of them, such as their name, email and work phone number.
        If you want to add a new employee to our team, just click the button =
        <Button onClick={() => saveEmployees()}>Add New Employee</Button></h5>
      {employees.length > 0 ? (
        <Row>
          <Col>
            <h2 className="mb-3">Our Employees</h2>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.age}</td>
                    <td>{employee.phone}</td>
                    <td><Button variant="danger" onClick={() => deleteEmployee(employee.id)}>Delete</Button></td>
                    <td><Button variant="warning" >Edit</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      ) : (
        <p>No employees found</p>
      )}
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </Container>
  );
}

export default EmployeeList;
