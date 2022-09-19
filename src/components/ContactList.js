import React from 'react'
import ContactCard from './ContactCard'
import {Link } from 'react-router-dom'

const ContactList = ({contact, getContactId}) => {

    const deleteContact =(id)=> {
        getContactId(id)
    }
   
  return (
    <div><h3>ContactList <Link to='/add'><button> Add Contact</button></Link> </h3> 
        {
            contact.map( (c, i) => {
                return (
                    <ContactCard key={i} contact={c} index={i}  clickHandler ={deleteContact}/>
                )
            })
        }
    
    </div>
  )
}

export default ContactList