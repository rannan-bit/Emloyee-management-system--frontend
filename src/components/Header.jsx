import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 shadow-sm"> <div className="container-fluid">


        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
            EMS
        </Link>

        {/* Navigation */}
        <div className="ms-auto d-flex align-items-center gap-4">
            <Link className="nav-link text-white" to="/">
                Home
            </Link>

            <Link className="nav-link text-white" to="/add-employee">
                Add Employee
            </Link>

        </div>

    </div>
    </nav>


    );
}

export default Header;
