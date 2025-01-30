import styles from "./Botao.module.css";

const Botao = ({ children, tipo }) => {
    return (
        <button
            className={styles.botao}
            type={tipo}
        >
            {children}
        </button>
    );
}

export default Botao;