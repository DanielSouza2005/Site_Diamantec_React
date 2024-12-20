import "./cabecalho.css";

const Cabecalho = (props) => {
    return(
        <header id="cabecalho"
                className="cabecalho">
            <div className="cabecalho-container">
                <a className="cabecalho-logo"
                   href={props.link}>
                   Teste 
                </a>
                <nav id="cabecalho-navbar"
                     className="cabecalho-navbar">
                    <ul>
                        <li>
                            <a className="cabecalho-itens"
                               href="">
                                Início
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Cabecalho;