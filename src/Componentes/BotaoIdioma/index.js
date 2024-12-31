import styles from "./botaoidioma.module.css";
import ingles from "../../Imagens/ingles.png";
import pt_br from "../../Imagens/pt-br.png";

const BotaoIdioma = ({ alt, idioma, onChangeLanguage }) => {
    let imagem = "";

    if (idioma === "pt-br") imagem = ingles;
    if (idioma === "en") imagem = pt_br;

    return (
        <a 
            className={styles.botaoIngles}
            onClick={() => onChangeLanguage()}
        >
            <img alt={alt}
                src={imagem}
            />
        </a>
    );
};

export default BotaoIdioma;