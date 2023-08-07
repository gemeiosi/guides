import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getGuides } from '../services/GuideService';
import "../App.css";

const Guides = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
   let mounted = true;
   getGuides()
     .then(data => {
       if(mounted) {
         setGuides(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Registration No</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {guides.map((gui) =>
            <tr key={gui.id}>
                <td>{gui.guideId}</td>
                <td>{gui.FirstName}</td>
                <td>{gui.LastName}</td>
                <td>{gui.RegistrationNo}</td>
                <td>{gui.Email}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Guides;