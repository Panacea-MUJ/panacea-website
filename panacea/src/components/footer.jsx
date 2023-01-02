import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import panaceaTitle from "./panaceaTitle.png";
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

const Footer = () => {
    return (
        <>
            <footer className="bg-black-900 text-center" style={{
                background: "black",
            }}>
                <br></br>
                <div className="bg-black-900 container p-6 bg-slate">
                    {/* this is a footer */}
                    <div className="shrink-flex grid lg:grid-cols-4 md:grid-cols-2">
                        <div className="mb-6">
                            <ul className="list-none mb-0">
                                <li>
                                    {/* <a href="#" className="panacea-logo-text">
                                        PANACEA
                                    </a> */}
                                    <img src={panaceaTitle} alt="panaceaLogo" style={{
                                        width: "300px",
                                        height: "50px"
                                    }} />

                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <ul className="list-none mb-0">
                                <li>
                                    <span className="li-heading text-xl text-purple-800">
                                        MENU
                                    </span>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-500">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-500">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-500">
                                        Teams
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-500">
                                        Blogs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <ul className="list-none mb-0">
                                <li>
                                    <span className="li-heading text-xl text-purple-800">
                                        CONTACT US
                                    </span>
                                </li>
                                <li className="text-slate-500">Insert email address here</li>
                                <li className="text-slate-500">Add other contact info.</li>
                            </ul>
                        </div>


                        {/* <div className="shrink-flex text-center mb-6">
                            <ul className="list-none mb-0">
                                <div className="ul-list">
                                    <li className="li-social">
                                        <a href="#"><FaTwitter /></a>
                                    </li>
                                    <li className="li-social">
                                        <a href="#"><FaFacebook /></a>
                                    </li>
                                    <li className="li-social">
                                        <a href="#"><FaInstagram /></a>
                                    </li>
                                </div>
                            </ul>
                        </div> */}

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>

                            <ul className="list-none mb-0">
                                <li>
                                    <a href="#!" className="text-gray-800">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-gray-800">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-gray-800">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-gray-800">Link 4</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <p>© 2022 Copyright: Manipal University Jaipur</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
