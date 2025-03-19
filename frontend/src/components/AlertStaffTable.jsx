import React, { useState } from 'react'
import axios from "axios";
// import { set } from 'mongoose';
import { Toast } from 'bootstrap';
export default function AlertStaffTable() {
    const [value, setValue] = useState({
        jobTitle: "",
        Type: "",
        username: "",
        phone: "",
        gender: "",
        email: "",
        rsl_email: "",
    })
    // const navigate = useNavigate();
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const addstaff = await axios.post('http://localhost:3000/api/auth/addstaff', value);
            // alert('./Table.jsx');
            const response = addstaff.data
            if (response.success) {
                Toast.success(response.message)
            }
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Staff</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className='form-group'>
                                    <label>Job Title</label>
                                    <input type='text' className='form-control' name='jobtitle' value={value.jobTitle} onChange={handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Type</label>
                                    <input type='text' className='form-control' name='Type' value={value.Type} onChange={handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label>userName</label>
                                    <input type='text' className='form-control' name='username' value={value.username} onChange={handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Phone</label>
                                    <input type='text' className='form-control' name='phone' value={value.phone} onChange={handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Gender</label>
                                    <input type='text' className='form-control' name='gender' value={value.gender} onChange={handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input type='email' className='form-control' name='email' value={value.email} onChange={handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Rsl_Email</label>
                                    <input type='email' className='form-control' name='rsl_email' value={value.rsl_email} onChange={handleChange}></input>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
