import { useContext } from "react"
import { LightBoxContext } from "../../Context/LightBox";
import { MOSTRAR_LIGHTBOX } from "../../Reducer/LightBox";

export const useLightBox = () => {

    const { lightboxController, dispatcherLightboxController,
            portfolio, setPortfolio } = useContext(LightBoxContext);

    const aoMostrarLightBox = (numero) => {
        dispatcherLightboxController({
            tipo: MOSTRAR_LIGHTBOX,
            slide: numero
        });
    }

    return {
        lightboxController, dispatcherLightboxController,
        portfolio, setPortfolio,
        aoMostrarLightBox
    }
}