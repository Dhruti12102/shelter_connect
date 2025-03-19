import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Register.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/registration", formData);
      // setMessage(response.data.message);
      alert(response.data.message || "Registartion Successfully");
      navigate("/login");
    } catch (error) {
      // console.log(error);
      // setMessage(error.response.data.error || "Registration failed");
      alert(error.response.data.error || "Registration failed");
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
            {/* <div className="mb-3">
              <input type="text" className="form-control" name="company" placeholder="Company Name" onChange={handleChange} required />
            </div> */}
            <div className="mb-3">
              <input type="text" className="form-control" name="username" placeholder="Full Name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="text" name="phone" className="form-control" placeholder="Phone" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" name="email" placeholder="E-mail" onChange={handleChange} required />
            </div>
            {/* <div className="mb-3">
              <input type="text" className="form-control" name="address" placeholder="Address" onChange={handleChange} required />
            </div> */}
            <div className="mb-3">
              <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="terms" required />
              <label className="form-check-label" htmlFor="terms">
                I agree with the <a href="#">terms of service</a>
              </label>
            </div>
            <button className="btn btn-primary w-100">Submit</button>
          </form>
          <p className="text-center mt-3 text-muted">
            Already have an account? <Link to='/login'>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;







// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/Register.css';
// const Register = () => {
//   // console.log(props)
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   // const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/api/auth/registration", formData);
//       // setMessage(response.data.message);
//       alert(response.data.message || "Registartion Successfully");
//       navigate("/login");
//     } catch (error) {
//       // console.log(error);
//       // setMessage(error.response.data.error || "Registration failed");
//       alert(error.response.data.error || "Registration failed");
//     }
//   };

//   return (
//     <div>
//       <>
//         <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
//           <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
//             <h2 className='mb-3 text-primary'>Register</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3 text-start">
//                 <label htmlFor="exampleInputEmail1" className="form-label">
//                   <strong >Name</strong>
//                 </label>
//                 <input type="text" name="username" className="form-control" placeholder="Username" onChange={handleChange} required />
//               </div>
//               <div className="mb-3 text-start">
//                 <label htmlFor="exampleInputEmail1" className="form-label">
//                   <strong>Email Id</strong>
//                 </label>
//                 <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
//               </div>
//               <div className="mb-3 text-start">
//                 <label htmlFor="phoneInput" className="form-label">
//                   <strong>Phone Number</strong>
//                 </label>
//                 <input type="text" name="phone" className="form-control" placeholder="Phone" onChange={handleChange} required />
//               </div>
//               <div className="mb-3 text-start">
//                 <label htmlFor="exampleInputPassword1" className="form-label">
//                   <strong>Password</strong>
//                 </label>
//                 <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
//               </div>
//               <button type="submit" className="btn btn-primary">Register</button>
//             </form>

//             <p className='container my-2'>Already have an account ?</p>
//             <Link to='/login' className="btn btn-secondary">Login</Link>
//           </div>
//         </div>

//       </ >
//     </div>
//   );
// };

// export default Register;