import { createContext, useReducer, useState } from "react";
import ReducerLightBox from "../../Reducer/LightBox";
import portfolioImages from "../../Imagens/portfolio";

export const LightBoxContext = createContext();
LightBoxContext.displayName = "LightBox";

export const LightBoxProvider = ({ children }) => {

    const [lightboxController, dispatcherLightboxController] = useReducer(ReducerLightBox, {
        toggler: false,
        slide: 1
    });

    const [portfolio, setPortfolio] = useState(portfolioImages);

    return (
        <LightBoxContext.Provider value={{
            lightboxController, dispatcherLightboxController,
            portfolio, setPortfolio
        }} >
            {children}
        </LightBoxContext.Provider>
    )
}