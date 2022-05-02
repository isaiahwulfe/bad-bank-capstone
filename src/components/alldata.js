import React, { useContext } from 'react';
import { UserContext } from './context.js';
import Table from 'react-bootstrap/Table'
import TripleFrame from './tripleFrame.js';
import MyCard from './myCard';

function AllData(){
  const ctx = useContext(UserContext);

  const allTable = () => {
    return ctx.users.map((e, i) => {
      return (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.password}</td>
            <td>{e.balance}</td>
        </tr>
      )
    })
}

  return (
    <TripleFrame
      center={<MyCard
        bgcolor="dark"
        header="All Data"
        title="The Data For Every User"
        text="Here you can see the login and balance data for each user"
        body={
          <Table striped bordered variant='dark' responsive="lg">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
                {allTable()}
            </tbody>  
          </Table>
        }
        />
      }
    />
  );
}

export default AllData;