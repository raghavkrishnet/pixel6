import React from 'react';
import { Link } from 'react-router-dom';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

const Header = () => {
    return (
        <header className="bg-dark py-3">
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link  style={{color: "#fff"}} className="nav-link" to="/" element={CustomerForm}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color: "#fff"}} className="nav-link" to="/add-customer" element={CustomerForm}>Add Customer</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color: "#fff"}} className="nav-link" to="/customer-list" element={CustomerList}>Customer List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
