import { HiOutlineViewList } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import ingles from '../../Imagens/ingles.png';
import "./navegador.css";

const Navegador = ({ itens_navbar, clickNavMobile, MenuAberto }) => {
    return (
        <>
            {
                MenuAberto &&
                <div className="cabecalho-navbar-overlay"
                     onClick={clickNavMobile}>
                </div>
            }

            <nav
                id="cabecalho-navbar"
                className={`cabecalho-navbar ${MenuAberto ? "menu-aberto" : ""}`}
            >
                <ul>

                    {
                        MenuAberto ?
                            <span className="btn-fechar"
                                  onClick={clickNavMobile}>
                                <AiOutlineClose />
                            </span>
                            :
                            ""
                    }

                    {itens_navbar.map((item) => (
                        <li key={item.index}>

                            {
                              MenuAberto ?
                                <a href={item.href}
                                   className="cabecalho-itens"
                                   onClick={clickNavMobile}>
                                    {item.nome}
                                </a>
                                :
                                <a href={item.href}
                                   className="cabecalho-itens"
                                >
                                    {item.nome}
                                </a>
                            }

                        </li>
                    ))}

                    <li>
                        <a className="cabecalho-itens"
                           href="#banner"
                        >
                            <img className="botao-ingles"
                                 alt="Trocar Idioma"
                                 src={ingles} 
                            />
                        </a>
                    </li>
                </ul>

                <HiOutlineViewList
                    className="cabecalho-navbar-mobile"
                    size={30}
                    onClick={clickNavMobile}
                />
            </nav>
        </>
    );
};

export default Navegador;