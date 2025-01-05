export const MOSTRAR_LIGHTBOX = "MOSTRAR_LIGHTBOX";

const ReducerLightBox = (estado, acao) => {
    switch (acao.tipo) {
        case MOSTRAR_LIGHTBOX:
            return {
                toggler: !estado.toggler,
                slide: acao.slide
            };
    
        default:
            return estado;
    }
}

export default ReducerLightBox;