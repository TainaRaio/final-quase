import styles from '../styles/components/footer.module.css'

import { Link } from 'react-router-dom' 

import imgfooter from '../assets/rodapeimg.png'

const Footer = ({content}) => {
  return (
    <footer className={styles.footerContainer}>
      <Link to="https://github.com/TainaRaio" target="_blank">
      <img src={imgfooter}  alt="Imagem do Github" />
      </Link>
      {/* <p className={styles.footerContent}>{content}</p> */}
    </footer>
  )
}

export default Footer
