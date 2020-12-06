import React from 'react'
import PropTypes from 'prop-types'
import Imagen from './Imagen'

const ListadoImagenes = ({imagenes}) => {
    return (
        <div className='row justify-content-center'>
            <div className="col-12 p-5 row">
                {imagenes.map(elem => <Imagen key={elem.id} imagen={elem}/>)}
            </div>
            
        </div>
    )
}

ListadoImagenes.propTypes = {

}

export default ListadoImagenes
