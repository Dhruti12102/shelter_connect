import React from "react";
import "../styles/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return (
        <div style={{ padding: "12px 0px", backgroundColor: "rgb(232, 227, 227)", textAlign: 'center', position: 'fixed', width: '100%', height: '85px', bottom: '0', left: '0', right: '0', zIndex: '999' }}>

            <div className="text-center">
                <h5>
                    Made with ❤️ by <a href="https://dhruti12102/shelter-connect" style={{ textDecoration: "none", color: "red" }}>Dhruti Shah</a>
                </h5>
            </div>

            <div className="text-center pt-1">
                <a href="https://www.linkedin.com/in/dhruti12102/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin mx-2" style={{ fontSize: "20px" }}></i>
                </a>

                <a href="https://dhruti-ganbote.netlify.app/" target="_blank" rel="noreferrer">
                    <i className="bi bi-globe mx-2" style={{ fontSize: "20px" }}></i>
                </a>

                <a href="https://github.com/dhruti12102" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{ fontSize: "21px" }}></i>
                </a>

                <a href="mailto:dhrutishah12102@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{ fontSize: "21px" }}></i>
                </a>
            </div>
            {/* <footer style={{backgroundColor: 'crimson', color:'springgreen', textAlign: 'center', position:'fixed', width: '100%',height : '50px', bottom : '0', left: '0', right: '0', zIndex : '999'}}><h1>THIS IS MY FOOTER</h1></footer> */}
        </div>
    );
};

export default Footer;
