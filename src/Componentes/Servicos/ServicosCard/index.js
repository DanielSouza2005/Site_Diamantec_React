import styles from "./servicoscard.module.css";

const ServicosCard = ({ servico }) => {
    return (
        <div className={styles.servicosCard}>
            <div className={styles.servicosCardContainer}>
                <div className={styles.servicosCardIconeBox}>
                    {servico.icone}
                </div>
                <h4>{servico.titulo}</h4>
                <p>{servico.texto}</p>
            </div>
        </div>
    );
}

export default ServicosCard;