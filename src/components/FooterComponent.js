import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                <h5>Our Address</h5>
                            <address>
                            Indian institute of Information Technology Vadodara<br />
                            Sector 21 <br />
                            Gandhinagar Gujarat<br />
                            <i className="fa fa-phone"></i>: +91 8114488467<br />
                            <i className="fa fa-fax"></i>: +91 8406988486<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:Spicy_raj@jeevan.net">spicy_raj@jeevan.net</a>
                            </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/abhimanyu_raj.102/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/abhimanyu.raj.102" ><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/abhimanyu-raj-5330a5165/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/i_Abhimanyu_Raj"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/iabhimanyu"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-email" href="mailto:abhimanyuraj118@gmail.com"><i className="fa fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Restaurant Spicy_Raj</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;