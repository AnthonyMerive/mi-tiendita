import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableAdmin from './TableAdmin'
import uuid from 'react-uuid'

export default function Admin() {

    const [producto, setProducto] = useState([]);
    const [modifcar, setModifcar] = useState(null);
    const [control, setControl] = useState(false);
    const [values, setValues] = useState({
        "id": "",
        "nombre": "",
        "descripcion": "",
        "precio": "",
        "imagen": ""
    })

    const URL = 'https://api-tiendita.herokuapp.com/productos/'
    const { nombre, descripcion, precio, imagen } = values;

    useEffect(() => {
        peticionGet();
        setControl(false);
    }, [nombre, control])

    const peticionGet = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        setProducto(data)
    }

    const peticionPost = async () => {
        await axios.post(URL, values)
            .then(response => {
                console.log(response);
                peticionGet();
            })
            .catch(error => {
                console.log(error.message)
            })
        setValues({
            "id": "",
            "nombre": "",
            "descripcion": "",
            "precio": "",
            "imagen": ""
        })
    }

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            id: uuid(),
            [target.name]: target.value
        })
    }

    const handleModify = async () => {
        await axios.put(URL + modifcar.id, values)
            .then(response => {
                console.log(response);
                peticionGet();
            })
            .catch(error => {
                console.log(error.message)
            })
        setModifcar(null);
        setValues({
            "id": "",
            "nombre": "",
            "descripcion": "",
            "precio": "",
            "imagen": ""
        })
    }

    const handleVolver = () => {
        setModifcar(null)
        setValues({
            "id": "",
            "nombre": "",
            "descripcion": "",
            "precio": "",
            "imagen": ""
        })
    }

    return (<>
        <div className="container row">
            <h4 className="center-align">Administrador</h4>
            <h6 className="center-align">
                {modifcar === null ?
                    '-Agregar productos-'
                    :
                    '-Modificar productos-'
                }
            </h6>
            <div className="col s6">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">add_circle</i>
                        <input
                            name="nombre"
                            value={nombre}
                            type="text"
                            id="autocomplete-input"
                            className="autocomplete"
                            placeholder={
                                modifcar ?
                                    modifcar.nombre
                                    : ''
                            }
                            onChange={handleChange} />
                        <label htmlFor="autocomplete-input">Nombre del producto</label>
                    </div>
                </div>
            </div>

            <div className="col s6">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">description</i>
                        <input
                            name="descripcion"
                            value={descripcion}
                            type="text"
                            id="autocomplete-input"
                            placeholder={
                                modifcar ?
                                    modifcar.descripcion
                                    : ''
                            }
                            onChange={handleChange} />
                        <label htmlFor="autocomplete-input">Descripcion</label>
                    </div>
                </div>
            </div>
        </div>

        <div className="container row">
            <div className="col s6">
                <div className="row">
                    <div className="input-field col s12 ">
                        <i className="material-icons prefix">attach_money</i>
                        <input
                            name="precio"
                            value={precio}
                            type="number"
                            id="autocomplete-input"
                            className="autocomplete"
                            placeholder={
                                modifcar ?
                                    modifcar.precio
                                    : ''
                            }
                            onChange={handleChange} />
                        <label htmlFor="autocomplete-input">Precio</label>
                    </div>
                </div>
            </div>

            <div className="col s6">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">add_a_photo</i>
                        <input
                            name="imagen"
                            value={imagen}
                            type="text"
                            id="autocomplete-input"
                            className="autocomplete"
                            placeholder={
                                modifcar ?
                                    modifcar.imagen
                                    : ''
                            }
                            onChange={handleChange} />
                        <label htmlFor="autocomplete-input">Imagen</label>
                    </div>
                </div>
            </div>
            <div className="center-align">
                {
                    modifcar === null ?
                        <button onClick={() => peticionPost()} className="waves-effect waves-light btn-small amber darken-1">
                            <i className="material-icons prefix">library_add</i>
                            Agregar</button>
                        :
                        <div>
                            <button onClick={handleVolver} className="waves-effect waves-light btn-small blue darken-3">
                                <i className="material-icons prefix">arrow_back</i></button>
                            <button onClick={handleModify} className="waves-effect waves-light btn-small amber darken-4">
                                <i className="material-icons prefix">file_upload</i>
                                Modificar</button>
                        </div>
                }
            </div>
        </div>

        <div className="container">
            <h4 className="center-align">Productos de la tienda</h4>
            <TableAdmin producto={producto} url={URL} setControl={setControl} setModifcar={setModifcar} setValues={setValues} />
        </div>

    </>)
}
