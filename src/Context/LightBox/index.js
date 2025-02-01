import { createContext, useReducer } from "react";
import ReducerLightBox from "../../Reducer/LightBox";

export const LightBoxContext = createContext();
LightBoxContext.displayName = "LightBox";

export const LightBoxProvider = ({ children }) => {

    const [lightboxController, dispatcherLightboxController] = useReducer(ReducerLightBox, {
        toggler: false,
        slide: 1
    });

    return (
        <LightBoxContext.Provider value={{ lightboxController, dispatcherLightboxController }} >
            {children}
        </LightBoxContext.Provider>
    )
}