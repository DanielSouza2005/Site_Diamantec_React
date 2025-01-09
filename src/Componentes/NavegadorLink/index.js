import styles from "./navegadorlink.module.css";
import { Link } from 'react-scroll';

const NavegadorLink = ({ onClick, item }) => {
    return (
        <Link
            activeClass={styles.cabecalhoNavbarLinkAtivo}
            to={item.href}
            spy={true}
            smooth={true}
<<<<<<< HEAD
=======
            offset={-20}
>>>>>>> 992181d (      <ScrollTopo />)
            duration={750}
            className={styles.cabecalhoNavBarLink}
            onClick={() => onClick(item.id)}
        >
            {item.nome}
        </Link>
    );
}

export default NavegadorLink;