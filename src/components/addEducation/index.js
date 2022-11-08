import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { v4 as uuidv4 } from "uuid";
import AddButtons from '../Addbuttons';


const AddEducation = () => {

  const [addEducation, setAddEducation] = useState(false);
  const [formData, setFormData] = useState({
    countery: '',
    uni: '',
    degree: '',
    startDate: '',
    endDate: '',
  })
  const [list, setList] = useState([])
  const [editVisible, setEditVisible] = useState(false)
  const [isEdit, setIsEdit] = useState(false);


  const hundleAddEducation = () =>{
    setAddEducation(true)
  }
  const handleOnCancel = () =>{
    setAddEducation(false)
  }
  const onChange = (e) =>{
     setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleOnSave = (e) =>{
    e.preventDefault()
    setAddEducation(false)
    const params = {
      ...formData,
      id: uuidv4(),
    }
    setFormData({
      countery: '',
      uni: '',
      degree: '',
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
    setAddEducation(true)
    
  }
  const handleOnDelete = (data) =>{
    setList(list.filter((a)=> a.id !== data.id))
  }

  return (
     <div className='container'>
    {!addEducation ?  <AddButtons title={'Education'} btnText={'Add Education'} onClick={hundleAddEducation}/>:
    <Form onSubmit={handleOnSave}>
      
      <h3>Education</h3>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Countery</Form.Label>
          <Form.Control type="text" placeholder="Select Countery" name='countery' onChange={onChange} 
          value={formData.countery} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Univercity/College</Form.Label>
          <Form.Control type="text" placeholder="Select Univercity/College" name='uni' onChange={onChange} value={formData.uni} required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Degree</Form.Label>
        <Form.Control placeholder="Enter your Degree" name='degree' onChange={onChange} value={formData.degree} required/>
      </Form.Group>
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Start Date</Form.Label>
        <Form.Control type='date' name='startDate' onChange={onChange} value={formData.startDate} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>End Date</Form.Label>
          <Form.Control type='date' name='endDate' onChange={onChange} value={formData.endDate} required/>
          {/* <input type="text" placeholder='sdahfjkhdk' required /> */}
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
        <h6>{data.degree}</h6>
        <h6>{data.uni}, {data.countery}</h6>
        <h6>{data.startDate} to {data.endDate}</h6>
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

export default AddEducation
