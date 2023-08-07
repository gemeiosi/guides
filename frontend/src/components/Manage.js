import React,{ useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getGuides, deleteGuide } from '../services/GuideService';
import AddGuideModal from "./AddGuideModal";
import UpdateGuideModal from "./UpdateGuideModal";

const Manage = () => {

    const [guides, setGuides] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editGuide, setEditGuide] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);


useEffect(() => {
   let mounted = true;
   if(guides.length && !isUpdated) {
    return;
    }
   getGuides()
     .then(data => {
       if(mounted) {
         setGuides(data);
       }
     })
   return () => {
      mounted = false;
      setIsUpdated(false);
   }
 }, [isUpdated, guides])

 const handleUpdate = (e, gui) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditGuide(gui);
};

const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
};

const handleDelete = (e, guideId) => {
    if(window.confirm('Are you sure ?')){
        e.preventDefault();
        deleteGuide(guideId)
        .then((result)=>{
            alert(result);
            setIsUpdated(true);
        },
        (error)=>{
            alert("Failed to Delete Guide");
        })
    }
};

let AddModelClose=()=>setAddModalShow(false);
let EditModelClose=()=>setEditModalShow(false);
return(
    <div className="container-fluid side-container">
    <div className="row side-row" >
    <p id="manage"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
            <thead>
            <tr>
              <th >ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registration No</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              { guides.map((gui) =>

              <tr key={gui.id}>
              <td>{gui.guideId}</td>
              <td>{gui.FirstName}</td>
              <td>{gui.LastName}</td>
              <td>{gui.RegistrationNo}</td>
              <td>{gui.Email}</td>
              <td>

              <Button className="mr-2" variant="danger"
                onClick={event => handleDelete(event,gui.guideId)}>
                    <RiDeleteBin5Line />
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Button className="mr-2"
                onClick={event => handleUpdate(event,gui)}>
                    <FaEdit />
              </Button>
              <UpdateGuideModal show={editModalShow} guide={editGuide} setUpdated={setIsUpdated}
                          onHide={EditModelClose}></UpdateGuideModal>
            </td>
            </tr>)}
          </tbody>
        </Table>
        <ButtonToolbar>
            <Button variant="primary" onClick={handleAdd}>
            Add Guide
            </Button>
            <AddGuideModal show={addModalShow} setUpdated={setIsUpdated}
            onHide={AddModelClose}></AddGuideModal>
        </ButtonToolbar>
    </div>
    </div>
);
};


export default Manage;