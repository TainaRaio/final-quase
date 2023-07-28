import Header from "../components/Header"

import imgsobreum from '../assets/imgsobreum.png'

import styles from "../styles/pages/sobre.module.css"

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
     
      <div className={styles.sobreContainer}>
      <img className={styles.taiImage} src={imgsobreum} alt="Imagem de Tai" />
      <div className={styles.textContainer}>
<h1 className={styles.cardNome}>ELAborar</h1>
<p className={styles.cardParagrafo}>Somos uma ação de apoio á mulheres diversas,  negras, nordestinas,  com diferentes orientações sexuais, em situação de vulnerabilidade social, neurodiversas e mães.
Temos como próposito inserir mulheres no mercado de trabalho e assim aumentar  equidade e inclusão.</p>

    </div>
  </div>
</div>
    
    

  );
}
      
export default Cursos;
     