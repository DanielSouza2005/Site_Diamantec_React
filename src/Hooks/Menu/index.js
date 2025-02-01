import { useContext } from "react"
import { MenuContext } from "../../Context/Menu";
import { MOSTRAR_MENU } from "../../Reducer/Navegador";

export const useMenu = () => {

    const { menuAberto, dispatcherMenu } = useContext(MenuContext);

    const aoMostrarMenu = () => {
        dispatcherMenu({
            tipo: MOSTRAR_MENU
        });
    };

    return {
        menuAberto, dispatcherMenu, 
        aoMostrarMenu
    }
}