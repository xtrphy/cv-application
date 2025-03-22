import '../styles/Main.css'
import '../styles/General.css'
import { useState } from 'react';

export default function General() {
  const [firstName, setFirstName] = useState('Your name');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  return (
    <div className='general'>
      <div className='left-side'>

        <label className='firstNameLabel label' htmlFor="firstName">First Name</label>
        <input className='input firstNameInput' name='firstName' onChange={handleFirstNameChange} type="text" />

        <label className='lastNameLabel label' htmlFor="lastName">Last Name</label>
        <input className='input lastNameInput' name='lastName' onChange={handleLastNameChange} type="text" />

        <label className='emailLabel label' htmlFor="emailLabel">Email</label>
        <input className='input emailInput' name='emailLabel' onChange={handleEmailChange} type="email" />

        <label className='phoneNumberLabel label' htmlFor="emailLabel">Phone Number</label>
        <input className='input emailInput' name='emailLabel' onChange={handlePhoneNumberChange} type="text" />

      </div>

      <div className="right-side">

        <h1>{fullName}</h1>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>

      </div>
    </div>
  );
}