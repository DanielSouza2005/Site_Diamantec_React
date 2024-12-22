import { HiOutlineViewList } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import BotaoIdioma from "../BotaoIdioma";
import NavegadorLink from "../NavegadorLink";
import "./navegador.css";

const Navegador = ({ itens_navbar, clickNavMobile, MenuAberto, onClickNavbar, onChangeLanguage, idioma }) => {

    const onClickEvent = (id) => {
        if (MenuAberto) clickNavMobile();
        onClickNavbar(id);
    };

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
                        MenuAberto &&
                        <span
                            className="btn-fechar"
                            onClick={clickNavMobile}>
                            <AiOutlineClose />
                        </span>
                    }

                    {itens_navbar.map((item) => (
                        <li key={item.index}>

                            <NavegadorLink  
                                href={item.href}
                                ativo={item.active}
                                nome={item.nome}
                                id={item.index}
                                onClick={() => onClickEvent(item.index)}
                            />                           

                        </li>
                    ))}

                    <li>
                        <BotaoIdioma
                            alt="Trocar Idioma"                            
                            onChangeLanguage={() => onChangeLanguage()}
                            idioma={idioma}
                        />
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