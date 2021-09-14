import React, { useEffect, useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import axios from 'axios';

export default function BotonAccion() {

    const url_users = 'https://api-tiendita.herokuapp.com/usuarios'
    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        getData()
        let fixedButton = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(fixedButton, {});
    }, []);

    const getData = async () => {
        axios.get(url_users)
        .then(res=>{
            console.log(res.data)
            setDataUser(res.data)
        }).catch(error=>{
            console.log(error.message)
        })
    }

    console.log(dataUser[0])
    return (
        <>
        {
            dataUser[0].email === "admin@example.com" &&
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
        }
            {/* <div class="fixed-action-btn">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div> */}
        </>
    )
}
