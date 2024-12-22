import "./navegadorlink.css";

const NavegadorLink = ({ href, ativo, nome, onClick, id }) => {
    return (
        <a
            href={href}
            className={`cabecalho-itens ${ativo ? "cabecalho-navbar-link-ativo" : ""}`}
            onClick={() => onClick(id)}
        >
            {nome}
        </a>
    );
}

export default NavegadorLink;