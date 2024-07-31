import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerForm.css';

const CustomerForm = () => {
  const [pan, setPan] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [addresses, setAddresses] = useState([{ addressLine1: '', addressLine2: '', postcode: '', state: '', city: '' }]);

  const handleAddressChange = (index, event) => {
    const newAddresses = addresses.map((address, addrIndex) => {
      if (index === addrIndex) {
        return { ...address, [event.target.name]: event.target.value };
      }
      return address;
    });
    setAddresses(newAddresses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = { id: Date.now(), pan, fullName, email, mobile, addresses };
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    customers.push(newCustomer);
    localStorage.setItem('customers', JSON.stringify(customers));

    setPan('');
    setFullName('');
    setEmail('');
    setMobile('');
    setAddresses([{ addressLine1: '', addressLine2: '', postcode: '', state: '', city: '' }]);
    // Redirect or perform other actions here if needed
  };

  return (
    <div className="s2 main-container">
      <form onSubmit={handleSubmit}>
        <label>PAN:</label>
        <input type="text" className="input-field" value={pan} onChange={(e) => setPan(e.target.value)} placeholder='Enter PAN' required maxLength="10" />

        <label>Full Name:</label>
        <input type="text" className="input-field" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Enter Name' required maxLength="140" />

        <label>Email:</label>
        <input type="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required maxLength="255" />

        <label>Mobile Number:</label>
        <input type="text" className="input-field" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+91" required maxLength="10" />

        {addresses.map((address, index) => (
          <div key={index}>
            <label>Address Line 1:</label>
            <input type="text" className="input-field" name="addressLine1" value={address.addressLine1} onChange={(e) => handleAddressChange(index, e)} required />

            <label>Address Line 2:</label>
            <input type="text" className="input-field" name="addressLine2" value={address.addressLine2} onChange={(e) => handleAddressChange(index, e)} />
            
            <label>Postcode:</label>
            <input type="text" className="input-field" name="postcode" value={address.postcode} onChange={(e) => handleAddressChange(index, e)} required maxLength="6" />
            
            <label>State:</label>
            <input type="text" className="input-field" name="state" value={address.state} onChange={(e) => handleAddressChange(index, e)} />
            
            <label>City:</label>
            <input type="text" className="input-field" name="city" value={address.city} onChange={(e) => handleAddressChange(index, e)} />
          </div>
        ))}
        <button type="submit" className="btn btn-primary submit">Save Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
