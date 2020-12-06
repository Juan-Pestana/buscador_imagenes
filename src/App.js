import React, {useState,useEffect} from 'react'
import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes'

function App() {

  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(5)

  useEffect(()=>{
    const consultarAPI = async () =>{
      if(busqueda === '') return null
  

      const imgXPg= 30
      const apiKey= `${process.env.REACT_APP_IMAGES_API}`
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&per_page=${imgXPg}&page=${paginaActual}`

      const respuesta = await fetch(url)
      const imagenes = await respuesta.json()

      setImagenes(imagenes.hits)

      setTotalPaginas(Math.ceil(respuesta.totalHits / imgXPg))

      const jumbotron = document.querySelector(".jumbotron")
      jumbotron.scrollIntoView({behavior: 'smooth'})

    }

    consultarAPI()


  }, [busqueda, paginaActual])

  const paginaAnterior = () =>{
    const nuevaPaginaActual = paginaActual - 1

    if(nuevaPaginaActual === 0) return

    setPaginaActual(nuevaPaginaActual)
  }

  const paginaSiguiente = () =>{
    const nuevaPaginaActual = paginaActual + 1

    if(nuevaPaginaActual > totalPaginas) return

    setPaginaActual(nuevaPaginaActual)
  }

  return (
    <div className='container'>
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario setBusqueda={setBusqueda}/>
      </div>
      <ListadoImagenes imagenes={imagenes}/>
      <div className="text-center pb-5">
        {paginaActual=== 1 ? null: (<button type='button' className='btn btn-info mr-1' onClick={paginaAnterior}>&laquo; Anterior </button>)}
        {(paginaActual=== totalPaginas) ? null : (<button type='button' className='btn btn-info mr-1' onClick={paginaSiguiente}>Siguiente &raquo;</button>)}
      </div>
      

    </div>
  );
}

export default App;
