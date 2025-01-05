import styles from "./TimeCard.module.css";

const TimeCard = ({ id, imagem, alt, nome, cargo }) => {
    return (
        <div key={id} className={styles.timeCard}>
            <div>
                <div>
                    <img
                        src={imagem}
                        alt={alt}
                    />
                </div>
                <div>
                    <h4>{nome}</h4>
                    <span>{cargo}</span>
                </div>
            </div>
        </div>
    );
};

export default TimeCard;