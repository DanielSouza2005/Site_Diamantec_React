import styles from "./rodape.module.css";

const Rodape = ({ empresa, textoDireitos }) => {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodapeContainer}>
                <div className={styles.copyright}>
                    © Copyright 
                    <strong>
                        <span> {empresa}</span>
                    </strong>
                    . {textoDireitos}
                </div>
            </div>
        </footer>
    );
};

export default Rodape;