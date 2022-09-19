import React from 'react'
import favicon from './favicon.ico'
import {useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


const ContactDetails = (props) => {
    const LSK = 'ContactList'
    const params = useParams()
    const data = JSON.parse(localStorage.getItem(LSK))
    const navigate = useNavigate()
    let obj = data[params.id]
    if (!obj) { 
        return 
    }
    
    const { name , mail } = obj
    
    
  return (
    <div> 
        <h3>{name}</h3>
        <h5>{mail}</h5>
    </div>
    
  )
}

export default ContactDetails