import React from 'react';

function EmployeeForm({ employee, setEmployee, handleSubmit, mode }) {

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h3>{mode === 'add' ? 'Add Employee' : 'Edit Employee'}</h3>
                        </div>

                        <div className="card-body">

                            <form onSubmit={handleSubmit}>

                                <input
                                    className="form-control mb-3"
                                    type="text"
                                    name="username"
                                    placeholder="Employee Name"
                                    value={employee.username}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    className="form-control mb-3"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={employee.email}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    className="form-control mb-3"
                                    type="text"
                                    name="dept"
                                    placeholder="Department"
                                    value={employee.dept}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    className="form-control mb-3"
                                    type="number"
                                    name="salary"
                                    placeholder="Salary"
                                    value={employee.salary}
                                    onChange={handleChange}
                                    required
                                />

                                <button className="btn btn-primary w-100" type="submit">
                                    {mode === 'add' ? 'Add Employee' : 'Update Employee'}
                                </button>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EmployeeForm;