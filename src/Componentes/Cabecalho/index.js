import Navegador from '../Navegador';
import logo from '../../Imagens/cabecalho/logo.png';
import styles from "./cabecalho.module.css";
import { Link } from 'react-scroll';

const Cabecalho = (props) => {
    return (
        <header
            id="cabecalho"
            className={styles.cabecalho}
        >
            <div className={styles.cabecalhoContainer}>
                <Link
                    className={styles.cabecalhoLogo}
                    spy={true}
                    smooth={true}
                    duration={750}
                    to="banner"
                >
                    <img alt="Diamantec"
                        src={logo}
                    />
                </Link>

                <Navegador
                    itensMenu={props.itensMenu}
                    clickNavMobile={props.mostraMenu}
                    MenuAberto={props.MenuAberto}
                    onClickMenu={props.onClickMenu}
                    onChangeLanguage={props.onChangeLanguage}
                    idioma={props.idioma}
                />
            </div>
        </header>
    );
};

export default Cabecalho;