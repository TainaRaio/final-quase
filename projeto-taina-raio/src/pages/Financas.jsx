import Header from "../components/Header"

import financas from '../assets/financas.jpg'

import styles from "../styles/pages/financas.module.css"

import imgfinancas from "../assets/imgfinancas.png"


import Menu from "../components/Menu"

import { useState, useEffect } from "react"

import data from "../data.json"

const Financas = () => {
 
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
      try {
        setCursos(data);
      } catch (error) {
        console.error("Erro Capturado :", error);
      }
    }, []);

  return (
    <>
    
    
    <div className={styles.sobreContainer}>
      <div className={styles.textContainer}>
      <h1 className={styles.cardNome}>Finanças</h1>
      <p className={styles.cardParagrafo}>Separamos aqui 2 profissões promissoras no mercado de finanças, são elas: Analista de Finanças e bancária. 
</p>
<p>A maior parte das vagas oferecidas por empresas ligadas ao mercado financeiro é direcionada para profissionais com formação de bacharel nos cursos de Ciências Contábeis, Ciências Econômicas e Administração.  </p>
 <p>Conheça abaixo algumas iniciativas para pessoas de baixa renda que pretendem ingressar na área:</p>     
      </div>
      <img className={styles.taiImage} src={imgfinancas} alt="Imagem de Tai" />
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

export default Financas