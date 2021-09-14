import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

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
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <a href="#" className="brand-logo">Mi tiendita</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="" ><span class="material-icons">location_on</span><span>Mexico city</span></a></li>
                            <li>
                                <a href="" className="btn amber darken-1">
                                    <i class="material-icons">shopping_cart</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav" id="mobile-demo">
                    <li><a href="" ><span class="material-icons">location_on</span><span>Mexico city</span></a></li>
                    <li>
                        <a href="" className="btn amber darken-1">
                            <i class="material-icons">shopping_cart</i>
                        </a>
                    </li>
                </ul>
            </div>

            
        </>




    )
}
