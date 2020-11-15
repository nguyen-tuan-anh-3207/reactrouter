import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {CartContext} from '../contexts/CartProvider'

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
                <NavLink >
                <Link to="/products">Products</Link>
              </NavLink>
            </NavItem>
            <NavItem>
                <NavLink >
                    <CartContext.Consumer>
                      {({cartItems}) => <Link to="/carts">Cart ({cartItems.length})</Link>}   
                    </CartContext.Consumer>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenu;