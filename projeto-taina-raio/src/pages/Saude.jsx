import Header from "../components/Header"

import styles from "../styles/pages/financas.module.css"

import imgsaude from "../assets/imgsaude.png"

import Menu from "../components/Menu"

import { useState, useEffect } from "react"

import da from "../da.json"

const Saude = () => {
 
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
      try {
        setCursos(da);
      } catch (error) {
        console.error("Erro Capturado :", error);
      }
    }, []);

  return (
    <>
    
    
    <div className={styles.sobreContainer}>
      <div className={styles.textContainer}>
      <h1 className={styles.cardNome}>Saúde</h1>
      <p className={styles.cardParagrafo}>A área em saúde possibilita atuação em diferentes âmbitos, inclusive na pesquisa. Trata-se de um campo que contribui com o avanço científico.
</p>
<p>Separamos aqui 3 profissões promissoras no mercado de saúde: Medicina, Enfermagem e Farmácia. Uma das profissões de saúde com foco em pesquisa é Medicina. A área, que forma clínico geral, é voltada para a investigação, a origem e as causas de doenças. Na Enfermagem, são realizadas atividades profissionais de prestação de cuidados ao paciente, gerenciamento do trabalho e os recursos materiais. O profissional também atua diretamente na promoção, prevenção, recuperação e reabilitação da saúde do indivíduo e da comunidade. Já as profissionais de Farmácia atuam na manipulação de medicamentos, ainda podem trabalhar com análise clínica por meio de exames bioquímicos, hematologia, microbiologia e demais atividades em laboratórios.  </p>
 <p>Conheça abaixo algumas iniciativas para mulheres de baixa renda que pretendem ingressar na área:</p>     
      </div>
      <img className={styles.taiImage} src={imgsaude} alt="Imagem de Tai" />
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

export default Saude