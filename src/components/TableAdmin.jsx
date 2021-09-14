import React from 'react'
import axios from 'axios'

export default function TableAdmin({producto, url, setControl, setModifcar, setValues}) {

    const handleDelete = (id) => {
        axios.delete(url+id)
        setControl(true)
    }

    const handleModify = (id) => {
        const array = producto.find(product=> product.id === id)
        setModifcar(array)
        setValues({
            "id": array.id,
            "nombre": array.nombre,
            "descripcion": array.descripcion,
            "precio": array.precio,
            "imagen": array.imagen
        })
    }
    
    
    return (<>
            
            <table className="centered striped">
        <thead>
          <tr>
              <th>Producto</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Imagen</th>
          </tr>
        </thead>

        <tbody>
           {producto.map(product=>
          <tr key={product.id}>
            <td>{product.nombre}</td>
            <td>{product.descripcion}</td>
            <td>${product.precio}</td>
            <td><img width={50} src={product.imagen} alt="" /></td>
            <td><span onClick={()=>handleDelete(product.id)}className="waves-effect waves-light btn-small red darken-3"><i className="material-icons left">delete_forever</i>Borrar</span>
            <span onClick={()=>handleModify(product.id)} className="waves-effect waves-light btn-small blue darken-3"><i className="material-icons left">library_books</i>Modificar</span>
            </td>
          </tr>
          )}
        </tbody>
      </table>

        </>)
}
