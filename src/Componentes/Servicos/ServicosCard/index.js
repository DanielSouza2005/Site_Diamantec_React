import styles from "./servicoscard.module.css";

const ServicosCard = ({ titulo, texto, icone }) => {
    return (
        <div className={styles.servicosCard}>
            <div className={styles.servicosCardContainer}>
                <div className={styles.servicosCardIconeBox}>
                    {icone}
                </div>
                <h4>{titulo}</h4>
                <p>{texto}</p>
            </div>
        </div>
    );
}

export default ServicosCard;