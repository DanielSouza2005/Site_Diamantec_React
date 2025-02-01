export const MOSTRAR_MENU = "MOSTRAR_MENU";

const ReducerNavegador = (estado, acao) => {
    switch (acao.tipo) {
        case MOSTRAR_MENU:
            return !estado;
    
        default:
            return estado;
    };
};

export default ReducerNavegador;