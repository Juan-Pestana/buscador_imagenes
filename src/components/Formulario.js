import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Formulario = ({setBusqueda}) => {

    const [termino, setTermino]= useState('')
    const [error, setError]= useState(false)

    const buscarImagenes = e =>{
        e.preventDefault()

        if( termino.trim() === ''){
            setError(true)
            return
        }

        setError(false)
        setBusqueda(termino);


    }
   
    return (
        <form onSubmit={buscarImagenes}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className='form-control form-control-lg' placeholder='Busca una Imagen, Ej. ordenador playa' 
                    onChange={e => setTermino(e.target.value)}/>
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" className='btn btn-lg btn-danger btn-block' value='buscar'/>
                </div>
                
            </div>
            {error ? <Error mensaje='agrega un término a buscar'/> : null}
        </form>
    )
}

Formulario.propTypes = {

}

export default Formulario
