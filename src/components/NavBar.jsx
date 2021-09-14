import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

export default function NavBar() {

    useEffect(() => {
        var sidenav = document.querySelectorAll(".sidenav");
        let fixedButton = document.querySelectorAll('.fixed-action-btn');
        M.Sidenav.init(sidenav, {});
        M.FloatingActionButton.init(fixedButton, {});
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

            <div class="fixed-action-btn">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div>
        </>




    )
}
