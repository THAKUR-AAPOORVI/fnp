import React from 'react'
import '../CSS/Topnav.css'
import { Navbar, Nav,NavDropdown  } from 'react-bootstrap';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Topnav = () => {
  return (
<>
<div>

<Navbar bg="white" expand="lg" style={{height:"35px" }}>
      {/* <Navbar.Brand href="#">Your Brand</Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{ justifyContent: 'flex-end' }} /> */}
      <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none",justifyContent:"flex-end" ,borderColor:"white" }}
          className="ml-auto custom-toggler" // Apply custom class for styling
        >
          <MoreVertIcon className="custom-toggle-icon" style={{border:"none"}} />
        </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>

        <Nav className="ml-auto"> {/* Using justify-content-end */}
          <Nav.Link  className='navitem' href="#">Currency</Nav.Link>
          <Nav.Link  className='navitem' href="#">About</Nav.Link>
          <Nav.Link  className='navitem'  href="#">Services</Nav.Link>
          <Nav.Link   className='navitem'   href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


{/* next bar   */}

<Navbar  expand="lg" className='nextbar' style={{ }}>
        {/* Your second navbar content */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Second Navbar Link 1</Nav.Link>
            <Nav.Link href="#">Second Navbar Link 2</Nav.Link>
            {/* Add more links as needed */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>

{/* third  */}
<Nav className="ml-auto third">
{/* <Nav.Link href="#">Home</Nav.Link> */}

{/* First Dropdown */}
<NavDropdown title="Birthday" id="events-dropdown" className="custom-dropdown">
  <div className="dropdown-content">
    <NavDropdown.Item href="#">Birthday</NavDropdown.Item>
    <NavDropdown.Item href="#">Anniversary</NavDropdown.Item>
  </div>
</NavDropdown>

{/* Second Dropdown */}
<NavDropdown title="Cakes" id="cakes-dropdown" className="custom-dropdown">
  <div className="dropdown-content">
    <NavDropdown.Item href="#">All Gifts</NavDropdown.Item>
    <NavDropdown.Item href="#">Cupcakes</NavDropdown.Item>
    <NavDropdown.Item href="#">Personalized Gifts</NavDropdown.Item>
  </div>
</NavDropdown>
{/* third  */}
{/* Second Dropdown */}
<NavDropdown title="Cakes" id="cakes-dropdown" className="custom-dropdown">
  <div className="dropdown-content">
    <NavDropdown.Item href="#">All Gifts</NavDropdown.Item>
    <NavDropdown.Item href="#">Cupcakes</NavDropdown.Item>
    <NavDropdown.Item href="#">Personalized Gifts</NavDropdown.Item>
  </div>
</NavDropdown>
{/* Second Dropdown */}
<NavDropdown title="Cakes" id="cakes-dropdown" className="custom-dropdown">
  <div className="dropdown-content">
    <NavDropdown.Item href="#">All Gifts</NavDropdown.Item>
    <NavDropdown.Item href="#">Cupcakes</NavDropdown.Item>
    <NavDropdown.Item href="#">Personalized Gifts</NavDropdown.Item>
  </div>
</NavDropdown>
{/* Second Dropdown */}
<NavDropdown title="Cakes" id="cakes-dropdown" className="custom-dropdown">
  <div className="dropdown-content">
    <NavDropdown.Item href="#">All Gifts</NavDropdown.Item>
    <NavDropdown.Item href="#">Cupcakes</NavDropdown.Item>
    <NavDropdown.Item href="#">Personalized Gifts</NavDropdown.Item>
  </div>
</NavDropdown>
{/* Second Dropdown */}
<NavDropdown title="Cakes" id="cakes-dropdown" className="custom-dropdown">
  <div className="dropdown-content">
    <NavDropdown.Item href="#">All Gifts</NavDropdown.Item>
    <NavDropdown.Item href="#">Cupcakes</NavDropdown.Item>
    <NavDropdown.Item href="#">Personalized Gifts</NavDropdown.Item>
  </div>
</NavDropdown>
        </Nav>



</>
  )
}

export default Topnav