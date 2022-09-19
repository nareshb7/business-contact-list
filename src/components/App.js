import React from 'react';
import AddContact from './AddContact';
import {Route, Routes } from 'react-router-dom'
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import { useState, useEffect } from 'react'
import ContactDetails from './ContactDetail';


function App() {
  const LSK = 'ContactList'
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  }
  const removeContact = (id) => {
    let cnfrm = window.confirm(`Do u want to delte this contact`)
    if (cnfrm){
      const newContacts = contacts.filter((contact, idx) => {
        return idx !== id;
      })
      setContacts(newContacts)
    }
    
    
    
  }

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem(LSK))
    if (getData) setContacts(getData)
  }, []);

  useEffect(() => {
    localStorage.setItem(LSK, JSON.stringify(contacts))
  }, [contacts])


  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='add' element={<AddContact  addContactHandler={addContactHandler}/>} />
        <Route path='/' element={ <ContactList contact={contacts} getContactId={removeContact}  />} />
        <Route  path='contact-details/:id' element={<ContactDetails /> }/>

      </Routes>
      
        
        {/* <AddContact  addContactHandler={addContactHandler}/>
        <ContactList contact={contacts} getContactId={removeContact}  /> */}
        
{/*         
          <Route path='/' exact render ={(props)=> (
            <ContactList {...props} contact={contacts} getContactId={removeContact}  />
          )}>
          </Route>
          <Route path='/add' render={(props)=> (
            <AddContact {...props} addContactHandler={addContactHandler}/>
          )}>
      
          </Route> */}
          
        
      

    </div>
  );
}

export default App;
