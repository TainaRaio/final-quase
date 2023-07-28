import styles from '../styles/components/header.module.css'

const Header = ({ title, image, headerId, button }) => {
  return (
    <header className={styles.headerContainer}id={headerId}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <a href="/sobre" className="btn btn-outline-dark btn-lg active-dark" role="button" aria-pressed="true" color="light" >Conheça mais sobre nós </a>
      {/* <img className={styles.headerImage} src={image} alt={title} /> */}
    </header>
  )
}

export default Header
