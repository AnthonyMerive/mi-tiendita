import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link, NavLink, useHistory } from 'react-router-dom'

export default function NavBar() {

    useEffect(() => {
        var sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {});

    }, []);



    return (
        <>
            <div className="navbar">
                <nav className="amber darken-2 ">
                    <div className="nav-wrapper">
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <Link to="/mi-tiendita" className="brand-logo">Mi tiendita</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="/mi-tiendita/login">LOGIN</Link>
                            </li>
                            <li><Link to="/mi-tiendita/admin" >ADMIN</Link></li>
                            <li>
                                <a href="" className="btn amber darken-1">
                                    <i className="material-icons">shopping_cart</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="" ><span className="material-icons">location_on</span><span>Mexico city</span></a></li>
                    <li>
                        <Link to="/mi-tiendita/login"></Link>
                    </li>
                </ul>
            </div>


        </>




    )
}
