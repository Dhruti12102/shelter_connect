import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/auth/login", formData);
            alert(res.data.msg || "Login Successfull");
            let user = {
                _id: res.data.user?._id,
                token: res.data.token,
                userRole: res.data.user.role,
            }

            localStorage.setItem("  ", JSON.stringify(user));
            navigate("/stafftable");
        } catch (error) {
            alert(error.response?.data?.msg || "Login failed");
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-gradient" style={{ width: "1421px" }}>
            <div className="card shadow-lg border-0 rounded-4 d-flex flex-row overflow-hidden" style={{ width: "1335px" }}>
                {/* Left Section (Image) */}
                <div className="col-md-6" style={{ height: "604px" }}>
                    <img
                        src="../../public/img/shelter-connect.jpg"  // Replace with your image path
                        alt="Shoe"
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {/* Right Section (Form) */}
                <div className="col-md-6 p-5 bg-white">
                    <div className="d-flex justify-content-end mb-3" style={{ width: "572px" }}>
                        <Link to='/login' className="btn btn-light me-2">Sign In</Link>
                        <Link to='/register' className="btn btn-primary">Register</Link>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <input type="email" className="form-control" name="email" placeholder="E-mail" onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required />
                        </div>
                        <div className="form-check mb-4">
                            <input type="checkbox" className="form-check-input" id="terms" required />
                            <label className="form-check-label" htmlFor="terms">
                                Not a Robot
                            </label>
                        </div>
                        <button className="btn btn-primary w-100">Sign In</button>
                    </form>
                    <p className="text-center mt-3 text-muted">
                        Don't have an account? <Link to='/register'>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;









// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/Login.css';
// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:3000/api/auth/login", formData);
//             alert(res.data.msg || "Login Successfull");
//             let user = {
//                 _id: res.data.user?._id,
//                 token: res.data.token
//             }

//             localStorage.setItem("user", JSON.stringify(user));
//             navigate("/layout");
//         } catch (error) {
//             alert(error.response?.data?.msg || "Login failed");
//         }
//     };

//     return (
//         <div>
//             <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
//                 <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
//                     <h2 className='mb-3 text-primary'>Login</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                 <strong>Email Id</strong>
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Enter Email"
//                                 className="form-control"
//                                 id="exampleInputEmail1"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3 text-start">
//                             <label htmlFor="exampleInputPassword1" className="form-label">
//                                 <strong>Password</strong>
//                             </label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Enter Password"
//                                 className="form-control"
//                                 id="exampleInputPassword1"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">Login</button>
//                     </form>
//                     {/* TO add ' appostopee */}
//                     <p className='container my-2'>Don&apos;t have an account?</p>
//                     <Link to='/register' className="btn btn-secondary">Register</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
