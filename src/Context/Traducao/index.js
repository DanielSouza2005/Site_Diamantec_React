import { createContext, useState } from "react";
import { traduzirConteudo } from "../../Services/Traducao";

export const TraducaoContext = createContext();
TraducaoContext.displayName = "Tradução";

export const TraducaoProvider = ({ children }) => {

    const [idioma, setIdioma] = useState("pt-br");
    const [conteudo, setConteudo] = useState(traduzirConteudo("pt-br"));

    return (
        <TraducaoContext.Provider value={{ idioma, setIdioma, 
                                           conteudo, setConteudo }} >
            {children}
        </TraducaoContext.Provider>
    )
}
