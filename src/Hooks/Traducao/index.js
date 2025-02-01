import { useContext, useEffect } from "react"
import { traduzirConteudo } from "../../Services/Traducao";
import { TraducaoContext } from "../../Context/Traducao";

export const useTraducao = () => {

    const { idioma, setIdioma,
            conteudo, setConteudo } = useContext(TraducaoContext);

    const aoTrocarIdioma = (novoIdioma) => {
        if (idioma === "pt-br") novoIdioma = "en-us";
        if (idioma === "en-us") novoIdioma = "pt-br";

        setIdioma(novoIdioma);        
    }

    useEffect(() => {
        setConteudo(traduzirConteudo(idioma));
    }, [idioma, setConteudo]);

    return {
        idioma, conteudo, aoTrocarIdioma
    }
}