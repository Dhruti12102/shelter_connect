import React, { useState } from 'react'
import axios from "axios";
// import { set } from 'mongoose';
import { Toast } from 'bootstrap';
export default function Adduser() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
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
            const adduser = await axios.post('http://localhost:3000/api/auth/usertable', value);
            alert('./Table.jsx');
            const response = adduser.data
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
                                    <label>Name</label>
                                    <input type='text' className='form-control' name='name' value={value.name} onChange={handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input type='email' className='form-control' name='email' value={value.email} onChange={handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <input type='password' className='form-control' name='password' value={value.password} onChange={handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Phone</label>
                                    <input type='text' className='form-control' name='phone' value={value.phone} onChange={handleChange}></input>
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
