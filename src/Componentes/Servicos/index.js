import ServicosCard from "../ServicosCard";
import styles from "./servicos.module.css";

const Servicos = ({ itens, titulo }) => {
    return (
        <section id="servicos"
                 className={styles.servicos}
        >
            <div className={styles.servicosContainer}>
                <div className={styles.servicosTitulo}>
                    <h3>{titulo}</h3>
                </div>
                <div className={styles.servicosCards}>
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