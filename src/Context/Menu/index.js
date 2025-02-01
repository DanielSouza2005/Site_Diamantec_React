import { createContext, useReducer } from "react";
import ReducerNavegador from "../../Reducer/Navegador";

export const MenuContext = createContext();
MenuContext.displayName = "Menu";

export const MenuProvider = ({ children }) => {

    const [menuAberto, dispatcherMenu] = useReducer(ReducerNavegador, false);

    return (
        <MenuContext.Provider value={{ menuAberto, dispatcherMenu }}>
            {children}
        </MenuContext.Provider>
    )
}