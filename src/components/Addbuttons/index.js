import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const AddButtons = (props) => {
  return (
    <div className='d-flex justify-content-between py-3'>
        <h3>{props.title}</h3>
        <Button variant="primary" type="submit" onClick={props.onClick}>
        {props.btnText}
      </Button>
      </div>
  )
}

export default AddButtons