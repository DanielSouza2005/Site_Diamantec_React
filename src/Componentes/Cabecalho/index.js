import Navegador from '../Navegador';
import logo from '../../Imagens/cabecalho/logo.png';
import styles from "./cabecalho.module.css";

const Cabecalho = (props) => {
    return(
        <header id="cabecalho"
                className={styles.cabecalho}>
            <div className={styles.cabecalhoContainer}>
                <a className={styles.cabecalhoLogo}
                   href="#banner"
                > 
                    <img alt="Diamantec"
                         src={logo} 
                    />
                </a>
                
                <Navegador 
                    itens_navbar={props.itens_navbar}
                    clickNavMobile={props.mostraMenu}
                    MenuAberto={props.MenuAberto}
                    onClickNavbar={props.onClickNavbar}
                    onChangeLanguage={props.onChangeLanguage}
                    idioma={props.idioma}
                />   
            </div>
        </header>
    );
};

export default Cabecalho;