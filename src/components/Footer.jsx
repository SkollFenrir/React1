import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

const Footer = (props) => {
  return (
    <div className='Footer'>
        <h4>{props.footer1}</h4>
        <Badge>{props.footer2}</Badge>
    </div>
  )
}

export default Footer