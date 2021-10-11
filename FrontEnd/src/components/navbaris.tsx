import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { useAppState } from './appState'
import '../designs/navbaris.css'



export const Navbaris: React.FC = () => {
  const route: {params: {page: string}} = useRouteMatch('/:page') || { params: { page: '' } }
  //console.log(route)
  const activeRoute = route.params.page
  //console.log(activeRoute)

  function getActiveRouteStyle(navRouteName: string) {
    if (navRouteName === activeRoute) {
      return { color: 'white' }
    }
    return {}
  }


  const { selectedCountry, setSelectedCountry } = useAppState()



  return (

    // <div className="hm">
    <Navbar collapseOnSelect expand="sm" bg="danger" variant="dark">
      <Navbar.Brand><Link to="/">{selectedCountry}</Link>  </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={getActiveRouteStyle('select')}><Link to="/select">Select Country</Link></Nav.Link>
          <Nav.Link style={getActiveRouteStyle('besafe')}><Link to="/besafe">Be safe!</Link></Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link style={getActiveRouteStyle('about')}><Link to="/about">About</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}
