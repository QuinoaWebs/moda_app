import React, { useEffect, useRef} from 'react'


const Header = () => {

  const entrada = useRef(null)

  useEffect(() => {
    
    window.addEventListener('domContentLoaded', ()=>{
        entrada.current.classList.add('entrada')
    })
  }, [])


  return (
    <header className="header" id="header">
      {/* <h2 className="enlaces" id="enlaces">
        <Link to="/">EN</Link>
        <Link to="/">IT</Link>
      </h2>
      <Link to='/'> 
        <div className="home" id="home">
          <i className=" icono fas fa-home" id="icono"> </i>
        </div>
      </Link>   */}
      <h1 className="entrada" id="entrada" ref={entrada}>la web de las manualidades </h1>
    </header>
  )
}

export default Header
