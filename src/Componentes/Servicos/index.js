import ServicosCard from "../ServicosCard";
import "./servicos.css";

const Servicos = ({ itens, titulo }) => {
    return (
        <section id="servicos"
            className="servicos">
            <div className="servicos-container">
                <div className="servicos-titulo">
                    <h3>{titulo}</h3>
                </div>
                <div className="servicos-cards">
                    {
                       itens.map((servico) => (
                         <ServicosCard 
                            key={servico.id}
                            titulo={servico.titulo}
                            texto={servico.texto}
                            icone={servico.icone}
                         />  
                       ))
                    }                                      
                </div>
            </div>
        </section>
    );
};

export default Servicos;