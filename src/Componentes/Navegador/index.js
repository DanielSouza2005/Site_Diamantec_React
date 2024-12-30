import { HiOutlineViewList } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import BotaoIdioma from "../BotaoIdioma";
import NavegadorLink from "../NavegadorLink";
import styles from "./navegador.module.css";

const Navegador = ({ itens_navbar, clickNavMobile, MenuAberto, onClickNavbar, onChangeLanguage, idioma }) => {

    const onClickEvent = (id) => {
        if (MenuAberto) clickNavMobile();
        onClickNavbar(id);
    };

    return (
        <>
            {
                MenuAberto &&
                <div
                    onClick={clickNavMobile}>
                </div>
            }

            <nav className={`${styles.cabecalhoNavbar} 
                             ${MenuAberto ? styles.menuAberto : ""}
                            `}
            >
                <ul>
                    {
                        MenuAberto &&
                        <span
                            className={styles.btnFechar}
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
                    className={styles.cabecalhoNavbarMobile}
                    size={30}
                    onClick={clickNavMobile}
                />
            </nav>
        </>
    );
};

export default Navegador;