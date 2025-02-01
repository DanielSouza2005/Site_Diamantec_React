import styles from "./botaoidioma.module.css";
import ingles from "../../Imagens/cabecalho/ingles.png";
import pt_br from "../../Imagens/cabecalho/pt-br.png";

const BotaoIdioma = ({ alt, idioma, onChangeLanguage }) => {
    let imagem = "";

    if (idioma === "pt-br") imagem = ingles;
    if (idioma === "en-us") imagem = pt_br;

    return (
        <a
            className={styles.botaoIngles}
            onClick={() => onChangeLanguage(idioma)}
        >
            <img 
                alt={alt}
                src={imagem}
            />
        </a>
    );
};

export default BotaoIdioma;