import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'

import logo from '../assets/logo.png'

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Dropdown from 'react-bootstrap/Dropdown';

import DropdownButton from 'react-bootstrap/DropdownButton';

import { useLocation } from 'react-router-dom';


const Menu = () => {

  const location = useLocation()

 const path = location.pathname
 console.log(path)
 
 function changeColor(){
  if (path == "/financas"){
    return { background: "pink"}
  }else {
    return {background: "#fff"}
  }
 }

  return (
    
    <nav className={styles.menuContainer} style = {changeColor()} >
      <li>
      <Link className={styles.imgLink} to="/"><img src={logo} alt="logo"/></Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/">Home</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/sobre">Sobre</Link>
      </li>
      <Dropdown>
      <Dropdown.Toggle className={styles.botao}  id="dropdown-basic" variant="light">
       Cursos
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/tecnologia">Tecnologia</Dropdown.Item>
        <Dropdown.Item href="/financas">Finanças</Dropdown.Item>
        <Dropdown.Item href="/saude">Saúde</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
     
      <li>
        <Link className={styles.menuLink} to="/contato">Contato</Link>
      </li>
    </nav>
    
  )
}

export default Menu
