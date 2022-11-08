import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import AddButtons from '../Addbuttons';
import { v4 as uuidv4 } from "uuid";
import Form from 'react-bootstrap/Form';

const AddQualification = () => {
    const [AddQualification, setAddQualification] = useState(false);
    const [formData, setFormData] = useState({
      awards: '',
      cOrganization: '',
      summary: '',
      startDate: '',
    })
    const [list, setList] = useState([])
    const [editVisible, setEditVisible] = useState(false)
    const [isEdit, setIsEdit] = useState(false);
  
  
    const hundleAddQualification = () =>{
      setAddQualification(true)
    }
    const handleOnCancel = () =>{
      setAddQualification(false)
    }
    const onChange = (e) =>{
       setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleOnSave = (e) =>{
      e.preventDefault()
      setAddQualification(false)
      const params = {
        ...formData,
        id: uuidv4(),
      }
      setFormData({
        awards: '',
        cOrganization: '',
        summary: '',
        startDate: '',
        endDate: '',
      })
      if(isEdit){
        setList(list.map((a) => (a.id === formData.id ? formData : a)))
      }else{
      setList([...list, params])
      }
      setIsEdit(false)
    }
  
    const handleOndots = () =>{
      setEditVisible(true)
    }
    const handleOnEdit = (data) =>{
      setFormData(data)
      setIsEdit(true)
      setAddQualification(true)
      
    }
    const handleOnDelete = (data) =>{
      setList(list.filter((a)=> a.id !== data.id))
    }
  
    return (
       <div className='container'>
      {!AddQualification ?  <AddButtons title={'Qualifications'} btnText={'Add Qualifications'} onClick={hundleAddQualification}/>:
      <Form onSubmit={handleOnSave}>
        
        <h2>Exprience</h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Professional Certificate or Award</Form.Label>
            <Form.Control type="text" placeholder="Enter Professional Certificate or Award" name='awards' onChange={onChange} 
            value={formData.awards} required/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Conferring Organization</Form.Label>
            <Form.Control type="text" placeholder="Company Conferring Organization" name='cOrganization' onChange={onChange} value={formData.cOrganization} required/>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Summary</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Describe your qualification" name='summary' onChange={onChange} value={formData.summary} required/>
        </Form.Group>
        <Row className="mb-3">
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Start Date</Form.Label>
          <Form.Control type='date' name='startDate' onChange={onChange} value={formData.startDate} required/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">

          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
          </Form.Group>
        </Row>
        <Button variant="primary" type="button" onClick={handleOnCancel}>
          Cencle
        </Button>
        <Button variant="primary" type="submit" className='mx-2'>
          {isEdit ?   'update' : 'Save'}
        </Button>
      </Form>}
      <hr />
      {list.map((data, index)=>{
        return(
         <div className='d-flex justify-content-between' key={index}>
          <div>
          <h6>{data.awards}</h6>
          <h6>{data.cOrganization}</h6>
          <h6>{data.startDate} to {data.endDate}</h6>
          <p>{data.summary}</p>
          </div>
          <div>
            {!editVisible ?
            <button className='bg-white border-0' onClick={handleOndots}>...</button>:
            <div className='border-1 d-flex flex-column'>
        <Button variant="none"  type="button" className='text-primary' onClick={() =>handleOnDelete(data)}>
          Delete
        </Button>
        <Button variant="none" type="button" className='text-primary' onClick={()=>handleOnEdit(data)}>
          Edit
        </Button>
            </div>}
          </div>
        </div>
        )
      })}
      </div>
  )
}

export default AddQualification