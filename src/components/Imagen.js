import React from 'react'
import PropTypes from 'prop-types'

const Imagen = ({imagen}) => {

    const {largeImageURL, likes, previewURL, tags, views} = imagen

    return (
        <div className= 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className="card">
                <img src={previewURL} alt={tags[0]} className='card-img-top'/>
                <div className="card-body">
                    <div className="card-text">{likes} Me Gusta</div>
                    <div className="card-text">{views} Visto</div>
                </div>
                <div className="card-footer">
                    <a href={largeImageURL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary btn-block'>
                    Ver Imagen
                        
                    </a>
                </div>
            </div>
        </div>
    )
}

Imagen.propTypes = {

}

export default Imagen
