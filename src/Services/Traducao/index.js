import enUS from "../../Shared/Data/en-us";
import ptBr from "../../Shared/Data/pt-br";

export const traduzirConteudo = (idioma) => {
    if (idioma === "pt-br") {
        return (ptBr);
    }
    else if (idioma === "en-us") {
        return (enUS);
    }
}