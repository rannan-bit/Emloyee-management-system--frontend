import React from 'react'
import { useState } from 'react'
import { addEmpAPI } from '../api/allApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Add() {
    const navigate = useNavigate()
    const [employee, setEmployee] = useState({
        username: "",
        email: "",
        dept: "",
        salary: ""
    })

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(employee);
        const result = await addEmpAPI(employee)
        console.log(result);
        if (result.status == 201) {
            toast.success(result.data.message)
            navigate('/')
        }
    }

    const resetForm = () => {
        setEmployee({
            username: "",
            email: "",
            dept: "",
            salary: ""
        })
    }
    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white text-center py-3">
                            <h3 className="mb-0">Add Employee</h3>
                            <small>Enter employee details below</small>
                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                {/* Employee Name */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Employee Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder="Enter employee name"
                                        value={employee.username}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter email address"
                                        value={employee.email}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                {/* Department */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Department
                                    </label>

                                    <input
                                        type="text"
                                        className='form-control'
                                        name='dept'
                                        placeholder='Enter department'
                                        value={employee.dept}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                {/* Salary */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Salary (₹)
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="salary"
                                        placeholder="Enter salary"
                                        value={employee.salary}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="d-flex gap-2">

                                    <button
                                        onClick={resetForm}
                                        type="reset"
                                        className="btn btn-outline-secondary w-50"
                                    >
                                        Clear
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-50"
                                    >
                                        Add Employee
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

export default Add