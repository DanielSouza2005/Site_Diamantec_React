import TimeCard from "../TimeCard";
import styles from "./Time.module.css";

const Time = ({ titulo, time }) => {
    return(
        <section 
            id="time"
            className={styles.time}
        >
            <div className={styles.timeContainer}>
                <div className={styles.timeTitulo}>
                    <h3>{ titulo }</h3>
                </div>
                <div className={styles.timeConteudo}>
                    {
                        time.map((integrante => (
                            <TimeCard 
                                key={integrante.id}       
                                id={integrante.id}
                                imagem={integrante.imagem}
                                alt={integrante.alt}
                                nome={integrante.nome}
                                cargo={integrante.cargo}
                            />
                        )))
                    }                    
                </div>
            </div>
        </section>
    );
};

export default Time;