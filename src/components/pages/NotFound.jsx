import React from 'react'

const NotFound = (props) => {
       document.title = props.nombre
  return (
    <div className="not__found" id="notFound">
      <p>Página no encontrada</p>
    </div>
  )
}

export default NotFound
