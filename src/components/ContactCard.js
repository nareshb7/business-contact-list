import React from 'react'
import favicon from './favicon.ico'
import {Link} from 'react-router-dom'

const ContactCard = (props) => {
    const {name, mail} =props.contact
  return (
    <div style={{display:'flex',justifyContent:'space-evenly', border: '1px solid #888'}}>
        <img width='50px' height='50px' src={favicon} alt='IMg' />
        <div>
            <div>{name}</div>
            <div>{mail}</div>
        </div>
        <div>
            <Link to={{ pathname: `/contact-details/${props.index}`, state:{contact: props.contact} }}> <button> Edit</button></Link>
            <button onClick={()=> props.clickHandler(props.index)}> Delete </button>
        </div>
    </div>
  )
}

export default ContactCard