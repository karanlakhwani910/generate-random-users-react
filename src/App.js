import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Button } from "react-bootstrap";

import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    setUsers([])
    for (let i = 0; i < 10; i++) {
      fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((json) => {
          setUsers((users) => [...users, json]);
        });
    }
  };
  

  return (
    <Container className="container">
      <div className="text-center">
        <Button variant="dark" onClick={getUsers}>
          Generate Users
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          
          {
            users.map((user)=>{
              return(
                <tr key={user.info.seed}>
                  <td>{user.results[0].name.first}</td>
                  <td>{user.results[0].name.last}</td>
                  <td>{user.results[0].email}</td>    
                  <td>{user.results[0].phone}</td>              
                </tr>
              )
            })
          }
          
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
