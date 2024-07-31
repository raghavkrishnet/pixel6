import React, { useEffect, useState } from 'react';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
        setCustomers(savedCustomers);
        console.log(savedCustomers);
    }, []);

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%'
    };

    const cellStyle = {
        border: '1px solid black',
        padding: '8px'
    };

    const headerStyle = {
        border: '1px solid black',
        padding: '8px',
        backgroundColor: '#f2f2f2'
    };

    return (
        <div>
            <h1>Customer List</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={headerStyle}>PAN</th>
                        <th style={headerStyle}>Full Name</th>
                        <th style={headerStyle}>Email</th>
                        <th style={headerStyle}>Mobile</th>
                        <th style={headerStyle}>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((item, index) => (
                        <tr key={index}>
                            <td style={cellStyle}>{item.pan}</td>
                            <td style={cellStyle}>{item.fullName}</td>
                            <td style={cellStyle}>{item.email}</td>
                            <td style={cellStyle}>{item.mobile}</td>
                            <td style={cellStyle}>
                                {item.addresses.map((addr, addrIndex) => (
                                    <div key={addrIndex}>
                                        {addr.addressLine1} {addr.addressLine2}, {addr.city}, {addr.state}, {addr.postcode}
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerList;
