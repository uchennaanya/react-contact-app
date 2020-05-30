import React from "react";
import "./style.css";
import { useState } from 'react';

const App = () => {
    
    const [contacts, setContacts] = useState([]);
    
    fetch("https://randomuser.me/api/?results=4")
    .then(response => response.json())
    .then(data => {
        
//        console.log(data)
        setContacts(data.results);
    })
    return (
        
        <>
        {contacts.map(contact => (
         
          <ContactCard
            avatar={contact.picture.large}
            name={contact.name.first + " " + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
          />
        
        ))}

        </>  
    )
}

const ContactCard = props => {
    
    const [showAge, setShowAge] = useState(false);
    
    return (
      
        <div className="contact-card">
          <img src={props.avatar} alt="profile" />
          <div className="user-details">
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            { showAge && <p> Age: {props.age} </p> }
            <button onClick={() => setShowAge(!showAge)}> Toggle Age </button>
          </div>
        </div> 
    );     
};
export default App;