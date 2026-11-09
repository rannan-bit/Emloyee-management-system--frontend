import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { allEmpAPI, dltEmpAPI } from '../api/allApi'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function Home() {
    const [empList, setEmpList] = useState([])
    // console.log(empList);

    const deleteEmp = async (id) => {
        const res = await dltEmpAPI(id)
        console.log(res);

        if (res.status == 201) {
            setEmpList(empList.filter((emp) => emp._id !== id))
            toast.error("Employee deleted successfully");
            getEmp()

        }
    }



    const getEmp = async () => {
        const res = await allEmpAPI()
        setEmpList(res.data.data)

    }

    useEffect(() => {
        getEmp()
    }, [])
    return (
        <div className="container mt-4">

            <h2 className="text-center text-primary fw-bold mb-4">
                EMPLOYEE DETAILS
            </h2>

            <div className="d-flex justify-content-end mb-3">
                <Link to="/add-employee" className="btn btn-primary">
                    + Add Employee
                </Link>
            </div>

            <div className="table-responsive shadow-sm rounded">

                <table className="table table-hover table-bordered align-middle mb-0">

                    <thead className="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    {
                        empList?.length > 0 ?
                            empList?.map((emp, index) =>
                                <tbody>

                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{emp.username}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.dept}</td>
                                        <td>₹{emp.salary}</td>
                                        <td className="text-center">
                                            <Link to={`/manage/${emp._id}`}><button className="btn btn-warning btn-sm me-2">
                                                Edit
                                            </button></Link>
                                            <button onClick={() => deleteEmp(emp._id)} className="btn btn-danger btn-sm">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            )
                            :
                            <h4 className='text-center p-3 m-3 text-warning'>Users not found</h4>
                    }



                </table>
                
            </div>

        </div>

    )
}

export default Home