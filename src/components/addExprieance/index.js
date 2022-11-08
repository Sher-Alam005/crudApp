import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import AddButtons from '../Addbuttons';
import { v4 as uuidv4 } from "uuid";
import Form from 'react-bootstrap/Form';


const Exprience = () => {
    const [addExprience, setAddExprience] = useState(false);
    const [formData, setFormData] = useState({
      title: '',
      company: '',
      summary: '',
      startDate: '',
      endDate: '',
    })
    const [list, setList] = useState([])
    const [editVisible, setEditVisible] = useState(false)
    const [isEdit, setIsEdit] = useState(false);
  
  
    const hundleAddExprience = () =>{
      setAddExprience(true)
    }
    const handleOnCancel = () =>{
      setAddExprience(false)
    }
    const onChange = (e) =>{
       setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleOnSave = (e) =>{
      e.preventDefault()
      setAddExprience(false)
      const params = {
        ...formData,
        id: uuidv4(),
      }
      setFormData({
        title: '',
        company: '',
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
      setAddExprience(true)
      
    }
    const handleOnDelete = (data) =>{
      setList(list.filter((a)=> a.id !== data.id))
    }
  
    return (
       <div className='container'>
      {!addExprience ?  <AddButtons title={'Exprience'} btnText={'Add Exprience'} onClick={hundleAddExprience}/>:
      <Form onSubmit={handleOnSave}>
        
        <h2>Exprience</h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter your work title" name='title' onChange={onChange} 
            value={formData.title} required/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Company Name" name='company' onChange={onChange} value={formData.company} required/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Start Date</Form.Label>
          <Form.Control type='date' name='startDate' onChange={onChange} value={formData.startDate} required/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>End Date</Form.Label>
            <Form.Control type='date' name='endDate' onChange={onChange} value={formData.endDate} required/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
          </Form.Group>
        </Row>
        {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={" I'm currently working here "}
          />
        </div>
      ))}
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Summary</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Describe your Work Exprience" name='summary' onChange={onChange} value={formData.summary} required/>
        </Form.Group>
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
          <h6>{data.title}</h6>
          <h6>{data.company}</h6>
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

export default Exprience