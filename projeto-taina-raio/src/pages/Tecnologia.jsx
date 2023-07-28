import Header from "../components/Header"

import styles from "../styles/pages/financas.module.css"

import imgtec from "../assets/imgtec.png"

import Menu from "../components/Menu"

import { useState, useEffect } from "react"

import dat from "../dat.json"

const Tecnologia = () => {
 
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
      try {
        setCursos(dat);
      } catch (error) {
        console.error("Erro Capturado :", error);
      }
    }, []);

  return (
    <>
    
    
    <div className={styles.sobreContainer}>
      <div className={styles.textContainer}>
      <h1 className={styles.cardNome}>Tecnologia</h1>
      <p className={styles.cardParagrafo}>As áreas de tecnologia e engenharia têm passado por transformações no perfil dos profissionais formados que ingressam no mercado de trabalho. Se antes tais setores eram vistos como majoritariamente masculino, desde 2022 o cenário está diferente.
</p>
<p>A área de Tecnologia da Informação é uma das que mais contam com profissões que ganham bem. Inclusive, outros setores cada vez mais dependem de serviços e ferramentas desenvolvidos por profissionais de TI.  </p>
 <p>Conheça abaixo algumas iniciativas para mulheres de baixa renda que pretendem ingressar na área:</p>     
      </div>
      <img className={styles.taiImage} src={imgtec} alt="Imagem de Tai" />
    </div>
    <h1 className={styles.h1}>Iniciativas</h1>
    <div className={styles.containerCursos}>
      {cursos.map((curso) => (
        <div className={styles.cardCursos} key={curso.id}>
          <img className={styles.cardImage} src={curso.imagem}/>
          <h1 className={styles.cardTitle}>{curso.nome}</h1>
          <a className={styles.cardLink} href={curso.link}>
          Acesse
          </a>
        </div>

      )
      
      )}

    </div>
    </>
  )
}

export default Tecnologia