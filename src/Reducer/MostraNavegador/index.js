export const MOSTRAR_MENU = "MOSTRAR_MENU";

const ReducerMostraNavegador = (estado, acao) => {
    switch (acao.tipo) {
        case MOSTRAR_MENU:
            return !estado;
    
        default:
            return estado;
    };
};

export default ReducerMostraNavegador;