import styles from "./navegadorlink.module.css";

const NavegadorLink = ({ href, ativo, nome, onClick, id }) => {
    return (
        <a
            href={href}
            className={`${styles.cabecalhoItens}
                        ${ativo ? styles.cabecalhoNavbarLinkAtivo : ""}
                       `}
            onClick={() => onClick(id)}
        >
            {nome}
        </a>
    );
}

export default NavegadorLink;