import Header from "../components/Header"

import sobre from '../assets/sobre.svg'

import styles from "../styles/pages/cursos.module.css"

import curiosidades from "../assets/curiosidades.jpg"

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Carousel from 'react-bootstrap/Carousel';

import primeira from '../assets/primeira.jpg'

import segunda from '../assets/segunda.jpg'

import terceira from '../assets/terceira.jpg'

const Cursos = () => {
  return (
    <div>
      <Carousel controls={true} indicators={true} variant="dark" fade={true} interval="1000">
        <Carousel.Item>
            <img className={styles.imgSobre} src={primeira}></img>  
        </Carousel.Item>
        <Carousel.Item>
            <img className={styles.imgSobre} src={segunda}></img>
        </Carousel.Item>
        <Carousel.Item>
            <img className={styles.imgSobre} src={terceira}></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
      
export default Cursos;
     