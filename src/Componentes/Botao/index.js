import styles from "./Botao.module.css";

const Botao = ({ children }) => {
    return (
        <button className={styles.botao}>
            {children}
        </button>
    );
}

export default Botao;