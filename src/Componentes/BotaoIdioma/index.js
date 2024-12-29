import "./botaoidioma.css";
import ingles from "../../Imagens/ingles.png";
import pt_br from "../../Imagens/pt-br.png";

const BotaoIdioma = ({ alt, idioma, onChangeLanguage }) => {
    let imagem = "";

    if (idioma === "pt-br") imagem = ingles;
    if (idioma === "en") imagem = pt_br;

    return (
        <a className="botao-ingles"
            onClick={() => onChangeLanguage()}
        >
            <img alt={alt}
                src={imagem}
            />
        </a>
    );
};

export default BotaoIdioma;