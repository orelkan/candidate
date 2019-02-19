import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Input, NavLink, InputGroup, InputGroupAddon, InputGroupText,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './Navbar.css';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/logo.png'
import PersonM from '../../assets/person_m.png'
import PersonF from '../../assets/person_f.png'

function MyNavbar(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="#"><img src={Logo} width="170px"/></NavbarBrand>
          <NavbarToggler onClick={() => toggle()} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="#">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <div class="search-by-id">
                  <Input type="text" placeholder="חפש לפי תעודת זהות" />
                  <InputGroupAddon addonType="prepend" class="search-button">
                    <InputGroupText>
                      <FontAwesomeIcon icon={faSearch} />
                    </InputGroupText>
                  </InputGroupAddon>
                </div>
              </NavItem>
              <NavItem> 
                <div class="person-info">
                    <p>{props.first_name} {props.last_name} {props.job}</p>
                    <div class="person-icon">
                      <img src={PersonM}/>
                    </div>
                </div>
                {/* <div class="person-icon">
                  <img src={PersonF}/>
                </div> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    )
}

export default MyNavbar;