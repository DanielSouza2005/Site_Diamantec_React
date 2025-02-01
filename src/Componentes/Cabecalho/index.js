import Navegador from '../Navegador';
import logo from '../../Imagens/cabecalho/logo.png';
import styles from "./cabecalho.module.css";
import { Link } from 'react-scroll';
import { useMenu } from '../../Hooks/Menu';
import { useTraducao } from '../../Hooks/Traducao';

const Cabecalho = () => {

    const { menuAberto, aoMostrarMenu } = useMenu();
    const { conteudo } = useTraducao();

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
                    itensMenu={conteudo.menu}
                    clickNavMobile={aoMostrarMenu}
                    MenuAberto={menuAberto}
                />
            </div>
        </header>
    );
};

export default Cabecalho;