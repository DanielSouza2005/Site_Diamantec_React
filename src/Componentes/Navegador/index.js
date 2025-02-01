import { HiOutlineViewList } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import BotaoIdioma from "../BotaoIdioma";
import NavegadorLink from "./NavegadorLink";
import styles from "./navegador.module.css";
import { useTraducao } from "../../Hooks/Traducao";

const Navegador = ({ itensMenu, clickNavMobile, MenuAberto, onChangeLanguage }) => {

    const { idioma, aoTrocarIdioma } = useTraducao();

    const onClickEvento = () => {
        if (MenuAberto) clickNavMobile();
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

                    {itensMenu.map((item) => (
                        <li key={item.index}>

                            <NavegadorLink
                                item={item}
                                onClick={() => onClickEvento()}
                            />

                        </li>
                    ))}

                    <li>
                        <BotaoIdioma
                            alt="Trocar Idioma"
                            onChangeLanguage={() => aoTrocarIdioma(idioma)}
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