import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const url = 'https://api-tiendita.herokuapp.com/productos/'

    const getLocal = JSON.parse(localStorage.getItem("dataLocal"))

    const [data, setData] = useState([])
    const [dataCompra, setDataCompra] = useState('')
    // const [dataLocal,setDataLocal] = useState('')

    useEffect(() => {
        getData()

    }, [])


    const getData= async() =>{
        axios.get(url)
        .then(resp => {
            setData(resp.data)
            console.log(resp)
        }).catch(error => {
            console.log(error.message)
        })
    }

    // useEffect(() => {
        
    //     localStorage.setItem("dataLocal",  JSON.stringify(dataCompra))

    // }, [dataCompra])


    const handleCompra = (data) =>{
        console.log(data)
        // setDataCompra([...dataCompra,data])
        
    }

    console.log(dataCompra)




    return (



        <div className="row container section">
            {
                data.map(data => (
                    <div className="col s12 m4 center-align">
                        <div className="card" width={100} style={{ height: '100%', border:'1px solid #2196f3' }}>
                            <div className="card-image">
                                <img
                                    src={data.imagen}
                                    style={{ width: '100%', height: '160px', objectFit: 'contain', padding: '10px' }}
                                />
                            </div>
                            <div className="card-content">
                                <p className="card-title blue-text">{data.nombre}</p>
                                <p>${data.precio}</p>
                                <a className="waves-effect amber accent-3 btn" onClick={()=>handleCompra(data)}>
                                    <i className="material-icons left">shopping_cart</i>
                                    <span>Agregar</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
            {/* <div className="card">
                        <div className="card-image">
                            <img
                                src="https://res.cloudinary.com/duaokxfsp/image/upload/v1631651402/Mi%20Tiendita/pngwing.com_1_hq9hnc.png"
                            />
                        </div>
                        <div className="card-content">
                            <p className="card-title blue-text">Limon</p>
                            <p>$2000</p>
                            <a className="waves-effect amber accent-3 btn">
                                <i className="material-icons left">shopping_cart</i>
                                <p clas="blue-text">AGREGAR</p></a
                            >
                        </div>
                    </div> */}

        </div>

    )
}
