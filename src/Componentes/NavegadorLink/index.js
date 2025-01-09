import styles from "./navegadorlink.module.css";
import { Link } from 'react-scroll';

const NavegadorLink = ({ onClick, item }) => {
    return (
        <Link
            activeClass={styles.cabecalhoNavbarLinkAtivo}
            to={item.href}
            spy={true}
            smooth={true}
            offset={-20}
            duration={750}
            className={styles.cabecalhoNavBarLink}
            onClick={() => onClick(item.id)}
        >
            {item.nome}
        </Link>
    );
}

export default NavegadorLink;