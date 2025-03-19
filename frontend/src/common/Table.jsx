// import '../../../backend/controllers/auth-controller';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Table({ deleteuser, updateuser }) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function FeatchData() {
            try {
                const user = await axios.get('http://localhost:3000/api/auth/getuser')
                const response = user.data
                console.log(response.user)
                setData(response)
            } catch (error) {
                console.log(error)
            }
        }
        FeatchData()
    }, [])

    return (
        <>
            <div className="container">
                <div className="table-wrapper" style={{ width: "1380px" }}>
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Agents</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addAgentModal">
                                    <i className="material-icons">&#xE147;</i> <span>Add New Agent</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>UserName </th>
                                <th>Email </th>
                                <th>Phone </th>
                                <th>Password </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users?.map((elem) => {
                                return (
                                    <tr>
                                        <td>{elem.username}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        <td>{elem.password}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editAgentModal" onClick={() => updateuser(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteAgentModal" onClick={() => deleteuser(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
}