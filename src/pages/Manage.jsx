import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editEmpAPI, singleEmpAPI } from '../api/allApi';
import { toast } from 'react-toastify';

function Manage() {
    const navigate=useNavigate()
    const { id } = useParams()

    const [employee, setEmployee] = useState({
        username: "",
        email: "",
        dept: "",
        salary: ""
    })
    // console.log(employee);


    const Employee = async () => {
        const res = await singleEmpAPI(id)
        // console.log(res.data.data);
        setEmployee(res.data.data)

    }

    const updateEmployee = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
    }

    const handleUpadate = async (e) => {
        e.preventDefault()
        const res = await editEmpAPI(id, employee)
        console.log(res);
        if(res.status==201){
            toast.success("Employee updated successfully")
            navigate('/')
        }
        
    }

    useEffect(() => {
        Employee(id)
    }, [id])
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6">

                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white py-3">
                            <h4 className="mb-0 text-center">Edit Employee</h4>
                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleUpadate}>

                                {/* Employee Name */}
                                <div className="mb-3">
                                    <label className="form-label">Employee Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter employee name"
                                        value={employee.username}
                                        name='username'
                                        onChange={(e) => updateEmployee(e)}
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email address"
                                        value={employee.email}
                                        name='email'
                                        onChange={(e) => updateEmployee(e)}
                                    />
                                </div>

                                {/* Department */}
                                <div className="mb-3">
                                    <label className="form-label">Department</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Enter department'
                                        value={employee.dept}
                                        name='dept'
                                        onChange={(e) => updateEmployee(e)}
                                    />
                                </div>

                                {/* Salary */}
                                <div className="mb-4">
                                    <label className="form-label">Salary</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter salary"
                                        value={employee.salary}
                                        name='salary'
                                        onChange={(e) => updateEmployee(e)}
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary">
                                        Cancel
                                    </button>

                                    <button type="submit" className="btn btn-primary">
                                        Update Employee
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Manage;