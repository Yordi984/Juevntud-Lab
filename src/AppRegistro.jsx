import Registro from './Registro'

function AppRegistro() {
  return (
    <>
      <nav className="navbar navbar-light bg-light px-4">

        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href='/Home'>
              <img src='/logo.png' alt="logo " style={{ height: '40px', marginRight: '10px' }}/>
              
            </a>
          <span className="navbar-brand mb-0 h1">Juventud Lab</span>
          </div>
        </div>

      </nav>
      <Registro />
    </>
  )
}

export default AppRegistro
